import { useEffect, useRef } from 'react';

export default function HeroSphere() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = canvas.width = 300;
    let height = canvas.height = 300;

    // Create 3D points
    const numPoints = 80;
    const points = [];
    const radius = 90;

    for (let i = 0; i < numPoints; i++) {
      const theta = Math.acos(Math.random() * 2 - 1);
      const phi = Math.random() * Math.PI * 2;

      points.push({
        x: radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(theta),
      });
    }

    let angleX = 0.003;
    let angleY = 0.005;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetAngleX = 0.003;
    let targetAngleY = 0.005;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      targetAngleY = x * 0.00005;
      targetAngleX = y * 0.00005;
    };

    const handleMouseLeave = () => {
      targetAngleX = 0.003;
      targetAngleY = 0.005;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const rotateX = (point, angle) => {
      const rad = angle;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      const y = point.y * cos - point.z * sin;
      const z = point.y * sin + point.z * cos;
      return { ...point, y, z };
    };

    const rotateY = (point, angle) => {
      const rad = angle;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      const x = point.x * cos + point.z * sin;
      const z = -point.x * sin + point.z * cos;
      return { ...point, x, z };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth rotation adjustment towards mouse targets
      angleX += (targetAngleX - angleX) * 0.1;
      angleY += (targetAngleY - angleY) * 0.1;

      // Rotate and project points
      const projectedPoints = points.map((p, index) => {
        // Rotate points
        let rotated = rotateX(p, angleX);
        rotated = rotateY(rotated, angleY);
        points[index] = rotated; // update original points for continuous rotation

        // Project 3D to 2D
        const fov = 300;
        const distance = 250;
        const scale = fov / (fov + rotated.z);
        const x2d = rotated.x * scale + width / 2;
        const y2d = rotated.y * scale + height / 2;

        return { x: x2d, y: y2d, depth: rotated.z, scale };
      });

      // Sort points by depth for correct 3D rendering (back to front)
      projectedPoints.sort((a, b) => b.depth - a.depth);

      // Draw connections
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.08)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const dx = projectedPoints[i].x - projectedPoints[j].x;
          const dy = projectedPoints[i].y - projectedPoints[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          // Only connect nearby points
          if (dist < 60) {
            ctx.beginPath();
            ctx.moveTo(projectedPoints[i].x, projectedPoints[i].y);
            ctx.lineTo(projectedPoints[j].x, projectedPoints[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw points
      projectedPoints.forEach((p) => {
        const size = Math.max(1, (p.scale * 2.5) * (1 - p.depth / 200));
        
        // Depth-based color (closer points are brighter teal, further are darker gray)
        const alpha = Math.max(0.1, 1 - (p.depth + radius) / (radius * 2));
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);

        if (p.depth < 0) {
          // Front points are bright teal
          ctx.fillStyle = `rgba(45, 212, 191, ${alpha * 0.95})`;
          ctx.shadowBlur = 4;
          ctx.shadowColor = '#2dd4bf';
        } else {
          // Back points are muted gray
          ctx.fillStyle = `rgba(163, 163, 171, ${alpha * 0.45})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (canvas) {
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div 
      className="flex items-center justify-center my-6 relative select-none pointer-events-none"
      style={{
        animation: 'globePass 26s linear infinite',
        width: '300px',
      }}
    >
      <style>{`
        @keyframes globePass {
          0% {
            transform: translateX(-45vw);
            opacity: 0;
          }
          4% {
            opacity: 0.95;
          }
          92% {
            opacity: 0.95;
          }
          100% {
            transform: translateX(55vw);
            opacity: 0;
          }
        }
      `}</style>
      {/* Background glow beneath the canvas */}
      <div 
        className="absolute w-44 h-44 rounded-full bg-[#2dd4bf] opacity-[0.03] blur-3xl pointer-events-none"
        style={{ filter: 'blur(60px)' }}
      />
      <canvas 
        ref={canvasRef} 
        className="w-[300px] h-[300px] pointer-events-auto cursor-grab active:cursor-grabbing"
      />
    </div>
  );
}
