import React, { useEffect, useRef, useState } from 'react';

/**
 * NetworkAnimation Component
 * 
 * A subtle, premium mouse-follow network animation effect
 * Uses HTML5 Canvas to render dynamic nodes and connecting lines
 * Only activates on desktop devices with pointer support
 * 
 * Features:
 * - Nodes appear around mouse cursor
 * - Lines connect nearby nodes dynamically
 * - Smooth fade in/out animation
 * - Performance optimized with requestAnimationFrame
 * - Disables on mobile/touch devices
 * - Auto-pauses when mouse is idle
 */
const NetworkAnimation = () => {
  const canvasRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const DEBUG = true; // Set to true for debugging
  const animationStateRef = useRef({
    nodes: [],
    mouseX: 0,
    mouseY: 0,
    isMoving: false,
    lastMoveTime: 0,
    rafId: null,
    frameCount: 0,
  });

  // Device detection - runs once on mount
  useEffect(() => {
    const detectDesktop = () => {
      const hasHoverCapability = window.matchMedia('(hover: hover)').matches;
      const hasPointerCapability = window.matchMedia('(pointer: fine)').matches;
      const isTouchDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

      return (hasHoverCapability || hasPointerCapability) && !isTouchDevice;
    };

    const detected = detectDesktop();
    console.log('NetworkAnimation: Desktop detected:', detected);
    setIsDesktop(detected);
  }, []);

  // Animation setup - runs only on desktop
  useEffect(() => {
    if (!isDesktop) {
      console.log('NetworkAnimation: Not a desktop device, skipping animation setup');
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      console.log('NetworkAnimation: Canvas ref not available');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.log('NetworkAnimation: Could not get 2D context');
      return;
    }

    console.log('NetworkAnimation: Initializing animation on desktop');

    const state = animationStateRef.current;

    // ============================================================
    // INITIALIZATION
    // ============================================================

    /**
     * Initialize canvas with proper dimensions
     * Sets canvas to full viewport size
     */
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log(`Canvas resized to ${canvas.width}x${canvas.height}`);
      
      // TEMPORARY TEST: Draw bright unmissable rectangle
      ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
      ctx.fillRect(0, 0, 400, 150);
      ctx.fillStyle = 'white';
      ctx.font = 'bold 24px Arial';
      ctx.fillText('✓ CANVAS IS WORKING!', 30, 80);
      console.log('⚠️ TEST PATTERN DRAWN - Red box should be visible in top-left corner');
      
      // Draw test pattern to verify canvas is working
      if (DEBUG) {
        ctx.fillStyle = 'rgba(168, 85, 247, 0.1)';
        ctx.fillRect(0, 150, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.stroke();
        console.log('Canvas test pattern drawn');
      }
    };

    resizeCanvas();

    /**
     * Create initial nodes distributed across the viewport
     * Nodes are spread to ensure they appear when mouse moves
     */
    const initializeNodes = () => {
      const nodeCount = 12;
      state.nodes = [];

      for (let i = 0; i < nodeCount; i++) {
        state.nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          alpha: 0,
          targetAlpha: 0,
          radius: 4 + Math.random() * 2,
        });
      }
      console.log(`NetworkAnimation: Initialized ${nodeCount} nodes`);
    };

    initializeNodes();

    // ============================================================
    // NODE & LINE LOGIC
    // ============================================================

    /**
     * Update node positions with gentle drift
     * Creates organic movement without being distracting
     */
    const updateNodes = () => {
      const mouseRadius = 150; // Influence radius from cursor
      const connectionDistance = 120; // Max distance for lines

      state.nodes.forEach((node) => {
        // Calculate distance from mouse
        const dx = state.mouseX - node.x;
        const dy = state.mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Nodes are visible only near mouse cursor
        if (distance < mouseRadius) {
          node.targetAlpha = Math.max(0, 1 - distance / mouseRadius) * 0.9;
        } else {
          node.targetAlpha = 0;
        }

        // Smooth alpha transition
        node.alpha += (node.targetAlpha - node.alpha) * 0.15;

        // Gentle drift movement
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });

      // Periodically spawn new nodes near mouse if not enough are visible
      if (state.frameCount % 20 === 0) {
        const visibleCount = state.nodes.filter(n => n.alpha > 0.1).length;
        if (visibleCount < 4 && state.isMoving) {
          // Add a new node near the mouse
          const angle = Math.random() * Math.PI * 2;
          const distance = 80 + Math.random() * 40;
          const newNode = {
            x: state.mouseX + Math.cos(angle) * distance,
            y: state.mouseY + Math.sin(angle) * distance,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            alpha: 0,
            targetAlpha: 0,
            radius: 2.5 + Math.random() * 1.5,
          };
          
          // Only add if we don't exceed max nodes
          if (state.nodes.length < 20) {
            state.nodes.push(newNode);
          }
        }
      }
    };

    /**
     * Draw nodes (small dots)
     */
    const drawNodes = () => {
      let drawnCount = 0;
      state.nodes.forEach((node) => {
        if (node.alpha > 0.01) {
          // Draw glow effect
          ctx.fillStyle = `rgba(168, 85, 247, ${node.alpha * 0.3})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw main node
          ctx.fillStyle = `rgba(168, 85, 247, ${node.alpha})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fill();
          drawnCount++;
          
          // Debug: draw semi-visible circle around each node
          if (DEBUG && node.alpha > 0.1) {
            ctx.strokeStyle = `rgba(168, 85, 247, ${node.alpha * 0.3})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.arc(node.x, node.y, 120, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
      });
      if (DEBUG) console.log(`Drew ${drawnCount} nodes`);
    };

    /**
     * Draw connecting lines between nearby nodes
     * Creates the network effect
     */
    const drawLines = () => {
      const connectionDistance = 120;

      for (let i = 0; i < state.nodes.length; i++) {
        for (let j = i + 1; j < state.nodes.length; j++) {
          const node1 = state.nodes[i];
          const node2 = state.nodes[j];

          // Calculate distance between nodes
          const dx = node2.x - node1.x;
          const dy = node2.y - node1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Draw line if nodes are close enough and both visible
          if (distance < connectionDistance) {
            const avgAlpha = (node1.alpha + node2.alpha) / 2;

            if (avgAlpha > 0.01) {
              const lineAlpha = avgAlpha * (1 - distance / connectionDistance) * 0.7;
              ctx.strokeStyle = `rgba(168, 85, 247, ${lineAlpha})`;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(node1.x, node1.y);
              ctx.lineTo(node2.x, node2.y);
              ctx.stroke();
            }
          }
        }
      }
    };

    // ============================================================
    // MOUSE TRACKING & ANIMATION LOOP
    // ============================================================

    /**
     * Update mouse position and manage animation state
     */
    const handleMouseMove = (e) => {
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      state.isMoving = true;
      state.lastMoveTime = Date.now();

      // Ensure animation is running
      if (!state.rafId) {
        console.log('NetworkAnimation: Starting animation loop');
        animate();
      }
    };

    /**
     * Main animation loop
     * Uses requestAnimationFrame for smooth 60 FPS performance
     * Auto-pauses after 2 seconds of mouse inactivity
     */
    const animate = () => {
      state.frameCount++;
      
      // Check if mouse has been idle for more than 2 seconds
      const now = Date.now();
      if (now - state.lastMoveTime > 2000) {
        state.isMoving = false;

        // Fade out nodes
        let shouldContinue = false;
        state.nodes.forEach((node) => {
          node.targetAlpha = 0;
          node.alpha *= 0.95;
          if (node.alpha > 0.01) shouldContinue = true;
        });

        if (!shouldContinue) {
          state.rafId = null;
          if (DEBUG) console.log('NetworkAnimation: Animation paused after idle');
          return;
        }
      }

      // Clear canvas properly
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and render
      updateNodes();
      drawNodes();
      drawLines();
      
      // Debug: Log frame info every 60 frames
      if (DEBUG && state.frameCount % 60 === 0) {
        const visibleNodes = state.nodes.filter(n => n.alpha > 0.01).length;
        console.log(`NetworkAnimation: Frame ${state.frameCount}, Visible nodes: ${visibleNodes}, Mouse: (${state.mouseX}, ${state.mouseY})`);
      }

      state.rafId = requestAnimationFrame(animate);
    };

    /**
     * Stop animation on mouse leave
     */
    const handleMouseLeave = () => {
      state.isMoving = false;
    };

    /**
     * Handle window resize
     */
    const handleResize = () => {
      resizeCanvas();
    };

    // ============================================================
    // EVENT LISTENERS
    // ============================================================

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    console.log('NetworkAnimation: Event listeners attached');

    // ============================================================
    // CLEANUP
    // ============================================================

    return () => {
      console.log('NetworkAnimation: Cleaning up');
      if (state.rafId) {
        cancelAnimationFrame(state.rafId);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  // Always render canvas (it will be transparent on mobile)
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        background: 'transparent',
        width: '100%',
        height: '100%',
        display: 'block',
        border: DEBUG ? '2px solid red' : 'none',
      }}
    />
  );
};

export default NetworkAnimation;
