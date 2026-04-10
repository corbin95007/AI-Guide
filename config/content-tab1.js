/* ===================================
   Tab1 内容数据：名词概念
   修改文案只改这里，桌面端和移动端自动同步
   =================================== */

var CONTENT_TAB1 = {
    id: 'tab1',
    title: '名词概念',
    subtitle: 'AI 应用开发的核心概念入门',
    sections: [
        {
            id: 'section-llm',
            title: 'LLM (Large Language Model)',
            desc: '大语言模型',
            subsections: [
                { heading: '它做什么', text: 'LLM 是一个文字预测系统，训练目标只有一个：给定前面所有的词，预测下一个词的概率分布。这个任务在足够大的数据和参数规模下，会涌现出推理、翻译、代码生成等能力。' },
                { heading: '训练过程', text: '分两阶段。预训练阶段用海量文本做无监督学习，让模型建立语言的统计规律；随后通过 SFT（监督微调）喂给它正确示范，再用 RLHF（基于人类反馈的强化学习）纠正行为偏差，使输出符合人类意图。' },
                { heading: '推理时发生了什么', text: '输入文本先被分词器切成 Token 序列，每个 Token 映射为高维向量。Transformer 的自注意力机制（Self-Attention）让每个位置的向量都能"看见"序列中其他所有位置，捕捉远距离依赖关系。模型随后逐个生成输出 Token，每步都是一次概率采样。' }
            ]
        },
        {
            id: 'section-api',
            title: 'API (Application Programming Interface)',
            desc: '应用程序编程接口',
            subsections: [
                { heading: '它是什么', text: 'API 是两个程序之间约定好的通信接口。调用方按照接口规范发送请求，提供方处理后返回结果，双方不需要知道对方内部的实现细节。对于 LLM 来说，API 是外部程序访问模型推理能力的唯一入口。' },
                { heading: '一次 API 调用发生了什么', text: '客户端向服务端发送一个 HTTP POST 请求，请求体是 JSON 格式，包含模型名称、消息列表、温度等参数。服务端收到后将消息转成 Token 序列，送入模型推理，再将输出 Token 解码为文本，以 JSON 格式返回。整个过程是无状态的——服务端不记录上下文，每次调用都是独立的。' },
                { heading: 'REST vs Streaming', text: '默认的 REST 模式下，客户端等待模型生成完毕后一次性收到完整响应。Streaming 模式下，服务端通过 SSE（Server-Sent Events）逐 Token 推送，客户端可以边收边显示，适合对延迟敏感的场景。大多数 LLM API 两种模式都支持，通过请求参数 <code>stream: true</code> 切换。' },
                { heading: '鉴权与限流', text: '调用时需要在请求头中携带 API Key（<code>Authorization: Bearer sk-...</code>），服务端以此识别调用方身份并记账。每个 Key 有 RPM（每分钟请求数）和 TPM（每分钟 Token 数）两个维度的限流，超出后返回 429 错误。' }
            ]
        },
        {
            id: 'section-agent',
            title: 'Agent (Autonomous Agent)',
            desc: '自治智能体',
            subsections: [
                { heading: '它做什么', text: 'Agent 是把 LLM 放进一个循环里的架构。单次调用 LLM 只能回答一个问题；Agent 让它在每次回答后决定下一步行动，直到任务完成。' },
                { heading: '循环结构', text: '每轮循环包含：观察当前状态 → 推理下一步 → 选择并执行工具（搜索、读文件、写代码、调 API）→ 将执行结果写回上下文 → 进入下一轮。终止条件由任务目标或最大步数限制决定。' },
                { heading: '记忆系统', text: '短期记忆是当前对话的 Context 窗口，有长度上限；长期记忆依赖外部 Vector DB，通过相似度检索按需加载。两者组合决定了 Agent 在多轮任务中能记住多少信息。' }
            ]
        },
        {
            id: 'section-mcp',
            title: 'MCP (Model Context Protocol)',
            desc: '模型上下文协议',
            subsections: [
                { heading: '它解决什么问题', text: 'LLM 本身无法主动读取文件、查询数据库或执行代码，每个工具都需要定制集成，维护成本高。MCP 定义了一套标准接口，让任何工具只需实现一次协议，就能被所有支持 MCP 的客户端调用。' },
                { heading: '架构', text: '分为三层：Host（如 IDE 或 Claude Desktop）管理整体生命周期；Client 负责与 Server 建立连接；Server 向外暴露具体工具和资源。LLM 通过 JSON-RPC 与 Server 通信，在授权范围内执行操作。' },
                { heading: '与 A2A / ACP 的关系', text: 'MCP 处理的是模型与工具之间的连接；A2A（Agent-to-Agent）处理的是多个 Agent 之间的协作分工；ACP（Agent Communication Protocol）处理分布式 Agent 网络中的异步消息传递。三个协议各自负责不同层级。' }
            ]
        },
        {
            id: 'section-token',
            title: 'Token',
            desc: '语言模型的基本计算单元',
            subsections: [
                { heading: '什么是 Token', text: 'Token 是分词器将原始文本切分后的最小单位，可以是一个完整的词、一个词的一部分、一个标点或几个字节。英文大约每 4 个字符对应 1 个 Token；中文因为字符密度更高，比例会有所不同。' },
                { heading: '计费方式', text: 'API 调用会计费两次：输入时按发送给模型的 Token 数计算一次，模型生成回复后再按输出 Token 数计算一次。输出 Token 的单价是输入的 3 到 10 倍，因为每个输出 Token 都需要完整执行一次前向传播。' },
                { heading: '对系统设计的影响', text: 'Context 窗口有 Token 上限，超出即被截断。输出成本更高的定价结构，使得"让模型少说话、精确说"成为降本的核心方向，也是 Prompt 工程和输出格式控制的主要动机之一。' }
            ]
        },
        {
            id: 'section-prompt',
            title: 'Prompt & Context',
            desc: '提示词与上下文工程',
            subsections: [
                { heading: 'Prompt 是什么', text: 'Prompt 是发送给模型的完整输入，通常分为 System Prompt（设定角色、规则、输出格式）和 User Message（当次用户指令）。System Prompt 在每次调用时都会发送，直接占用 Context 配额并产生计费。' },
                { heading: 'Context 的限制', text: 'Context 窗口是模型在单次推理中能处理的最大 Token 数。窗口内的所有内容——系统指令、历史对话、工具返回值、RAG 文档——共享同一个上限。信息量超过窗口后，早期内容会被截断丢失。' },
                { heading: 'Lost in the Middle 效应', text: '研究表明，模型对 Context 首尾的内容注意力最强，对中间段落的处理精度明显下降。这意味着重要信息的位置会影响模型的实际表现，不能假设放进 Context 就等于模型会正确使用。' }
            ]
        },
        {
            id: 'section-workflow',
            title: 'Workflow',
            desc: '智能体工作流',
            subsections: [
                { heading: '它做什么', text: 'Workflow 是将多个 LLM 调用和工具执行串联成有序流程的架构模式。与单次对话不同，Workflow 可以跨越多步、多模型、多工具完成一个完整任务。' },
                { heading: '两种主要模式', text: '确定性 Workflow 的执行路径由代码预先定义，每步的输入输出都有明确规范，适合流程固定的生产场景；自主 Workflow 让 Agent 自行决定每步调用什么、何时终止，灵活性更高但结果稳定性更低。' },
                { heading: '错误处理', text: '多步任务中，单步失败会级联影响后续步骤。工程上通常设置重试机制、步骤级回滚和最大循环次数限制，防止 Agent 在错误状态中无限迭代。' }
            ]
        },
        {
            id: 'section-skills',
            title: 'Skills',
            desc: '技能模块',
            subsections: [
                { heading: '它解决什么问题', text: 'Agent 在执行特定任务时需要专项知识，比如如何操作某个 API、遵守哪些代码规范。如果把所有知识都写入 System Prompt，Context 会迅速膨胀，且大部分内容在当前任务中用不到。' },
                { heading: '工作方式', text: '技能以独立文件（通常是 .md 或 .json）存储，每个文件描述一种能力的操作规范。Agent 在判断当前任务需要某项技能时，才将对应文件加载进 Context，其余时间不占用窗口空间。' },
                { heading: '设计原则', text: '每个技能文件应当职责单一、边界清晰，便于 Agent 准确判断何时加载。过度宽泛的技能描述会导致误加载，反而增加无效 Token 消耗。' }
            ]
        },
        {
            id: 'section-a2a',
            title: 'A2A & ACP',
            desc: '智能体间通信协议',
            subsections: [
                { heading: '为什么需要 Agent 间协议', text: '单个 Agent 的能力受 Context 窗口和专项知识的限制。将复杂任务拆分给多个专职 Agent 并行处理，再汇总结果，是突破单 Agent 上限的主要方式。但多 Agent 协作需要标准化的通信接口，否则每对 Agent 之间都要定制集成。' },
                { heading: 'A2A 与 ACP 的区别', text: 'A2A（Agent-to-Agent Protocol）定义的是 Agent 之间如何协商任务分工、传递子任务和返回结果；ACP（Agent Communication Protocol）更偏向底层，处理分布式环境中异步消息的格式、路由和确认机制。' },
                { heading: '与 MCP 的分层关系', text: 'MCP 负责 Agent 与外部工具的连接，A2A/ACP 负责 Agent 与 Agent 之间的连接。三者在不同层级各自工作，组合使用可以构建跨模型、跨工具的多智能体系统。' }
            ]
        },
        {
            id: 'section-vibe',
            title: 'Vibe Coding',
            desc: '自然语言驱动的编程范式',
            subsections: [
                { heading: '它是什么', text: 'Vibe Coding 指完全用自然语言描述意图，让 AI 生成并迭代代码，开发者不直接编写也不逐行审查源码的编程方式。由 Andrej Karpathy 在 2025 年初提出并命名。核心前提是：模型的代码能力已经足够强，人工介入的边际价值在许多场景下低于让模型自行迭代的成本。' },
                { heading: '工作方式', text: '开发者描述想要的功能或行为，Agent 生成代码并运行，将报错和输出反馈给模型，模型再修正，循环直到结果符合预期。开发者的主要工作从"写代码"变成"描述目标、验证结果、决定是否接受"。' },
                { heading: '适用边界', text: '在原型验证、个人工具、一次性脚本等场景效率显著。在需要长期维护、多人协作或强安全约束的生产代码库中，完全不审查代码会积累隐性技术债，且模型生成的代码在跨文件依赖复杂时容易引入难以回滚的错误。' }
            ]
        },
        {
            id: 'section-spec',
            title: 'Spec-Driven Development',
            desc: '规格驱动开发',
            subsections: [
                { heading: '它是什么', text: 'Spec-Driven Development 是在让 AI 写代码之前，先用自然语言写一份结构化的规格文档（Spec），明确定义系统行为、边界条件、数据结构和验收标准，再将 Spec 作为 Agent 的执行依据。它是对 Vibe Coding 的约束层——保留了自然语言驱动的效率，同时给 Agent 的行为划定了可验证的边界。' },
                { heading: 'Spec 包含什么', text: '通常包括：功能目标与非目标（明确排除什么）、输入输出的数据契约、错误处理策略、禁止修改的文件或模块范围、验收测试的通过条件。Codex 的 <code>AGENTS.md</code> 和 Cursor 的 Rules 文件本质上都是这一思路的具体实现。' },
                { heading: '为什么需要它', text: 'Agent 在没有明确约束时倾向于以"让测试通过"为目标，而不是"实现正确行为"——它可能删除测试、硬编码返回值、或修改不该动的文件。Spec 的作用是在任务开始前把"什么算对"说清楚，使 Agent 的自主决策空间收窄到可接受的范围内。' }
            ]
        }
    ]
};
