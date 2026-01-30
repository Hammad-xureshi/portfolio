import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function HackerNetwork() {
    const { themeMode } = useTheme();
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const nodesRef = useRef([]);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        // Only activate in hacker theme
        if (themeMode !== 'hacker') {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            return;
        }

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Set canvas size
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Node class
        class Node {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.alpha = 1;
                this.radius = Math.random() * 3 + 2; // Larger nodes (was 2+1)
                this.life = 180; // Frames until disappear
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life--;
                this.alpha = this.life / 180;

                // Subtle attraction to mouse
                const dx = mouseRef.current.x - this.x;
                const dy = mouseRef.current.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150 && dist > 0) {
                    this.vx += (dx / dist) * 0.02;
                    this.vy += (dy / dist) * 0.02;
                }

                // Damping
                this.vx *= 0.99;
                this.vy *= 0.99;
            }

            draw(ctx) {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = '#cc0000'; // Brighter red (was #ff0000)
                ctx.shadowBlur = 8; // Increased glow (was 5)
                ctx.shadowColor = 'rgba(204, 0, 0, 0.8)'; // Stronger shadow (was 0.5)
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        // Mouse move handler
        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };

            // Create new nodes around cursor - increased frequency
            if (Math.random() < 0.8) { // 80% chance each frame (increased from 30%)
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 60 + 15; // Slightly wider spread
                nodesRef.current.push(
                    new Node(
                        e.clientX + Math.cos(angle) * distance,
                        e.clientY + Math.sin(angle) * distance
                    )
                );
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Slower trail fade (was 0.1)
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw nodes
            nodesRef.current = nodesRef.current.filter(node => {
                node.update();
                if (node.life <= 0) return false;
                node.draw(ctx);
                return true;
            });

            // Draw connections
            ctx.save();
            ctx.strokeStyle = '#ff0000';
            ctx.lineWidth = 1.0; // Thicker lines (was 0.5)

            for (let i = 0; i < nodesRef.current.length; i++) {
                for (let j = i + 1; j < nodesRef.current.length; j++) {
                    const dx = nodesRef.current[i].x - nodesRef.current[j].x;
                    const dy = nodesRef.current[i].y - nodesRef.current[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) { // Increased connection distance (was 120)
                        const alpha = (1 - distance / 150) * Math.min(nodesRef.current[i].alpha, nodesRef.current[j].alpha) * 0.5; // Increased opacity (was 0.3)
                        ctx.globalAlpha = alpha;
                        ctx.beginPath();
                        ctx.moveTo(nodesRef.current[i].x, nodesRef.current[i].y);
                        ctx.lineTo(nodesRef.current[j].x, nodesRef.current[j].y);
                        ctx.stroke();
                    }
                }
            }
            ctx.restore();

            // Limit nodes for performance
            if (nodesRef.current.length > 100) {
                nodesRef.current = nodesRef.current.slice(-100);
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [themeMode]);

    // Don't render if not in hacker theme
    if (themeMode !== 'hacker') {
        return null;
    }

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[1]"
            style={{
                opacity: 1,
            }}
        />
    );
}

