/* ===================================
   主题切换系统
   管理三套主题的切换与持久化
   =================================== */

const ThemeManager = (function() {
    var themes = [
        { id: 'default', name: '默认模式' },
        { id: 'cyber', name: '赛博极光'},
        { id: 'wireframe', name: '极简矩阵' }
    ];
    var currentIndex = 0;

    function applyTheme(index) {
        var theme = themes[index];
        document.body.setAttribute('data-theme', theme.id);

        var btnText = document.getElementById('themeText');
        var btnIcon = document.getElementById('themeIcon');
        if (btnText) btnText.textContent = theme.name;
        if (btnIcon) btnIcon.textContent = theme.icon;

        // 同步粒子系统颜色
        if (typeof ParticleSystem !== 'undefined') {
            ParticleSystem.setTheme(theme.id);
        }

        localStorage.setItem('user-theme', theme.id);
    }

    function init() {
        var savedTheme = localStorage.getItem('user-theme');
        if (savedTheme) {
            var index = themes.findIndex(function(t) { return t.id === savedTheme; });
            if (index !== -1) {
                currentIndex = index;
            }
        }
        applyTheme(currentIndex);

        var themeBtn = document.getElementById('themeSwitcher');
        if (themeBtn) {
            themeBtn.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % themes.length;
                applyTheme(currentIndex);
            });
        }
    }

    return { init: init };
})();
