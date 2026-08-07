# Chapter 3: MLOps, Fine-Tuning & Quantization

Deploying Large Language Models at scale requires balancing model accuracy, latency, throughput, and hardware costs. This chapter covers the tools and mathematical optimizations used to customize models via Parameter-Efficient Fine-Tuning (PEFT), compress them using quantization, and run them with high throughput.

---

## 1. Model Customization: LoRA & QLoRA

Training a modern LLM containing billions of parameters from scratch is economically and computationally prohibitive. Instead, we use Parameter-Efficient Fine-Tuning (PEFT) to adapt pre-trained models.

### LoRA (Low-Rank Adaptation)
LoRA freezes the pre-trained model weights and injects trainable rank decomposition matrices into each layer of the Transformer architecture. This drastically reduces the number of trainable parameters.

- **Weight Update Formula**: The final weight $W$ is represented as:
  $$W = W_0 + \Delta W = W_0 + \frac{\alpha}{r} (B \times A)$$
  where $W_0$ is the frozen base weight of shape $(d \times k)$, $B$ is a matrix of shape $(d \times r)$, $A$ is a matrix of shape $(r \times k)$, and the rank $r \ll \min(d, k)$.
- **Advantages**: Reduces GPU memory usage during training up to 90% and produces small adapter files (megabytes instead of gigabytes) that can be swapped dynamically.

### QLoRA (Quantized LoRA)
QLoRA improves upon LoRA by quantizing the base model down to 4-bit representation before applying the LoRA adapters. It introduces three key optimizations:
1. **NF4 (NormalFloat 4)**: A mathematically optimal quantization data type for normally distributed base model weights.
2. **Double Quantization (DQ)**: Quantizes the quantization constants themselves, saving additional memory.
3. **Paged Optimizers**: Uses CPU RAM page tables to prevent out-of-memory errors during gradient spikes.

---

## 2. Model Compression: Quantization Formats

Quantization reduces the precision of the model weights (e.g., from FP16 to INT8 or INT4), resulting in smaller file sizes and faster computation at the cost of minimal perplexity loss.

| Format | Target Hardware | Primary Use Case | Key Strengths |
|---|---|---|---|
| **GGUF** | CPU, Apple Silicon | Local execution (llama.cpp) | Single-file format, rapid CPU offloading. |
| **AWQ** | Nvidia GPUs | Production server deployments | High accuracy, hardware-accelerated INT4/INT32 execution. |
| **FP8** | Modern GPUs (H100, L4) | High-performance inference | Native FP8 tensor core acceleration, near-zero accuracy loss. |

- **GGUF (GPT-Generated Unified Format)**: Designed for fast loading and execution on consumer hardware, particularly with unified memory architectures.
- **AWQ (Activation-aware Weight Quantization)**: Protects the top 1% salient weights that contain the most information, allowing the remaining 99% to be aggressively quantized to 4-bit.
- **FP8 (Floating Point 8)**: Uses E4M3 and E5M2 representation formats. Adopted by modern deep learning libraries for high-throughput training and inference without the scale-calibration overhead of INT8.

---

## 3. Production Inference Engines

Once a model is fine-tuned and quantized, it must be served efficiently to handle multiple concurrent user requests.

### vLLM
vLLM is a high-throughput, low-latency LLM serving engine designed for multi-user web environments.
- **PagedAttention**: Leverages virtual memory ideas to store the Attention KV Cache in non-contiguous physical memory pages. This eliminates memory fragmentation and increases serving capacity by up to 2-4x.
- **Continuous Batching**: Processes requests dynamically at the token level, preventing idle GPU cycles during multi-turn generation.

### Ollama
Ollama is a developer-centric tool for running open-source models locally.
- **Developer Experience**: Packages models, configuration, and dependencies into a single "Modelfile".
- **Local API**: Exposes an OpenAI-compatible API running locally on port `11434`.
- **Resource Management**: Automatically handles CPU/GPU split allocation based on system capabilities.

