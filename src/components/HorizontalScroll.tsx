"use client"

import { useEffect, useRef } from 'react';

const HorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scrollWidth = scrollElement.scrollWidth;
    const clientWidth = scrollElement.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollElement.scrollLeft = scrollPosition;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollItems = [
    "🚀 Build Faster with AI",
    "📈 Scale Your Business",
    "💡 Innovation Through Intelligence",
    "🎯 Strategic AI Implementation",
    "⚡ Accelerate Growth",
    "🔮 Future-Ready Solutions",
    "🛠️ AI-Powered Tools",
    "📊 Data-Driven Decisions",
    "🌟 Transform Your Workflow",
    "🎨 Creative AI Solutions"
  ];

  return (
    <section className="py-16 bg-muted/10 overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {/* Duplicate items to create seamless loop */}
        {[...scrollItems, ...scrollItems, ...scrollItems].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-6 py-3 bg-card border border-border/20 rounded-lg shadow-sm"
          >
            <span className="text-lg font-medium whitespace-nowrap text-foreground">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalScroll;
