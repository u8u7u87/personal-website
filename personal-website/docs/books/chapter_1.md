# 第一章：大模型基础与 API 开发 (Foundations & APIs)

在踏入 AI Engineering 的广阔天地之前，我们必须对手中的“武器”——大语言模型（LLM）有极其深刻的物理认知。不要把它当作一个无所不能的黑盒，而是把它看作一个**带有统计学概率的超大规模文本补全引擎**。

本章将带您从底层概念出发，理清 Token、Context Window 等核心概念，并掌握如何在代码中稳健地调用大模型 API。

---

## 1. 拨开大模型的迷雾：核心底层概念

### 1.1 万物皆 Token (Tokenization)
大模型并不认识人类的“字”或“词”，它的世界是由 **Token（标记）** 构成的。
*   **什么是 Token？** Token 是大模型处理文本的基本单位。它可以是一个词、一个汉字、甚至是一个字母。在英文中，1 个 Token 大约等于 0.75 个单词；在中文中，由于不同分词器的差异，1 个汉字通常对应 1~2 个 Token。
*   **为什么 Token 如此重要？**
    1.  **计费标准**：所有 API（如 OpenAI, 智谱, DeepSeek）都是按照 Token 的输入（Prompt）和输出（Completion）数量来计费的。
    2.  **性能瓶颈**：Token 数量直接决定了显存占用和推理时间。生成 1000 个 Token 的时间严格线性增长。

### 1.2 上下文窗口 (Context Window) 与 大海捞针 (NIAH)
上下文窗口是大模型在一次对话中能“记住”的 Token 数量上限。
*   **发展史**：从 GPT-3 的 4K，到 GPT-4 的 128K，再到月之暗面 Kimi 的 200万 甚至 Gemini 的 2000万，Context Window 正在呈指数级爆炸。
*   **大海捞针测试 (Needle In A Haystack)**：虽然模型声称支持 100 万 Token，但在长文本中间插入的关键信息，模型往往会“遗忘”或“忽略”（类似于人类读长篇小说时跳过中间的细节）。因此，**长上下文并不意味着可以无限塞入垃圾信息，依然需要 RAG 技术来精准供给上下文**。

### 1.3 LLM 的核心参数控制 (Hyperparameters)
当通过 API 调用模型时，有三个必须掌握的参数，它们直接决定了输出的风格：
*   **Temperature (温度, 0.0 - 2.0)**：控制输出的随机性与创造力。
    *   `T = 0.0`：绝对贪婪搜索，每次输出完全一致。**适用场景：代码生成、数据抽取、分类、JSON 格式化。**
    *   `T = 0.7 - 0.8`：具有一定的创造性。**适用场景：闲聊、文章撰写、头脑风暴。**
*   **Top_P (核采样, 0.0 - 1.0)**：与 Temperature 类似，通过截断概率分布的长尾来控制随机性。业界最佳实践是：**Temperature 和 Top_p 只调整其中一个**。
*   **Presence / Frequency Penalty**：用于惩罚模型重复说一样的话。如果你的 Agent 总是像复读机一样卡死，可以适当调高这两个值。

---

## 2. 主流大模型阵营选型指南 (State of the Models)

作为 AI 工程师，第一要务是根据场景**选对模型**。没有完美的模型，只有最契合成本与效果的模型。

### 2.1 闭源 API 阵营 (SaaS)
*   **OpenAI (GPT-4o / o1)**：永远的行业标杆，代码能力和复杂指令遵循能力的绝对天花板。
*   **Anthropic (Claude 3.5 Sonnet)**：代码能力甚至在部分场景超越 GPT-4o，且具备出色的“前沿安全性”和极高的人性化写作语感， Artifacts 交互界面的开创者。
*   **国内第一梯队 (智谱 GLM-4, 字节豆包, 月之暗面 Kimi)**：中文支持极佳，价格战打到“白菜价”，适合做国内 C 端应用和长文本解析底座。

### 2.2 开源基座阵营 (Open Weights)
当你因为数据隐私、局域网部署或降低 API 成本而需要自己部署模型时：
*   **Meta Llama 3 (8B/70B/400B)**：开源界的精神领袖，英文和代码能力极强，但原生中文词表较弱，通常需要使用国内微调版本。
*   **Qwen 2 (阿里通义千问) & DeepSeek V2/V3/Coder**：目前公认对中文最友好的顶尖开源基座。尤其是 DeepSeek Coder，在编程辅助场景下是极佳的平替。
*   **Yi (零一万物) / Baichuan (百川)**：在长文本处理及特定行业预训练上各具特色。

---

## 3. API 调用的正确工程姿势 (Engineering Best Practices)

不要再像写普通 HTTP 请求一样写 LLM API 调用，AI 工程化有着自己独特的通信规范。

### 3.1 拥抱流式输出 (Streaming)
大模型生成文字是逐个 Token 蹦出来的 (Auto-regressive)。如果你的生成需要 10 秒，让用户干等 10 秒是灾难性的体验。
**工程法则**：在面向 C 端的产品中，**强制使用 `stream=True` (SSE 技术)**。将首字延迟 (TTFT) 压低到 500ms 以内，边生成边渲染。

### 3.2 强迫模型吐出 JSON (JSON Mode & Structured Output)
传统的正则匹配去解析 LLM 输出极易崩溃（模型总爱加上“好的，以下是您的结果：”）。
**解决方案**：
1.  在 System Prompt 中严厉规定：`"You MUST output valid JSON ONLY, without any markdown formatting like \`\`\`json."`
2.  开启 API 的 `response_format={ "type": "json_object" }`（OpenAI 等支持此特性）。
3.  **最高阶（2026年主流）**：使用 OpenAI 的 `Structured Outputs`（强制遵循 JSON Schema），或者开源工具 `Outlines` 结合 Pydantic 模型，在推理引擎底层（FSM 状态机）拦截不合法的 Token 生成。

### 3.3 构建健壮的回退机制 (Fallback & Retry)
API 会遇到各种超时、触发风控拦截 (Content Filter) 或输出格式崩坏。
**工程法则**：
*   使用 `Tenacity` 库实现带指数退避 (Exponential Backoff) 的重试机制。
*   **模型 Fallback**：当 GPT-4o 接口超时挂掉时，代码应该自动切换到备用的 Claude 3.5 或本地的 Llama 3，确保系统高可用（HA）。

---

> [!IMPORTANT] **🛠️ 课后实战挑战**
> 尝试用 Python 编写一个脚本，调用你最喜欢的大模型 API，要求：
> 1. 输入一篇长达 5000 字的新闻稿。
> 2. `Temperature` 设置为 0。
> 3. 要求模型提取出新闻中的【时间】、【地点】、【核心人物】、【事件结论】，并**严格返回符合 Pydantic 定义的 JSON 格式**。
> 4. 解析该 JSON 并打印。

在掌握了底层概念与 API 调用后，下一章，我们将进入 AI Engineering 最深邃的艺术——**[第二章：提示词工程与系统设计](./chapter_2)**。
