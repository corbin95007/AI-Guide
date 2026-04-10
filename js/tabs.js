/* ===================================
   Tab 导航切换
   管理 Sidebar 导航 + 桌面/移动端面板联动
   =================================== */

const TabManager = (function() {
    function switchTab(tabId, clickedBtn) {
        // 更新 Sidebar 激活状态
        var sidebarItems = document.querySelectorAll('.sidebar .nav-item');
        sidebarItems.forEach(function(item) { item.classList.remove('active'); });
        if (clickedBtn && clickedBtn.classList.contains('nav-item')) {
            clickedBtn.classList.add('active');
        } else {
            var targetSidebarItem = document.querySelector('.sidebar .nav-item[data-tab="' + tabId + '"]');
            if (targetSidebarItem) targetSidebarItem.classList.add('active');
        }

        // 桌面端：切换面板
        var desktopPanels = document.querySelectorAll('.desktop-only .tab-panel');
        desktopPanels.forEach(function(panel) { panel.classList.remove('active'); });
        var targetDesktopPanel = document.getElementById('panel-' + tabId);
        if (targetDesktopPanel) targetDesktopPanel.classList.add('active');

        // 桌面端：切换布局容器
        var desktopLayouts = document.querySelectorAll('.desktop-only');
        desktopLayouts.forEach(function(layout) { layout.classList.remove('active'); });
        var targetDesktopLayout = document.querySelector('.desktop-only:has(#panel-' + tabId + ')');
        if (targetDesktopLayout) targetDesktopLayout.classList.add('active');

        // 移动端：切换 Tab 内容
        var mobileTabs = document.querySelectorAll('.mobile-only .tab-content');
        mobileTabs.forEach(function(tab) { tab.classList.remove('active'); });
        var targetMobileTab = document.getElementById(tabId);
        if (targetMobileTab) targetMobileTab.classList.add('active');

        // 关闭移动端 Sidebar
        var sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.remove('open');

        // 回到顶部并刷新 TOC
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(function() {
            if (typeof TOCManager !== 'undefined') TOCManager.generate();
        }, 100);
    }

    function init() {
        document.querySelectorAll('.sidebar .nav-item').forEach(function(item) {
            item.addEventListener('click', function() {
                var tabId = this.dataset.tab;
                if (tabId) switchTab(tabId, this);
            });
        });
    }

    return { init: init, switchTab: switchTab };
})();
