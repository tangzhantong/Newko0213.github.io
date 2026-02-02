/*!
 * Canvas Constellation Effect
 * A lightweight particle system with mouse interaction.
 */

(function() {
    var canvas, ctx, width, height;
    var particles = [];
    
    // Configuration
    var config = {
        particleCount: 100,      // Number of particles
        particleColor: '150, 150, 150', // RGB color of particles
        lineColor: '150, 150, 150',     // RGB color of lines
        particleRadius: 2,      // Radius of particles
        linkDistance: 120,      // Max distance to link particles
        mouseDistance: 200,     // Max distance for mouse interaction
        speed: 0.5              // Movement speed
    };

    var mouse = { x: null, y: null };

    // Particle Class
    function Particle() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * config.speed;
        this.vy = (Math.random() - 0.5) * config.speed;

        this.update = function() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse interaction: attract slightly
            if (mouse.x != null) {
                var dx = mouse.x - this.x;
                var dy = mouse.y - this.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < config.mouseDistance) {
                    var forceDirectionX = dx / distance;
                    var forceDirectionY = dy / distance;
                    var force = (config.mouseDistance - distance) / config.mouseDistance;
                    var attraction = 0.05 * force; // Subtle attraction
                    this.vx += forceDirectionX * attraction;
                    this.vy += forceDirectionY * attraction;
                }
            }
        };

        this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, config.particleRadius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(' + config.particleColor + ', 0.5)';
            ctx.fill();
        };
    }

    // Init
    function init() {
        canvas = document.getElementById('constellation-canvas');
        if (!canvas) return;
        
        ctx = canvas.getContext('2d');
        resize();
        
        for (var i = 0; i < config.particleCount; i++) {
            particles.push(new Particle());
        }
        
        animate();
    }

    // Resize
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, width, height);

        for (var i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // Link particles
            for (var j = i; j < particles.length; j++) {
                var dx = particles[i].x - particles[j].x;
                var dy = particles[i].y - particles[j].y;
                var distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.linkDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgba(' + config.lineColor + ',' + (1 - distance / config.linkDistance) * 0.5 + ')';
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
            
            // Link to mouse
            if (mouse.x != null) {
                var dx = particles[i].x - mouse.x;
                var dy = particles[i].y - mouse.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < config.mouseDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgba(' + config.lineColor + ',' + (1 - distance / config.mouseDistance) * 0.8 + ')'; // Stronger link to mouse
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
    }

    // Event Listeners
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('mouseout', function() {
        mouse.x = null;
        mouse.y = null;
    });

    // Run when DOM loads
    document.addEventListener('DOMContentLoaded', init);

})();
