/* ===================================
   Tab4 内容数据：教程资源
   =================================== */

var CONTENT_TAB4 = {
    id: 'tab4',
    title: '教程资源',
    subtitle: '学习 AI Engineer 的核心教程与指南',
    sections: [
        {
            id: 'section-vibe-tutorial',
            title: 'vibe 教程',
            desc: '掌握自然语言驱动的编程范式',
            subsections: [
                { heading: '什么是 Vibe Coding', text: 'Vibe Coding 是由 Andrej Karpathy 在 2025 年初提出的全新编程范式。它的核心理念是：开发者完全使用自然语言描述意图，让 AI 生成并迭代代码，开发者不直接编写也不逐行审查源码。模型足够强大时，人工介入的边际价值在许多场景下低于让模型自行迭代的成本。' },
                { heading: '入门路径', text: '1. 选择合适的 AI 编程工具（推荐 Cursor 或 Claude Code）<br>2. 从简单的需求开始：修复 bug、添加小功能、重构代码<br>3. 学会用自然语言精确描述你的需求<br>4. 理解工具的能力边界，不在复杂逻辑上过度依赖 AI' },
                { heading: '最佳实践', text: '使用 Spec-Driven Development 方法，在让 AI 写代码之前先写一份规格文档（Spec），明确定义系统行为、边界条件、数据结构和验收标准。这能确保 AI 的输出符合预期，避免无谓的迭代。' }
            ]
        },
        {
            id: 'section-install-tutorial',
            title: '工具安装教程',
            desc: '主流 AI 编程工具的安装与配置指南',
            subsections: [
                { heading: 'Cursor 安装', text: '1. 访问 <a href="https://cursor.sh" target="_blank">cursor.sh</a> 下载对应平台的安装包<br>2. 安装后首次启动时可选择导入现有 VS Code 的扩展、快捷键和配置<br>3. 注册账号并选择订阅计划（Pro 计划 $20/月）<br>4. 在设置中配置 API Key 或使用内置积分' },
                { heading: 'Claude Code 安装', text: '1. 确保已安装 Node.js 18+<br>2. 执行 <code>npm install -g @anthropic-ai/claude-code</code><br>3. 在项目目录运行 <code>claude</code> 启动<br>4. 首次使用需要通过 Anthropic 账号完成授权，或设置环境变量 <code>ANTHROPIC_API_KEY</code>' },
                { heading: 'Ollama 安装', text: 'macOS: <code>brew install ollama</code><br>Linux: <code>curl -fsSL https://ollama.com/install.sh | sh</code><br>Windows: 前往 <a href="https://ollama.com" target="_blank">ollama.com</a> 下载可视化安装包<br>安装后运行 <code>ollama run llama3.2</code> 验证' },
                { heading: 'OpenClaw 安装', text: '终端执行官方安装脚本：<code>curl -fsSL https://openclaw.bot/install.sh | bash</code><br>Windows 用户需先安装 WSL2' }
            ]
        }
    ]
};
