import { useEffect, useRef } from "react";

const SmokeEffect = ({ triggerRef }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const isHoveringRef = useRef(false);
  const animationIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createParticle = () => {
      if (!triggerRef.current || !isHoveringRef.current) return;

      const rect = triggerRef.current.getBoundingClientRect();
      const startX = rect.left + rect.width / 2;
      const startY = rect.top + rect.height / 2 - 20;

      const angle = (Math.random() - 0.5) * Math.PI * 0.6;
      const velocity = Math.random() * 0.8 + 0.4;

      const particle = {
        x: startX,
        y: startY,
        vx: Math.cos(angle) * velocity * 0.3,
        vy: Math.sin(angle) * velocity - 0.8,
        life: 1,
        maxLife: 1,
        size: Math.random() * 20 + 12,
        maxSize: Math.random() * 50 + 35,
      };

      particlesRef.current.push(particle);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isHoveringRef.current) {
        createParticle();
      }

      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.life -= 0.008;

        if (particle.life <= 0) return false;

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy -= 0.04;
        particle.vx *= 0.99;
        particle.size += (particle.maxSize - particle.size) * 0.03;

        const easeLife = particle.life;
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size,
        );

        const opacity =
          easeLife < 0.3 ? easeLife / 0.3 : 1 - (1 - easeLife) * 2;

        gradient.addColorStop(0, `rgba(220, 220, 220, ${opacity * 0.4})`);
        gradient.addColorStop(0.4, `rgba(200, 200, 200, ${opacity * 0.25})`);
        gradient.addColorStop(0.7, `rgba(180, 180, 180, ${opacity * 0.1})`);
        gradient.addColorStop(1, `rgba(160, 160, 160, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      isHoveringRef.current = true;
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
    };

    animate();

    if (triggerRef.current) {
      triggerRef.current.addEventListener("mouseenter", handleMouseEnter);
      triggerRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (triggerRef.current) {
        triggerRef.current.removeEventListener("mouseenter", handleMouseEnter);
        triggerRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [triggerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-40"
    />
  );
};

export default SmokeEffect;
