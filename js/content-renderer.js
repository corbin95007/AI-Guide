/* ===================================
   内容渲染器
   从 CONTENT_DATA 生成桌面端和移动端 HTML
   彻底消除内容重复
   =================================== */

const ContentRenderer = (function() {

    // 渲染桌面端单个 section
    function renderDesktopSection(section) {
        var html = '<div class="doc-section" id="' + (section.id || '') + '">';
        html += '<h2>' + section.title + '</h2>';
        if (section.desc) {
            html += '<p style="font-size: 15px; color: var(--text-secondary); margin-bottom: 20px; font-weight: 500;">' + section.desc + '</p>';
        }

        if (section.subsections) {
            section.subsections.forEach(function(sub) {
                html += '<h3>' + sub.heading + '</h3>';
                if (Array.isArray(sub.text)) {
                    sub.text.forEach(function(p) { html += '<p>' + p + '</p>'; });
                } else {
                    html += '<p>' + sub.text + '</p>';
                }
            });
        }

        if (section.customHTML) {
            html += section.customHTML;
        }

        html += '</div>';
        return html;
    }

    // 渲染桌面端面板
    function renderDesktopPanel(tabData) {
        var html = '<section class="tab-panel" id="panel-' + tabData.id + '">';
        html += '<header class="doc-header">';
        html += '<h1 class="doc-title">' + tabData.title + '</h1>';
        html += '<p class="doc-subtitle">' + tabData.subtitle + '</p>';
        html += '</header>';

        if (tabData.sections) {
            tabData.sections.forEach(function(section) {
                html += renderDesktopSection(section);
            });
        }

        html += '</section>';
        return html;
    }

    // 渲染移动端单个 section（折叠卡片）
    function renderMobileSection(section) {
        var html = '<details class="tech-card">';
        html += '<summary><div class="summary-info">';
        html += '<h3>' + section.title + '</h3>';
        if (section.desc) {
            html += '<p>' + section.desc + '</p>';
        }
        html += '</div></summary>';
        html += '<div class="details-content">';

        if (section.subsections) {
            section.subsections.forEach(function(sub) {
                html += '<h4>' + sub.heading + '</h4>';
                if (Array.isArray(sub.text)) {
                    sub.text.forEach(function(p) { html += '<p>' + p + '</p>'; });
                } else {
                    html += '<p>' + sub.text + '</p>';
                }
            });
        }

        if (section.customHTML) {
            // 移动端的 customHTML 需要特殊处理（details-content 内部）
            html += section.customHTML;
        }

        html += '</div></details>';
        return html;
    }

    // 渲染移动端面板（仅内部内容，外层 div 由 renderAll 创建）
    function renderMobilePanel(tabData) {
        var html = '<header><h1>' + tabData.title + '</h1>';
        if (tabData.subtitle) {
            html += '<p class="subtitle">' + tabData.subtitle + '</p>';
        }
        html += '</header>';

        if (tabData.sections) {
            tabData.sections.forEach(function(section) {
                html += renderMobileSection(section);
            });
        }

        return html;
    }

    // 渲染所有内容到页面
    function renderAll() {
        if (typeof CONTENT_DATA === 'undefined' || !CONTENT_DATA.tabs) return;

        var desktopContainer = document.getElementById('desktop-panels');
        var mobileContainer = document.getElementById('mobile-panels');

        if (!desktopContainer || !mobileContainer) return;

        CONTENT_DATA.tabs.forEach(function(tabData, index) {
            // 桌面端：每个 tab 是独立的 main-content 容器
            var desktopWrapper = document.createElement('div');
            desktopWrapper.className = 'desktop-only main-content' + (index === 0 ? ' active' : '');
            desktopWrapper.innerHTML =
                '<div class="doc-content">' + renderDesktopPanel(tabData) + '</div>' +
                '<aside class="doc-toc"><div class="toc-title">目录</div><ul class="toc-list" id="toc-list' + (index === 0 ? '' : '-' + tabData.id) + '"></ul></aside>';
            desktopContainer.appendChild(desktopWrapper);

            // 移动端
            var mobileDiv = document.createElement('div');
            mobileDiv.id = tabData.id;
            mobileDiv.className = 'tab-content' + (index === 0 ? ' active' : '');
            mobileDiv.innerHTML = renderMobilePanel(tabData);
            // 去掉最外层 div（因为 mobileDiv 本身就是 tab-content）
            mobileContainer.appendChild(mobileDiv);
        });

        // 默认激活第一个面板
        var firstPanel = desktopContainer.querySelector('.tab-panel');
        if (firstPanel) firstPanel.classList.add('active');
    }

    return { renderAll: renderAll };
})();
