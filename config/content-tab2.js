/* ===================================
   Tab2 内容数据：PC工具分析
   =================================== */

var CONTENT_TAB2 = {
    id: 'tab2',
    title: 'PC工具分析',
    subtitle: '主流 AI 编程工具深度分析',
    sections: [
        {
            id: 'section-openclaw',
            title: 'OpenClaw',
            desc: '跨平台 AI Agent 网关',
            subsections: [
                { heading: '它是什么', text: '2026开年最火爆的小龙虾，腾讯甚至在深圳给人批量免费安装。开源的 Agent 网关服务，以后台守护进程方式运行，接管消息通讯平台（如 Telegram、Discord）的传入载荷，解析用户意图后将指令分发给本地 Ollama 实例或云端 API，执行完成后回传结果。内置基于 <code>SKILL.md</code> 的技能编排树和工具调用鉴权模块。' },
                { heading: '核心特点', text: '完全本地化运行，数据不经过第三方服务器。支持 x402 协议的微支付模块用于推理路由计费。通过技能插件可接管操作系统底层权限，实现文件操作、命令执行等系统级任务。' },
                { heading: '主要缺点', text: '底层架构复杂，运行环境配置容易出错，对非技术用户不友好。深度系统访问权限在配置不当时存在安全风险。' },
                { heading: '适用人群', text: '注重数据隐私的个人开发者、需要在内网搭建自动化工作流的中小团队、偏好完全自托管方案的工程师。' },
                { heading: '下载与安装', text: '终端执行官方安装脚本：<code>curl -fsSL https://openclaw.bot/install.sh | bash</code>。Windows 用户需先安装 WSL2。' },
                { heading: '避雷要点', text: '1. 安装时注意环境变量 PATH 配置，否则会出现 "command not found" 错误。<br>2. Docker 安装需分配至少 2GB RAM，防止内存溢出。<br>3. 网关端口不要暴露于公网，必须绑定到 <code>127.0.0.1</code> 回环地址。<br>4. 从 ClawHub 安装第三方技能时存在供应链攻击风险，建议开启"仅限工作区文件系统访问"权限。' }
            ]
        },
        {
            id: 'section-claude-code',
            title: 'Claude Code',
            desc: 'Anthropic 发布的终端原生 AI 编程 Agent',
            subsections: [
                { heading: '它是什么', text: 'Claude Code 是运行在终端里的命令行 Agent，直接操作本地文件系统、执行 Shell 命令、读写代码库，不依赖 IDE 界面。与 Cursor 等编辑器集成方案不同，它以 CLI 为主交互面，适合在任何环境下（包括 SSH 远程服务器、CI 流水线）运行。' },
                { heading: '工作方式', text: '在项目根目录启动后，Claude Code 会读取目录结构和相关文件作为上下文，接收自然语言任务描述，自主决定读哪些文件、改哪些文件、执行什么命令。每次涉及写操作时默认要求人工确认，可通过 <code>--dangerously-skip-permissions</code> 参数跳过（适合在隔离沙盒中使用）。' },
                { heading: 'CLAUDE.md', text: '项目根目录的 <code>CLAUDE.md</code> 文件是 Claude Code 的行为约束文件，等同于 Spec-Driven Development 中的 Spec。可在其中定义禁止修改的文件范围、测试命令、代码风格要求、架构说明。Claude Code 在每次任务开始前会优先读取这个文件。' },
                { heading: '与其他工具的定位差异', text: 'Cursor 和 VSCode Copilot 的使用场景是"边写边看"，适合需要同步审查代码的开发者；Claude Code 更接近"交代任务、异步验收"，适合处理范围明确的重构、批量修改、跨文件联动等任务。两者可以配合使用而非互斥。<br>和Openclaw一样有强大的skill目录册，规划能力极强。' },
                { heading: '安装', text: '需要 Node.js 18+。执行 <code>npm install -g @anthropic-ai/claude-code</code> 安装，在项目目录运行 <code>claude</code> 启动。首次使用需要通过 Anthropic 账号完成授权。' },
                { heading: '绕过登录方法', text: '在终端的环境变量设置了 ANTHROPIC_API_KEY，Claude Code 在启动时会检测到它，并优先使用 API 计费模式，跳过浏览器登录流程。' }
            ]
        },
        {
            id: 'section-cursor',
            title: 'Cursor',
            desc: '深度集成 LLM 的 AI 代码编辑器',
            subsections: [
                { heading: '它是什么', text: '基于 VS Code 开源分支构建的编辑器，在代码库中内嵌了向量数据库（Vector DB），使模型能够检索整个项目的相关代码片段作为上下文。编辑器会隐式捕获光标位置、LSP 诊断信息和相邻文件变更，将其打包发送给推理服务器，返回差异补丁（Diff）并直接应用到源码中。' },
                { heading: '核心特点', text: 'Composer 多文件编辑引擎、本地向量库索引、支持在同一工作区灵活切换底层模型（如用 Claude 处理复杂逻辑，用其他模型处理简单补全）。' },
                { heading: '主要缺点', text: 'Pro 计划名义上 $20/月，但开启后台 Agent 或调用高级模型后实际费用经常达到 $40–50。平台闭源，存在供应商锁定风险。代码会发送至第三方 API，处理机密源码时需注意。' },
                { heading: '适用人群', text: '追求高效率的独立开发者、初创团队、习惯同步审查代码的学生群体。' },
                { heading: '下载与安装', text: '前往 <a href="https://cursor.sh" target="_blank">cursor.sh</a> 下载对应平台的安装包，首次启动时可选择导入现有 VS Code 的扩展、快捷键和配置。' },
                { heading: '避雷要点', text: '1. 默认 "Auto" 模式虽然调用内部轻量模型不额外计费，但一旦触发后台 Agent 或手动切换到 Claude / GPT 系列模型执行任务，高级积分会快速消耗。<br>2. 重度使用时需持续关注后台请求状态，避免不知情的超额扣费。<br>3. 涉及机密源码时，应评估代码发送至第三方 API 的数据风险。' }
            ]
        },
        {
            id: 'section-antigravity',
            title: 'Antigravity',
            desc: 'Google 发布的 Agent 优先异步协同 IDE',
            subsections: [
                { heading: '它是什么', text: 'Google 发布的编辑器，底层引入了任务编排与状态机逻辑，依托 Gemini 3.1 Pro 的超长上下文窗口实现多 Agent 并行调度。用户通过"控制中心（Manager Surface）"发布高层任务需求，系统实例化多个专职 Agent 并行执行（编码、测试、文档阅读等），生成截图、执行日志、计划书等可验证产出供人工异步审核。' },
                { heading: '核心特点', text: 'Agent 优先的管理器界面、无头 Chrome 预览、多 Agent 并行调度、可验证产出供异步审核。' },
                { heading: '主要缺点', text: '产品仍处于预览阶段，存在"过度自治"问题——Agent 有时会自行删除大量关联代码。目前缺乏轻量级对话模式，处理简单任务时显得臃肿。' },
                { heading: '适用人群', text: '全栈开发者、深耕 Google Cloud 生态的工程师、需要多 Agent 协同处理复杂工程的团队。' },
                { heading: '下载与安装', text: '访问 <a href="https://antigravity.google/download" target="_blank">antigravity.google/download</a> 下载 x64 或 ARM64 的 .exe 安装包。安装时可能触发 Windows Defender 警告，点击"更多信息"后选择"仍要运行"。' },
                { heading: '避雷要点', text: '1. 使用前确保 Git 工作区处于干净的已提交状态，防止 Agent 产生幻觉后大面积改写代码导致无法回滚。<br>2. Agent 具有较高的代码修改自主权，授权前需明确任务边界。<br>3. 目前仅对个人 Gmail 账号提供免费预览，企业场景需注意权限限制。' }
            ]
        },
        {
            id: 'section-codex',
            title: 'Codex',
            desc: 'OpenAI 云端代码 Agent',
            subsections: [
                { heading: '它是什么', text: 'OpenAI 的云端代码执行 Agent，在隔离的云端沙盒虚拟机中异步运行，能够自主执行代码、运行测试、提交 Pull Request。任务约束通过项目根目录的 <code>AGENTS.md</code> 文件定义，Agent 在整个执行周期内依照该文件的规则行事。' },
                { heading: '核心特点', text: '云端沙盒异步执行、支持无限并发 VM、自动提交 PR、通过 <code>AGENTS.md</code> 约束架构规范和测试规则。' },
                { heading: '主要缺点', text: '黑盒运行，开发者无法在执行过程中介入学习。<code>AGENTS.md</code> 配置不当会导致 Agent 在云端陷入无限报错重试循环，消耗大量 Token 配额。订阅费用高，ChatGPT Pro 计划每月 $200。' },
                { heading: '适用人群', text: '资金充足的企业团队、需要大规模重构庞大代码库的架构师、追求全自动化开发流程的组织。' },
                { heading: '下载与安装', text: '无需本地安装。在 OpenAI 平台注册并订阅对应计划后，通过网页端或 API 使用。解锁高并发能力需订阅 ChatGPT Pro（$200/月）。' },
                { heading: '避雷要点', text: '1. 必须在项目根目录严谨配置 <code>AGENTS.md</code>，明确测试命令、Lint 规则和禁止修改的文件范围。<br>2. 测试环境或 Lint 规则配置有误时，Agent 会在云端反复重试失败任务，Token 消耗难以预估。<br>3. 黑盒机制意味着执行过程不透明，不适合需要理解代码变更逻辑的学习场景。' }
            ]
        },
        {
            id: 'section-ollama',
            title: 'Ollama',
            desc: '本地大模型运行时',
            subsections: [
                { heading: '它是什么', text: '基于 <code>llama.cpp</code> 构建的本地模型运行工具，用一条命令完成模型下载和启动。对模型权重做 GGUF 格式的量化压缩（如 4-bit 量化），在显存不足时也能以较低精度运行。对外暴露兼容 OpenAI 格式的 REST API，端口默认为 11434。' },
                { heading: '核心特点', text: '一行命令部署、标准 REST API、支持 DeepSeek / Llama 4 等主流开源模型、自动调用 CUDA / Metal / AVX 硬件加速。' },
                { heading: '主要缺点', text: '运行大参数模型对硬件要求较高：模型权重需要尽量完整加载进显存（VRAM），显存不足时会降速使用系统内存，延迟会显著上升。没有独立显卡的设备运行 70B 以上模型基本不可用。' },
                { heading: '适用人群', text: '需要处理机密代码的研发部门、做本地 RAG 研究的学者、受制于网络环境无法稳定调用云端 API 的开发者。' },
                { heading: '下载与安装', text: 'macOS：<code>brew install ollama</code><br>Linux：<code>curl -fsSL https://ollama.com/install.sh | sh</code><br>Windows：前往 <a href="https://ollama.com" target="_blank">ollama.com</a> 下载可视化安装包。<br>安装后运行 <code>ollama run llama3.2</code> 验证是否正常工作。' },
                { heading: '避雷要点', text: '1. Docker 安装时必须挂载数据卷（<code>-v ollama:/root/.ollama</code>），否则容器重启后模型文件会丢失，需重新下载。<br>2. 默认 11434 端口只监听本地回环地址，局域网内其他设备无法直接调用，需手动配置端口转发。' }
            ]
        },
        {
            id: 'section-vscode',
            title: 'VSCode + GitHub Copilot',
            desc: '可扩展代码编辑器 + AI 编程助手',
            subsections: [
                { heading: '它是什么', text: 'VS Code 基于 Electron 和 Monaco 编辑器内核构建，通过语言服务器协议（LSP）和调试适配器协议（DAP）将 UI 层与语言解析层解耦，所有插件运行在独立的 Node.js 扩展宿主中，不阻塞主编辑器。2026 年版本引入了后台 Agent（Background Agents）和 Agent Skills 机制，可通过 <code>/create-skill</code> 等斜杠命令将重复工作流打包为可复用插件。' },
                { heading: '核心特点', text: '$10/月的 Copilot Pro 订阅、后台 Agent 执行、<code>/create-skill</code> 命令、庞大的插件生态。' },
                { heading: '主要缺点', text: 'Copilot 背靠微软大量企业客户，个人 Pro 用户在高峰期容易触发限流，服务会被暂时锁定。处理跨文件复杂逻辑时，平均任务解决时间比 Cursor 慢约 30%。' },
                { heading: '适用人群', text: '不想切换主力 IDE 的企业开发者、初学者、对成本敏感的个人开发者。' },
                { heading: '下载与安装', text: '下载标准版 VS Code 或 VS Code Insiders，在扩展商店搜索安装 <code>GitHub.copilot-chat</code>。' },
                { heading: '避雷要点', text: '1. 单纯依赖聊天对话框时，Copilot 缺乏对整体编译常量和依赖树的理解，需要在项目中维护一份架构说明文档供其检索。<br>2. 触发后台 Agent 前清理不必要的测试文件和日志，避免上下文污染导致请求被拒绝。' }
            ]
        }
    ]
};
