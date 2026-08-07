# Chapter 1: Generative AI & Retrieval-Augmented Generation (RAG)

Generative Artificial Intelligence (GenAI) combined with Retrieval-Augmented Generation (RAG) represents a paradigm shift in software engineering. By augmenting Large Language Models (LLMs) with external knowledge sources, developers can build applications that are accurate, contextual, and grounded in proprietary data.

---

## 1. Generative AI Foundations

At the core of GenAI applications is the interactions with LLMs. Transitioning from simple text generation to reliable application integration requires mastering prompting techniques and structured outputs.

### Prompt Engineering
Effective prompt engineering controls LLM behavior and output formats. Key strategies include:
- **System Prompts**: Establish the persona, scope of work, and strict guidelines (e.g., "You are a database administrator. Reject any queries not related to SQL...").
- **Few-Shot Prompting**: Provide input-output examples in the context window to guide the model on desired format, tone, or style.
- **Chain-of-Thought (CoT)**: Force the model to generate intermediate reasoning steps before arriving at the final answer (e.g., "Let's think step by step..."), improving performance on math and logic tasks.

### Structured Outputs (JSON Structures)
For programmatic consumption, models must return structured formats rather than free-form text.
- **JSON Mode**: Instructs the model to output valid JSON.
- **JSON Schema / Function Calling**: Specifying a JSON Schema guarantees the output conforms to a strict type signature.
  
Example Schema for a user extraction task:
```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "age": { "type": "integer" },
    "skills": {
      "type": "array",
      "items": { "type": "string" }
    }
  },
  "required": ["name", "age", "skills"]
}
```

---

## 2. Retrieval-Augmented Generation (RAG) Architectures

RAG addresses LLM limitations such as static training data and hallucinations by querying external data sources before generating a response.

```
[User Query] ──> [Retrieval Pipeline] ──> [Vector DB Search]
                       │
                       ▼
[LLM Generation] <── [Augmented Context (Query + Retrieved Docs)]
```

### Ingestion Pipeline
Before data can be retrieved, it must go through an ingestion pipeline:
1. **Document Loading**: Extracting text from PDFs, HTML files, markdown, or databases.
2. **Chunking**: Splitting text into manageable segments.
   - *Fixed-size chunking*: Overlapping windows of token/character limits.
   - *Recursive/Semantic chunking*: Respecting structure (paragraphs, headers) and semantic boundaries to keep related concepts together.
3. **Embedding**: Converting text chunks into high-dimensional vectors representing semantic meaning using models like OpenAI's `text-embedding-3-small` or HuggingFace open-source models.

---

## 3. Vector Databases: Chroma & Milvus

Vector databases are optimized for storing high-dimensional embeddings and performing fast similarity searches.

### Chroma
- **Characteristics**: Lightweight, developer-friendly, and embedded.
- **Best For**: Local prototyping, small-scale desktop applications, or quick tests.
- **Implementation**: Runs in-process alongside Python applications.

### Milvus
- **Characteristics**: Enterprise-grade, highly scalable, and distributed.
- **Best For**: Production environments handling millions to billions of vectors, requiring multi-node scaling and high availability.
- **Implementation**: Deployed via Docker/Kubernetes with independent search node, query node, and index node scaling.

### Similarity Metrics
When querying a vector database, the closest chunks are found using vector distance metrics:
- **Cosine Similarity**: Measures the angle between two vectors; ignores magnitude.
- **L2 Distance (Euclidean)**: Measures straight-line distance; sensitive to magnitude.
- **Inner Product (IP)**: Highly efficient for normalized vectors.

