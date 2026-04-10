/* ===================================
   移动端菜单控制
   =================================== */

const MobileMenu = (function() {
    function init() {
        var sidebar = document.getElementById('sidebar');
        var mobileMenuToggle = document.getElementById('mobileMenuToggle');
        var menuToggle = document.getElementById('menuToggle');

        if (menuToggle && sidebar) {
            menuToggle.addEventListener('click', function() {
                sidebar.classList.toggle('open');
            });
        }
        if (mobileMenuToggle && sidebar) {
            mobileMenuToggle.addEventListener('click', function() {
                sidebar.classList.toggle('open');
            });
        }
        if (sidebar) {
            sidebar.addEventListener('click', function(e) {
                if (e.target === sidebar) {
                    sidebar.classList.remove('open');
                }
            });
        }
    }

    return { init: init };
})();
