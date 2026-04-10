/* ===================================
   目录 (TOC) 生成器
   自动从当前活动面板提取 h2 标题生成侧边目录
   =================================== */

const TOCManager = (function() {
    function generate() {
        var activeLayout = document.querySelector('.desktop-only.active');
        if (!activeLayout) return;

        var tocList = activeLayout.querySelector('.toc-list');
        var activePanel = activeLayout.querySelector('.tab-panel.active');

        if (!tocList || !activePanel) return;

        tocList.innerHTML = '';

        var sections = activePanel.querySelectorAll('.doc-section h2');
        sections.forEach(function(heading, index) {
            var id = heading.id || 'toc-' + index + '-' + heading.textContent.trim().replace(/\s+/g, '-');
            heading.id = id;

            var li = document.createElement('li');
            li.className = 'toc-item';
            var a = document.createElement('a');
            a.href = '#' + encodeURIComponent(id);
            a.className = 'toc-link';
            a.textContent = heading.textContent;

            a.addEventListener('click', function(e) {
                e.preventDefault();
                var target = document.getElementById(id);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });

            li.appendChild(a);
            tocList.appendChild(li);
        });
    }

    return { generate: generate };
})();
