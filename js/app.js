/* ===================================
   主入口：初始化所有模块
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    // 1. 渲染内容
    ContentRenderer.renderAll();

    // 2. 先初始化粒子动画 (✅ 修复：把它挪到 ThemeManager 前面)
    ParticleSystem.init();

    // 3. 再初始化主题系统 (这样它发送换色指令时，画布已经准备好了)
    ThemeManager.init();

    // 4. 初始化 Tab 导航
    TabManager.init();

    // 5. 初始化移动端菜单
    MobileMenu.init();

    // 6. 生成初始 TOC
    TOCManager.generate();
});

window.addEventListener('load', function() {
    setTimeout(function() {
        TOCManager.generate();
    }, 100);
});
