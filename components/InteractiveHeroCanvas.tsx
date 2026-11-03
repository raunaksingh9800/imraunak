"use client";

import React, { useEffect, useRef } from "react";

export function InteractiveHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    let mouse = {
      x: canvas.offsetWidth / 2,
      y: canvas.offsetHeight / 2,
      targetX: canvas.offsetWidth / 2,
      targetY: canvas.offsetHeight / 2,
      isHovered: false,
    };

    // Node network with editorial spring behavior
    const nodes: { x: number; y: number; originX: number; originY: number; vx: number; vy: number }[] = [];
    const cols = 7;
    const rows = 5;
    const spacingX = canvas.offsetWidth / (cols + 1);
    const spacingY = canvas.offsetHeight / (rows + 1);

    for (let i = 1; i <= cols; i++) {
      for (let j = 1; j <= rows; j++) {
        nodes.push({
          x: i * spacingX,
          y: j * spacingY,
          originX: i * spacingX,
          originY: j * spacingY,
          vx: 0,
          vy: 0,
        });
      }
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      const displayW = canvas.offsetWidth;
      const displayH = canvas.offsetHeight;

      ctx.clearRect(0, 0, displayW, displayH);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Draw subtle coordinate lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
      ctx.lineWidth = 1;

      // Update and connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Gravitational reaction to mouse cursor
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;

        if (dist < maxDist && mouse.isHovered) {
          const force = (1 - dist / maxDist) * 35;
          const angle = Math.atan2(dy, dx);
          node.vx += Math.cos(angle) * force * 0.08;
          node.vy += Math.sin(angle) * force * 0.08;
        }

        // Spring back to origin
        const springX = (node.originX - node.x) * 0.04;
        const springY = (node.originY - node.y) * 0.04;
        node.vx = (node.vx + springX) * 0.82;
        node.vy = (node.vy + springY) * 0.82;

        node.x += node.vx;
        node.y += node.vy;

        // Render delicate node points
        ctx.fillStyle = dist < maxDist && mouse.isHovered ? "rgba(255, 77, 41, 0.7)" : "rgba(255, 255, 255, 0.18)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, dist < maxDist ? 2.5 : 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes with editorial hairlines
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const ndx = node.x - nodeB.x;
          const ndy = node.y - nodeB.y;
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy);

          if (nDist < spacingX * 1.35) {
            ctx.strokeStyle =
              dist < maxDist && mouse.isHovered
                ? "rgba(255, 77, 41, 0.15)"
                : "rgba(255, 255, 255, 0.03)";
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }

      // Draw subtle tracking hairline connecting to mouse when hovered
      if (mouse.isHovered) {
        ctx.strokeStyle = "rgba(255, 77, 41, 0.25)";
        ctx.setLineDash([2, 4]);
        ctx.beginPath();
        ctx.moveTo(mouse.x, 0);
        ctx.lineTo(mouse.x, displayH);
        ctx.moveTo(0, mouse.y);
        ctx.lineTo(displayW, mouse.y);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto opacity-75"
      style={{ touchAction: "none" }}
    />
  );
}

