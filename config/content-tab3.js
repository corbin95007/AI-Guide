/* ===================================
   Tab3 内容数据：基座大模型
   包含复杂表格，用 customHTML 处理
   =================================== */

var CONTENT_TAB3 = {
    id: 'tab3',
    title: '基座大模型',
    subtitle: '主流基座大模型全面介绍',
    sections: [
        {
            id: 'section-vendors',
            title: '厂商生态全景',
            desc: 'AI 基础设施与模型生态的七大公司',
            customHTML: '<div class="vendor-ecosystem">' +
                '<div class="vendor-item"><h5>Nvidia</h5><p>AI 算力的基础设施层。GPU 硬件加上 CUDA 软件生态形成强绑定，绝大多数深度学习框架的默认加速后端都是 CUDA。</p></div>' +
                '<div class="vendor-item"><h5>Microsoft</h5><p>OpenAI 的主要投资方，持有 OpenAI 部分股权。通过 GitHub Copilot 和 Azure OpenAI Service 将 AI 能力直接嵌入企业开发和云服务管道。</p></div>' +
                '<div class="vendor-item"><h5>Alphabet / Google</h5><p>从芯片到应用的全栈布局：自研 TPU 芯片 → Gemini 模型系列 → Antigravity IDE。同时拥有 DeepMind 的基础研究积累。</p></div>' +
                '<div class="vendor-item"><h5>OpenAI</h5><p>GPT 和 o 系列模型的发布者，API 接口事实上成为行业标准格式，大量第三方工具和推理平台都兼容 OpenAI 的接口规范。</p></div>' +
                '<div class="vendor-item"><h5>Anthropic</h5><p>Claude 系列模型的发布者，以安全对齐研究和超长上下文窗口见长。Claude 在软件工程评测（SWE-Bench）上长期保持高位。</p></div>' +
                '<div class="vendor-item"><h5>Meta</h5><p>Llama 系列的发布者，采用开放权重策略，允许商业使用（有条件限制）。Llama 是目前被微调和二次分发最广泛的基础模型之一。</p></div>' +
                '<div class="vendor-item"><h5>DeepSeek</h5><p>以极低训练成本发布高性能开源模型，MoE 架构的激活参数控制使推理成本大幅低于同级别稠密模型，推动了行业对算力效率预期的重新评估。</p></div>' +
                '</div>'
        },
        {
            id: 'section-openai',
            title: 'OpenAI',
            desc: 'GPT 家族及强化学习推理模型',
            customHTML: '<div class="model-list">' +
                '<div class="model-item"><h5>GPT-5.4 Thinking <span class="badge closed">闭源</span></h5><p>2026年3月发布的最新推理巅峰，专为极高难度的逻辑链路设计。通过大幅进化的隐式链式思考，它在处理跨学科科研、高级架构设计及复杂法律推演时的准确率，已经将前代模型远远甩在身后。</p></div>' +
                '<div class="model-item"><h5>GPT-5.4 Pro <span class="badge closed">闭源</span></h5><p>现阶段最强的旗舰通用模型，主打生产环境中的"零误差"指令遵循。其最大的进化在于对Agent工作流的深度适配，能够稳定处理长达数周的异步任务，是目前专业领域最可靠的全能选母。</p></div>' +
                '<div class="model-item"><h5>o3 <span class="badge closed">闭源</span></h5><p>强化学习推理路线的"扫地僧"，核心优势依然是测试时动态计算（Test-Time Compute）。在纯数学竞赛、算法竞赛等不需要常识辅助、仅凭纯逻辑硬碰硬的领域，它依然保有极高的统治力。</p></div>' +
                '<div class="model-item"><h5>GPT-5.4 mini <span class="badge closed">闭源</span></h5><p>性价比与性能平衡的怪物级别产品。虽然定位是"小型"模型，但其在代码编写和逻辑常识上的得分已经超越了去年的 GPT-4.5 旗舰版，且响应延迟极低，。</p></div>' +
                '<div class="model-item"><h5>GPT-OSS-120B <span class="badge open">开源</span></h5><p>OpenAI 发布的 120B 参数开源模型，面向科研社区和有私有化部署需求的企业。</p></div>' +
                '</div>'
        },
        {
            id: 'section-google',
            title: 'Google',
            desc: 'Gemini 多模态系列及 Gemma 开放权重模型',
            customHTML: '<div class="model-list">' +
                '<div class="model-item"><h5>Gemini 3.1 Pro <span class="badge closed">闭源</span></h5><p>Google 目前最强的旗舰通用模型。采用全新的稀疏混合专家（MoE）架构，支持 200 万 token 超长上下文，在处理长视频分析、女男复杂协作文档以及大规模跨模态检索时表现极佳。</p></div>' +
                '<div class="model-item"><h5>Gemini 3 Deep Think <span class="badge closed">闭源</span></h5><p>专门对标深度推理路线的模型。通过强化学习与搜索算法结合，在解决奥数级数学、高难度系统架构及前沿生物化学模拟等领域具备惊人的逻辑深度。</p></div>' +
                '<div class="model-item"><h5>Gemini 3.1 Flash <span class="badge closed">闭源</span></h5><p>兼顾性能与极致响应速度的模型。支持高频实时交互，其文字与图像的端到端理解能力相比前代有质的飞跃，是目前低延迟应用场景的首选。</p></div>' +
                '<div class="model-item"><h5>Gemma 4 (31B Dense) <span class="badge open">开源</span></h5><p>2026 年 4 月发布的顶级开源模型，协议已转为 Apache 2.0。在数学和逻辑指标上超越了诸多 70B 级模型，并首次在开源阵列中实现了原生视觉与音频理解能力。</p></div>' +
                '<div class="model-item"><h5>Gemma 4 (26B MoE) <span class="badge open">开源</span></h5><p>采用混合专家架构的高效率开源标杆。运行时仅激活约 4B 参数，使得普通的开发者在单张家用级显卡上也能运行具备顶级逻辑能力的智能体任务。</p></div>' +
                '</div>'
        },
        {
            id: 'section-anthropic',
            title: 'Anthropic',
            desc: 'Claude 宪法 AI 模型矩阵',
            customHTML: '<div class="model-list">' +
                '<div class="model-item"><h5>Claude 4.6 Opus <span class="badge closed">闭源</span></h5><p>2026 年最新旗舰模型，适用于高复杂度逻辑推理、多步 API 集成和长周期规划任务。</p></div>' +
                '<div class="model-item"><h5>Claude 4.6 Sonnet <span class="badge closed">闭源</span></h5><p>在代码生成和 AST 重构任务上速度与精度平衡较好，是 Cursor 等编辑器的主要集成模型之一。</p></div>' +
                '<div class="model-item"><h5>Claude 4.0 Haiku <span class="badge closed">闭源</span></h5><p>针对大规模并行处理和轻量级文本提取优化的快速模型，延迟和成本在 Claude 系列中最低。</p></div>' +
                '<div class="model-item"><h5>Claude 3.5 Sonnet <span class="badge closed">闭源</span></h5><p>上一代软件工程任务的主力模型，SWE-Bench 评分曾长期领先，目前被广泛集成于自动代码审查流水线中。</p></div>' +
                '<div class="model-item"><h5>Claude 3.5 Haiku <span class="badge closed">闭源</span></h5><p>上一代低延迟模型，成本效益在当时的 Claude 系列中最高。Anthropic 目前不开放模型权重。</p></div>' +
                '</div>'
        },
        {
            id: 'section-deepseek',
            title: 'DeepSeek（深度求索）',
            desc: '高性能开源混合专家架构模型',
            customHTML: '<div class="model-list">' +
                '<div class="model-item"><h5>DeepSeek-V3 <span class="badge open">开源</span></h5><p>671B 总参数的 MoE 架构模型，每次推理只激活约 37B 参数。采用无辅助损失负载均衡和 FP8 混合精度训练，将训练成本控制在远低于同规模稠密模型的水平。</p></div>' +
                '<div class="model-item"><h5>DeepSeek-R1 <span class="badge open">开源</span></h5><p>通过大规模强化学习训练的推理模型，完整开源了链式思考机制和奖励模型细节，是目前少数公开推理训练细节的模型之一。</p></div>' +
                '<div class="model-item"><h5>DeepSeek-Coder-V2 <span class="badge open">开源</span></h5><p>针对代码任务微调，支持 80+ 种编程语言，在跨文件上下文关联和库级代码理解方面表现较好。</p></div>' +
                '<div class="model-item"><h5>DeepSeek-VL2 <span class="badge open">开源</span></h5><p>多模态视觉语言模型，可用于 UI 截图反解和图表数据提取任务。</p></div>' +
                '<div class="model-item"><h5>DeepSeek-Math <span class="badge open">开源</span></h5><p>专注数学任务的小参数模型，针对定理证明、LaTeX 公式推导和符号计算环境优化。</p></div>' +
                '</div>'
        },
        {
            id: 'section-pricing',
            title: '闭源模型定价表',
            desc: '主流闭源模型的 API 调用成本对比',
            customHTML: '<div class="pricing-table"><table><thead><tr><th>模型</th><th>厂商</th><th>核心优势</th><th>输入价格 / 百万 Token</th><th>输出价格 / 百万 Token</th></tr></thead><tbody>' +
                '<tr><td>GPT-5.4</td><td>OpenAI</td><td>编码 + 计算机操控 + 知识工作三合一旗舰（SWE-Bench Pro 57.7%）</td><td class="price">$2.50</td><td class="price">$15.00</td></tr>' +
                '<tr><td>GPT-5.3 Codex</td><td>OpenAI</td><td>终端与 CLI 密集型工程任务，输入成本低于 GPT-5.4</td><td class="price">$1.75</td><td class="price">$14.00</td></tr>' +
                '<tr><td>Gemini 3.1 Pro</td><td>Google</td><td>百万 Token 上下文，ARC-AGI-2 77.1%，Antigravity 底层驱动</td><td class="price">$2.00</td><td class="price">$12.00</td></tr>' +
                '<tr><td>Claude Opus 4.6</td><td>Anthropic</td><td>软件工程与多步推理（SWE-Bench Verified 领先）</td><td class="price">$15.00</td><td class="price">$75.00</td></tr>' +
                '<tr><td>Grok 4</td><td>xAI</td><td>内置 X 实时搜索，256K 上下文，always-on 推理</td><td class="price">$3.00</td><td class="price">$15.00</td></tr>' +
                '</tbody></table></div>'
        },
        {
            id: 'section-opensource',
            title: '开源模型对比表',
            desc: '主流开源模型的架构与性能对比',
            customHTML: '<div class="opensource-table"><table><thead><tr><th>模型</th><th>厂商</th><th>架构 / 参数</th><th>核心优势</th></tr></thead><tbody>' +
                '<tr><td>DeepSeek V3.2</td><td>DeepSeek</td><td>MoE 671B 总 / 37B 激活</td><td>低训练成本，GSM8K 96.0%</td></tr>' +
                '<tr><td>MiniMax-M2.5</td><td>MiniMax</td><td>MoE 229B 总 / 10B 激活</td><td>推理能效高，SWE-Bench 80.2%</td></tr>' +
                '<tr><td>Llama 4 Scout</td><td>Meta</td><td>109B 总 / 17B 激活</td><td>1000 万 Token 上下文窗口</td></tr>' +
                '<tr><td>Qwen3 VL 235B</td><td>Alibaba</td><td>235B 多模态</td><td>GUI 自动化视觉识别</td></tr>' +
                '<tr><td>Kimi K2.5</td><td>Moonshot AI</td><td>MoE 1T 总 / 32B 激活</td><td>UI 设计稿转 React 代码</td></tr>' +
                '<tr><td>Gemma 4 31B</td><td>Google</td><td>31B 稠密，Apache 2.0</td><td>Arena AI 排行 #3，AIME 2026 89.2%，LiveCodeBench 80.0%</td></tr>' +
                '</tbody></table></div>'
        },
        {
            id: 'section-channels',
            title: '模型获取渠道',
            desc: '三种主流分发方式与使用建议',
            customHTML: '<div class="distribution-channels">' +
                '<div class="channel-item"><h5>官方直接订阅与 API</h5><p>在厂商官网注册并绑卡获取 API Key，适合需要稳定 SLA 保障的生产环境。延迟和可用性通常优于中转服务，但各厂商接口格式不统一，多模型切换需要适配。</p></div>' +
                '<div class="channel-item"><h5>AI 聚合中转平台</h5><p>通过 OpenRouter、Fireworks.ai 等平台调用，统一接口格式，支持按需切换多家厂商模型，统一计费。适合需要频繁对比模型或降低接入成本的场景，但多一层中转意味着多一个延迟节点。</p></div>' +
                '<div class="channel-item"><h5>本地部署</h5><p>HuggingFace <code>https://huggingface.co/</code> 或 Ollama 可以下载开源模型权重到本地运行，数据不离开本机。适合隐私敏感或离线场景，但需要匹配的硬件资源，大参数模型对显存要求较高。</p></div>' +
                '</div>'
        }
    ]
};
