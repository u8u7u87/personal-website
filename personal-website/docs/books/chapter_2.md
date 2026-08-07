# Chapter 2: Agentic Systems

Agentic Systems represent a major evolution in how we interact with Large Language Models. Instead of using LLMs as static, stateless text predictors or one-shot translators, agentic architectures treat the LLM as a central reasoning engine (or "brain") capable of planning, invoking external tools, and dynamically reacting to feedback.

---

## 1. The ReAct Pattern & Planner Loops

At the core of most autonomous agents is a control loop. The most influential paradigm for this is **ReAct (Reasoning and Acting)**.

```
┌──────────────────────────────────────┐
│                User                  │
└──────────────────┬───────────────────┘
                   │ User Query
                   ▼
┌──────────────────────────────────────┐
│        Reasoning Loop (LLM)          │
│                                      │
│  1. Thought: Reason about state      │◄───────┐
│  2. Action: Choose tool & parameters  │        │
│  3. Observation: Process tool output │        │
└──────────────────┬───────────────────┘        │
                   │                            │
                   │ Invokes Tool               │ Tool Output
                   ▼                            │ (Observation)
┌──────────────────────────────────────┐        │
│            External Tools            ├────────┘
│ (Web Search, DB, API, Code Sandbox)  │
└──────────────────────────────────────┘
```

The agent runs in a cycle:
1. **Thought**: The model reasons about the current state of the task and determines the next step.
2. **Action**: The model decides to invoke a specific tool with exact arguments.
3. **Observation**: The system executes the tool and feeds the result back to the model's context.

This loop repeats until the model determines it has sufficient information to formulate a final response.

---

## 2. Tool Calling & Function Routing

For an LLM to interact with the physical world, it needs a way to call APIs. This is achieved via **Tool Calling** (or Function Calling).

### Tool Schema Definition
Tools are described to the model using JSON Schema. The schema defines the function name, description, and parameter types, which the model uses to generate a formatted tool call.

Example tool definition:
```json
{
  "name": "get_stock_price",
  "description": "Retrieves the current stock price for a given ticker symbol.",
  "parameters": {
    "type": "object",
    "properties": {
      "ticker": { "type": "string", "description": "The stock ticker symbol (e.g. AAPL)" }
    },
    "required": ["ticker"]
  }
}
```

### Function Routing
When the model outputs a tool call containing `{"name": "get_stock_price", "arguments": {"ticker": "AAPL"}}`, the orchestrator application parses this output and routes it to a local executable function:

```python
def route_action(action_name, arguments):
    if action_name == "get_stock_price":
        return get_stock_price(arguments["ticker"])
    raise ValueError(f"Unknown tool: {action_name}")
```

---

## 3. Self-Reflection & Verification

Agents can easily go off-track or hallucinate incorrect tool parameters. To prevent this, advanced agent architectures integrate **Self-Reflection** or **Self-Correction** loops:
- **Critique Step**: After generating an answer or code snippet, the agent is prompted to review its own output against constraints (e.g., "Review the generated code for syntax errors and edge cases.").
- **Execution Verification**: If the agent attempts to run a query or code and receives an error, the error message is fed back into the prompt context, allowing the agent to self-correct and try a different approach.

---

## 4. Multi-Agent Systems

While single agents can handle simple tasks, complex workflows often require coordinating multiple specialized agents.

### CrewAI
- **Focus**: Role-based, collaborative agent workflows.
- **Concepts**: 
  - **Agents**: Defined with specific roles, goals, and backstories (e.g., "Researcher", "Writer").
  - **Tasks**: Specific assignments with concrete deliverables.
  - **Crews**: A group of agents working sequentially or hierarchically to complete tasks.

### AutoGen
- **Focus**: Conversation-driven multi-agent orchestration.
- **Concepts**:
  - **Conversational Agents**: Agents communicate with each other via natural language messages.
  - **Customizable Topologies**: Supports complex agent relationships (e.g., group chats, round-robin, state-machine transitions).
  - **Human-in-the-Loop**: Seamlessly integrates human intervention during agent conversations.

