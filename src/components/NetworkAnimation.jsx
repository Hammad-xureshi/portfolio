import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * NetworkAnimation Component
 * Creates subtle network nodes and lines that appear around the profile photo
 * Uses HTML5 Canvas with theme-based colors
 */
const NetworkAnimation = () => {
  const canvasRef = useRef(null);
  const { themeMode } = useTheme();
  
  // Theme colors
  const getThemeColors = () => {
    if (themeMode === 'hacker') {
      return {
        primary: '204, 0, 0',      // #cc0000
        secondary: '139, 0, 0',    // #8b0000
        glow: '255, 0, 0',         // #ff0000
      };
    }
    return {
      primary: '168, 85, 247',     // #a855f7
      secondary: '6, 182, 212',    // #06b6d4
      glow: '236, 72, 153',        // #ec4899
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let nodes = [];
    const colors = getThemeColors();

    // Handle resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Initialize nodes around center (where profile photo is)
      initNodes();
    };

    // Initialize nodes around center of screen
    const initNodes = () => {
      nodes = [];
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Create nodes in a ring pattern around center
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 80 + Math.random() * 40;
        nodes.push({
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          baseX: centerX + Math.cos(angle) * radius,
          baseY: centerY + Math.sin(angle) * radius,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 3 + Math.random() * 2,
          alpha: 0,
          delay: Math.random() * 2,
        });
      }
    };

    // Animation loop
    const animate = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nodes
      nodes.forEach((node, index) => {
        // Fade in with delay
        if (node.delay > 0) {
          node.delay -= 0.02;
          return;
        }

        // Update alpha
        node.alpha += (0.6 - node.alpha) * 0.05;

        // Gentle drift around center
        node.x += node.vx;
        node.y += node.vy;

        // Return to base position
        const dx = node.baseX - node.x;
        const dy = node.baseY - node.y;
        node.x += dx * 0.01;
        node.y += dy * 0.01;

        // Draw node with glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colors.primary}, ${node.alpha * 0.3})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colors.primary}, ${node.alpha})`;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const node1 = nodes[i];
          const node2 = nodes[j];

          const dx = node2.x - node1.x;
          const dy = node2.y - node1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const alpha = (1 - distance / 150) * 0.5 * Math.min(node1.alpha, node2.alpha);
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.strokeStyle = `rgba(${colors.secondary}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    // Start
    resizeCanvas();
    animate();

    // Event listeners
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [themeMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        background: 'transparent',
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default NetworkAnimation;

