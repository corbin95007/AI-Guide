/* ===================================
   多态粒子动画引擎 (Multi-state Engine)
   =================================== */

const ParticleSystem = (function() {
    let canvas, ctx;
    let mode = 'default'; 
    let mouse = { x: -1000, y: -1000 };

    // --- 🌌 赛博模式数据 ---
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}[]|日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";
    let matrixColumns = [];
    const fontSize = 16;

    // ==============================================
    // ⚙️ 极简模式网格参数 (你可以在这里调数字！)
    // ==============================================
    const columns = 50; // 网格的竖线数量 (原来是20，调大变密集)
    const rows = 30;    // 网格的横线数量 (原来是12，调大变密集)
    const springStrength = 0.05; // 弹簧硬度 (原来0.12。数字越小越软，扭曲幅度越大)
    const friction = 0.85; // 摩擦力 (回弹的速度)
    const mouseInfluenceRadius = 350; // 鼠标排斥的范围 (调大范围更广)
    // ==============================================

    let grid = [];

    class Point {
        constructor(x, y) {
            this.ox = x; this.oy = y; 
            this.x = x; this.y = y; 
            this.vx = 0; this.vy = 0; 
        }
        update(mx, my, time) {
            let dx_mouse = mx - this.ox;
            let dy_mouse = my - this.oy;
            let dist_mouse = Math.sqrt(dx_mouse**2 + dy_mouse**2);
            
            let tx = this.ox; 
            let ty = this.oy; 

            if (mx !== -1000 && dist_mouse < mouseInfluenceRadius) {
                // 鼠标扭曲：排斥力
                let force = (mouseInfluenceRadius - dist_mouse) / mouseInfluenceRadius;
                tx -= (dx_mouse / dist_mouse) * force * 100; // 这里的 100 是推开的力度，可以改
                ty -= (dy_mouse / dist_mouse) * force * 100;
            } else {
                // 默认模式：轻微正弦波扭动
                tx += Math.sin(time * 0.005 + this.ox * 0.01) * 3;
                ty += Math.cos(time * 0.005 + this.oy * 0.01) * 3;
            }

            this.vx += (tx - this.x) * springStrength;
            this.vy += (ty - this.y) * springStrength;
            this.vx *= friction;
            this.vy *= friction;
            this.x += this.vx;
            this.y += this.vy;
        }
    }

    function initGrid() {
        if (!canvas) return;
        grid = [];
        let col_spacing = canvas.width / (columns - 1);
        let row_spacing = canvas.height / (rows - 1);

        for (let x = 0; x < columns; x++) {
            for (let y = 0; y < rows; y++) {
                grid.push(new Point(x * col_spacing, y * row_spacing));
            }
        }
    }

    function initMatrix() {
        if (!canvas) return;
        let colsCount = Math.floor(canvas.width / fontSize) + 1;
        matrixColumns = [];
        for (let i = 0; i < colsCount; i++) {
            matrixColumns[i] = Math.random() * -canvas.height; 
        }
    }

    // 渲染：极简网格
    function updateAndDrawWireframe() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.shadowBlur = 0; 

        for (let p of grid) {
            p.update(mouse.x, mouse.y, performance.now());
        }

        // 绿色极细网格线
        ctx.strokeStyle = "rgba(16, 185, 129, 0.25)"; 
        ctx.lineWidth = 1;

        for (let y = 0; y < rows; y++) {
            ctx.beginPath();
            for (let x = 0; x < columns; x++) {
                let p = grid[x * rows + y];
                if (x === 0) ctx.moveTo(p.x, p.y);
                else ctx.lineTo(p.x, p.y);
            }
            ctx.stroke();
        }

        for (let x = 0; x < columns; x++) {
            ctx.beginPath();
            for (let y = 0; y < rows; y++) {
                let p = grid[x * rows + y];
                if (y === 0) ctx.moveTo(p.x, p.y);
                else ctx.lineTo(p.x, p.y);
            }
            ctx.stroke();
        }
    }

    // 渲染：赛博代码雨
    function updateAndDrawCyber() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.15)"; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = fontSize + "px 'JetBrains Mono', monospace";
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';

        for (let i = 0; i < matrixColumns.length; i++) {
            let char = charset[Math.floor(Math.random() * charset.length)];
            let x = i * fontSize;
            let y = matrixColumns[i];

            let dist = 1000;
            if (mouse.x !== -1000) {
                let dx = x - mouse.x;
                let dy = y - mouse.y;
                dist = Math.sqrt(dx*dx + dy*dy);
            }

            if (dist < 180) {
                let intensity = 1 - (dist / 180); 
                ctx.fillStyle = Math.random() > 0.3 ? "#FFFFFF" : "#00FFFF";
                ctx.shadowBlur = 15 * intensity;
                ctx.shadowColor = "#00FFFF";
                ctx.fillText(char, x, y);
                matrixColumns[i] += fontSize * (1 + intensity * 1.5);
            } else {
                ctx.shadowBlur = 0;
                ctx.fillStyle = Math.random() > 0.99 ? "rgba(0, 255, 65, 0.6)" : "rgba(0, 255, 65, 0.12)"; 
                ctx.fillText(char, x, y);
                matrixColumns[i] += fontSize; 
            }

            if (y > canvas.height && Math.random() > 0.975) {
                matrixColumns[i] = 0;
            }
        }
    }

    function init() {
        canvas = document.getElementById('bg-canvas');
        if (!canvas) return;
        ctx = canvas.getContext('2d');
        resize();
        
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', function(e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // 🎯 核心联动：将鼠标坐标作为 CSS 变量传给 HTML 根节点，驱动全屏十字准星！
            document.documentElement.style.setProperty('--mx', e.clientX + 'px');
            document.documentElement.style.setProperty('--my', e.clientY + 'px');
        });
        window.addEventListener('mouseout', function() { 
            mouse.x = -1000; 
            mouse.y = -1000; 
            document.documentElement.style.setProperty('--mx', '-100px');
            document.documentElement.style.setProperty('--my', '-100px');
        });

        animate(); 
    }

    function resize() {
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initMatrix();
        initGrid(); 
    }

    function animate() {
        if (mode === 'cyber') updateAndDrawCyber();
        else if (mode === 'wireframe') updateAndDrawWireframe();
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(animate);
    }

    return {
        init: init,
        setTheme: function(themeId) {
            mode = themeId;
            if (!canvas) return;
            if(themeId === 'cyber') initMatrix(); 
            if(themeId === 'wireframe') initGrid(); 
        }
    };
})();