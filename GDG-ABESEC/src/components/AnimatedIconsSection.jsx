import React, { useState, useEffect } from 'react';

const AnimatedIconsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [calendarDay, setCalendarDay] = useState(1);

  useEffect(() => {
    let interval;
    if (hoveredIndex !== null) {
      const hoveredIconId = (hoveredIndex % 9) + 1;
      if (hoveredIconId === 4) {
        // Calendar counting animation
        interval = setInterval(() => {
          setCalendarDay(prev => {
            if (prev < 31) return prev + 1;
            return 31;
          });
        }, 40);
      }
    } else {
      // Reset calendar when not hovering
      const resetInterval = setInterval(() => {
        setCalendarDay(prev => {
          if (prev > 1) return prev - 1;
          return 1;
        });
      }, 40);
      return () => clearInterval(resetInterval);
    }
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  const icons = [
    {
      id: 1,
      name: 'Code Brackets',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="20" y="40" width="160" height="120" rx="10" fill="none" stroke="#2196F3" strokeWidth="3"/>
          <line x1="20" y1="60" x2="180" y2="60" stroke="#2196F3" strokeWidth="3"/>
          <circle cx="35" cy="50" r="4" fill="#FF5F56"/>
          <circle cx="50" cy="50" r="4" fill="#FFBD2E"/>
          <circle cx="65" cy="50" r="4" fill="#27C93F"/>
          <g className={isHovered ? 'code-scale' : ''}>
            <text x="70" y="110" fontSize="48" fill="#2196F3" fontWeight="bold">&lt;</text>
            <text x="120" y="110" fontSize="48" fill="#FFC107" fontWeight="bold">&gt;</text>
          </g>
        </svg>
      )
    },
    {
      id: 2,
      name: 'Book',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Book Cover */}
          <rect x="50" y="50" width="100" height="120" rx="5" fill="none" stroke="#2196F3" strokeWidth="3"/>
          <rect x="50" y="50" width="100" height="120" rx="5" fill="#2196F3" fillOpacity="0.05"/>
          {/* Book Spine */}
          <line x1="60" y1="50" x2="60" y2="170" stroke="#2196F3" strokeWidth="2"/>
          {/* Book Pages Lines */}
          <line x1="70" y1="70" x2="135" y2="70" stroke="#2196F3" strokeWidth="1.5" opacity="0.5"/>
          <line x1="70" y1="80" x2="135" y2="80" stroke="#2196F3" strokeWidth="1.5" opacity="0.5"/>
          <line x1="70" y1="90" x2="135" y2="90" stroke="#2196F3" strokeWidth="1.5" opacity="0.5"/>
          
          {/* Dots with animation */}
          <g className={isHovered ? 'book-dots-wave' : ''}>
            <circle cx="75" cy="110" r="5" fill="#FFC107" className="dot-1"/>
            <circle cx="90" cy="110" r="5" fill="#FFC107" className="dot-2"/>
            <circle cx="105" cy="110" r="5" fill="#FFC107" className="dot-3"/>
            <circle cx="120" cy="110" r="5" fill="#FFC107" className="dot-4"/>
            <circle cx="75" cy="130" r="5" fill="#2196F3" className="dot-5"/>
            <circle cx="90" cy="130" r="5" fill="#2196F3" className="dot-6"/>
            <circle cx="105" cy="130" r="5" fill="#2196F3" className="dot-7"/>
            <circle cx="120" cy="130" r="5" fill="#2196F3" className="dot-8"/>
            <circle cx="75" cy="150" r="5" fill="#4CAF50" className="dot-9"/>
            <circle cx="90" cy="150" r="5" fill="#4CAF50" className="dot-10"/>
            <circle cx="105" cy="150" r="5" fill="#4CAF50" className="dot-11"/>
            <circle cx="120" cy="150" r="5" fill="#4CAF50" className="dot-12"/>
          </g>
        </svg>
      )
    },
    {
      id: 3,
      name: 'Trophy',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Trophy - Yellow */}
          <g>
            <path d="M 60 80 Q 60 110 80 120 L 80 145 L 120 145 L 120 120 Q 140 110 140 80 Z" fill="none" stroke="#FFC107" strokeWidth="3"/>
            <rect x="70" y="145" width="60" height="25" fill="none" stroke="#FFC107" strokeWidth="3"/>
            <rect x="50" y="170" width="100" height="10" fill="#FFC107" fillOpacity="0.3" stroke="#FFC107" strokeWidth="2"/>
          </g>
          
          {/* Trophy Lid */}
          <g className={isHovered ? 'trophy-lid-open' : ''}>
            <path d="M 60 80 L 60 60 L 140 60 L 140 80" fill="none" stroke="#FFC107" strokeWidth="3"/>
          </g>
          
          {/* Code Icon - Blue */}
          <g className={isHovered ? 'trophy-code-emerge' : ''} style={{opacity: 0}}>
            <text x="82" y="98" fontSize="24" fill="#2196F3" fontWeight="bold">&lt;</text>
            <text x="105" y="98" fontSize="24" fill="#2196F3" fontWeight="bold">&gt;</text>
          </g>
        </svg>
      )
    },
    {
      id: 4,
      name: 'Calendar Counter',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="40" y="50" width="120" height="110" rx="8" fill="none" stroke="#2196F3" strokeWidth="3"/>
          <line x1="40" y1="75" x2="160" y2="75" stroke="#2196F3" strokeWidth="3"/>
          <line x1="70" y1="50" x2="70" y2="35" stroke="#2196F3" strokeWidth="3" strokeLinecap="round"/>
          <line x1="130" y1="50" x2="130" y2="35" stroke="#2196F3" strokeWidth="3" strokeLinecap="round"/>
          <text x="100" y="125" fontSize="48" fill="#2196F3" fontWeight="bold" textAnchor="middle">
            {calendarDay}
          </text>
        </svg>
      )
    },
    {
      id: 5,
      name: 'Calendar Pages',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Page 3 - Back */}
          <g className={isHovered ? 'page-tear-3' : ''}>
            <rect x="48" y="58" width="120" height="110" rx="8" fill="#1a1a1a" stroke="#FFC107" strokeWidth="2" opacity="0.5"/>
            <line x1="48" y1="83" x2="168" y2="83" stroke="#FFC107" strokeWidth="2" opacity="0.5"/>
          </g>
          
          {/* Page 2 - Middle */}
          <g className={isHovered ? 'page-tear-2' : ''}>
            <rect x="44" y="54" width="120" height="110" rx="8" fill="#0a0a0a" stroke="#FFC107" strokeWidth="2.5" opacity="0.7"/>
            <line x1="44" y1="79" x2="164" y2="79" stroke="#FFC107" strokeWidth="2.5" opacity="0.7"/>
          </g>
          
          {/* Page 1 - Front (Always visible with tearing effect) */}
          <g className={isHovered ? 'page-tear-1' : ''}>
            <rect x="40" y="50" width="120" height="110" rx="8" fill="black" stroke="#FFC107" strokeWidth="3"/>
            <line x1="40" y1="75" x2="160" y2="75" stroke="#FFC107" strokeWidth="3"/>
            <line x1="70" y1="50" x2="70" y2="35" stroke="#FFC107" strokeWidth="3" strokeLinecap="round"/>
            <line x1="130" y1="50" x2="130" y2="35" stroke="#FFC107" strokeWidth="3" strokeLinecap="round"/>
            <text x="100" y="125" fontSize="32" fill="#FFC107" fontWeight="bold" textAnchor="middle">JAN</text>
          </g>
        </svg>
      )
    },
    {
      id: 6,
      name: 'Team Circle',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Blue Circle - Default */}
          <circle 
            cx="100" 
            cy="100" 
            r="70" 
            fill="none" 
            stroke="#2196F3" 
            strokeWidth="3"
            transform="rotate(-90 100 100)"
          />
          
          {/* Yellow Circle Overlay - Starts from 12 o'clock */}
          <circle 
            cx="100" 
            cy="100" 
            r="70" 
            fill="none" 
            stroke="#FFC107" 
            strokeWidth="3"
            strokeDasharray="440"
            strokeDashoffset="440"
            className={isHovered ? 'circle-yellow-draw' : 'circle-yellow-undraw'}
            transform="rotate(-90 100 100)"
          />
          
          {/* Person 1 - Top - More realistic */}
          <g className={isHovered ? 'person-1-transform' : ''}>
            <circle cx="100" cy="30" r="10" fill="none" stroke="#FFC107" strokeWidth="2.5"/>
            <ellipse cx="100" cy="50" rx="12" ry="16" fill="none" stroke="#FFC107" strokeWidth="2.5"/>
            <line x1="88" y1="45" x2="80" y2="58" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="112" y1="45" x2="120" y2="58" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
          </g>
          
          {/* Person 2 - Right - More realistic */}
          <g className={isHovered ? 'person-2-transform' : ''}>
            <circle cx="170" cy="100" r="10" fill="none" stroke="#FFC107" strokeWidth="2.5"/>
            <ellipse cx="170" cy="120" rx="12" ry="16" fill="none" stroke="#FFC107" strokeWidth="2.5"/>
            <line x1="158" y1="115" x2="150" y2="128" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="182" y1="115" x2="190" y2="128" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
          </g>
          
          {/* Person 3 - Bottom - More realistic */}
          <g className={isHovered ? 'person-3-transform' : ''}>
            <circle cx="100" cy="170" r="10" fill="none" stroke="#FFC107" strokeWidth="2.5"/>
            <ellipse cx="100" cy="150" rx="12" ry="16" fill="none" stroke="#FFC107" strokeWidth="2.5"/>
            <line x1="88" y1="155" x2="80" y2="142" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="112" y1="155" x2="120" y2="142" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
          </g>
          
          {/* Person 4 - Left - More realistic */}
          <g className={isHovered ? 'person-4-transform' : ''}>
            <circle cx="30" cy="100" r="10" fill="none" stroke="#FFC107" strokeWidth="2.5"/>
            <ellipse cx="30" cy="120" rx="12" ry="16" fill="none" stroke="#FFC107" strokeWidth="2.5"/>
            <line x1="18" y1="115" x2="10" y2="128" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="42" y1="115" x2="50" y2="128" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
          </g>
        </svg>
      )
    },
    {
      id: 7,
      name: 'Cloud',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Blue Cloud - Always visible */}
          <path 
            d="M 60 100 Q 60 80 80 80 Q 80 60 110 60 Q 140 60 140 80 Q 160 80 160 100 Q 160 120 140 120 L 80 120 Q 60 120 60 100 Z" 
            fill="none" 
            stroke="#2196F3" 
            strokeWidth="3"
          />
          {/* Yellow Cloud - Draws from top (12 o'clock) */}
          <path 
            d="M 60 100 Q 60 80 80 80 Q 80 60 110 60 Q 140 60 140 80 Q 160 80 160 100 Q 160 120 140 120 L 80 120 Q 60 120 60 100 Z" 
            fill="none" 
            stroke="#FFC107" 
            strokeWidth="3"
            strokeDasharray="440"
            strokeDashoffset="440"
            className={isHovered ? 'cloud-yellow-draw' : 'cloud-yellow-hide'}
            transform="rotate(-90 110 90)"
            style={{ transformOrigin: '110px 90px' }}
          />
        </svg>
      )
    },
    {
      id: 8,
      name: 'Lightbulb',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="70" r="40" fill="none" stroke="#FFC107" strokeWidth="3" className={isHovered ? 'bulb-glow-soft' : ''}/>
          <path d="M 75 105 Q 75 125 82 138 L 118 138 Q 125 125 125 105" fill="none" stroke="#FFC107" strokeWidth="3"/>
          <line x1="82" y1="138" x2="118" y2="138" stroke="#FFC107" strokeWidth="3"/>
          <line x1="85" y1="146" x2="115" y2="146" stroke="#FFC107" strokeWidth="3"/>
          <rect x="90" y="153" width="20" height="10" rx="2" fill="none" stroke="#FFC107" strokeWidth="2"/>
          <g className={isHovered ? 'bulb-rays-soft' : ''}>
            <line x1="100" y1="20" x2="100" y2="30" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="145" y1="35" x2="138" y2="42" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="160" y1="70" x2="150" y2="70" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="55" y1="35" x2="62" y2="42" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="40" y1="70" x2="50" y2="70" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round"/>
          </g>
        </svg>
      )
    },
    {
      id: 9,
      name: 'Mobile App',
      svg: (isHovered) => (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="60" y="25" width="80" height="150" rx="15" fill="none" stroke="#2196F3" strokeWidth="3"/>
          <line x1="75" y1="42" x2="100" y2="42" stroke="#2196F3" strokeWidth="2.5" strokeLinecap="round"/>
          <g className={isHovered ? 'apps-pop-float' : ''}>
            <rect x="75" y="60" width="22" height="22" rx="5" fill="none" stroke="#4CAF50" strokeWidth="2.5" className="app-1"/>
            <rect x="103" y="60" width="22" height="22" rx="5" fill="none" stroke="#2196F3" strokeWidth="2.5" className="app-2"/>
            <rect x="75" y="88" width="22" height="22" rx="5" fill="none" stroke="#FFC107" strokeWidth="2.5" className="app-3"/>
            <rect x="103" y="88" width="22" height="22" rx="5" fill="none" stroke="#FF5722" strokeWidth="2.5" className="app-4"/>
          </g>
          <circle cx="100" cy="160" r="10" fill="none" stroke="#2196F3" strokeWidth="2.5"/>
        </svg>
      )
    }
  ];

  return (
    <div className="relative w-full bg-black overflow-hidden" style={{ height: '35vh', minHeight: '280px' }}>
      <div className="absolute inset-0 flex items-center">
        <div 
          className="flex items-center"
          style={{
            gap: '8rem',
            animation: 'scroll-infinite 50s linear infinite',
            animationPlayState: hoveredIndex !== null ? 'paused' : 'running',
            willChange: 'transform',
          }}
        >
          {[...icons, ...icons, ...icons, ...icons].map((icon, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={`icon-${index}`}
                className="flex-shrink-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  width: '14rem',
                  height: '14rem',
                  transform: isHovered ? 'scale(1.12)' : 'scale(1)',
                  transition: 'transform 0.3s ease-out',
                  zIndex: isHovered ? 100 : 1,
                  position: 'relative',
                }}
              >
                <div className="w-full h-full cursor-pointer">
                  {icon.svg(isHovered)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-infinite {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-25%);
          }
        }

        /* Code Brackets Scale */
        .code-scale text {
          animation: scale-up 0.5s ease-out forwards;
          transform-origin: center;
        }
        @keyframes scale-up {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1.25); }
        }

        /* Code Slash Scale - REMOVED */

        /* Book Dots Wave Animation */
        .book-dots-wave .dot-1 { animation: dot-pop-wave 1.2s ease-in-out infinite; animation-delay: 0s; }
        .book-dots-wave .dot-2 { animation: dot-pop-wave 1.2s ease-in-out infinite; animation-delay: 0.1s; }
        .book-dots-wave .dot-3 { animation: dot-pop-wave 1.2s ease-in-out infinite; animation-delay: 0.2s; }
        .book-dots-wave .dot-4 { animation: dot-pop-wave 1.2s ease-in-out infinite; animation-delay: 0.3s; }
        .book-dots-wave .dot-5 { animation: dot-pop-wave 1.2s ease-in-out infinite; animation-delay: 0.15s; }
        .book-dots-wave .dot-6 { animation: dot-pop-wave 1.2s ease-in-out infinite; animation-delay: 0.25s; }
        .book-dots-wave .dot-7 { animation: dot-pop-wave 1.2s ease-in-out infinite; animation-delay: 0.35s; }
        .book-dots-wave .dot-8 { animation: dot-pop-wave 1.2s ease-in-out infinite; animation-delay: 0.45s; }
        .book-dots-wave .dot-9 { animation: dot-pop-wave 1.2s ease-in-out infinite; animation-delay: 0.3s; }
        .book-dots-wave .dot-10 { animation: dot-pop-wave 1.2s ease-in-out infinite; animation-delay: 0.4s; }
        .book-dots-wave .dot-11 { animation: dot-pop-wave 1.2s ease-in-out infinite; animation-delay: 0.5s; }
        .book-dots-wave .dot-12 { animation: dot-pop-wave 1.2s ease-in-out infinite; animation-delay: 0.6s; }
        
        @keyframes dot-pop-wave {
          0%, 100% { 
            transform: translateY(0) scale(1); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-12px) scale(1.4); 
            opacity: 1;
          }
        }

        /* Trophy Lid Animation */
        .trophy-lid-open {
          animation: lift-lid-smooth 0.6s ease-out forwards;
        }
        .trophy-code-emerge {
          animation: emerge-code 0.6s ease-out 0.2s forwards;
        }
        @keyframes lift-lid-smooth {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-30px); opacity: 1; }
        }
        @keyframes emerge-code {
          0% { opacity: 0; transform: translateY(20px) scale(0.3); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Calendar Pages Tearing */
        .page-2 {
          animation: tear-page 0.4s ease-out forwards;
        }
        .page-3 {
          animation: tear-page 0.4s ease-out 0.2s forwards;
        }
        @keyframes tear-page {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-40px) rotate(10deg); opacity: 0; }
        }

        /* Team Circle */
        .circle-rotate {
          animation: rotate-smooth 4s linear infinite;
          transform-origin: center;
        }
        @keyframes rotate-smooth {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Team Circle - Yellow completion from 12 o'clock and Person transformation */
        .circle-yellow-draw {
          animation: complete-circle-12 1.5s ease-out forwards;
        }
        .circle-yellow-undraw {
          animation: uncomplete-circle-12 1.5s ease-out forwards;
          stroke-dashoffset: 0;
        }
        @keyframes complete-circle-12 {
          from { stroke-dashoffset: 440; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes uncomplete-circle-12 {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 440; }
        }
        
        .person-1-transform {
          animation: person-yellow-to-blue 0.6s ease-out forwards;
          animation-delay: 0.3s;
        }
        .person-2-transform {
          animation: person-yellow-to-blue 0.6s ease-out forwards;
          animation-delay: 0.6s;
        }
        .person-3-transform {
          animation: person-yellow-to-blue 0.6s ease-out forwards;
          animation-delay: 0.9s;
        }
        .person-4-transform {
          animation: person-yellow-to-blue 0.6s ease-out forwards;
          animation-delay: 1.2s;
        }
        @keyframes person-yellow-to-blue {
          0% { 
            filter: none;
          }
          50% {
            filter: drop-shadow(0 0 10px #2196F3);
          }
          100% { 
            filter: none;
          }
        }
        
        .person-1-transform circle,
        .person-1-transform ellipse,
        .person-1-transform line {
          animation: stroke-yellow-to-blue 0.6s ease-out forwards;
          animation-delay: 0.3s;
        }
        .person-2-transform circle,
        .person-2-transform ellipse,
        .person-2-transform line {
          animation: stroke-yellow-to-blue 0.6s ease-out forwards;
          animation-delay: 0.6s;
        }
        .person-3-transform circle,
        .person-3-transform ellipse,
        .person-3-transform line {
          animation: stroke-yellow-to-blue 0.6s ease-out forwards;
          animation-delay: 0.9s;
        }
        .person-4-transform circle,
        .person-4-transform ellipse,
        .person-4-transform line {
          animation: stroke-yellow-to-blue 0.6s ease-out forwards;
          animation-delay: 1.2s;
        }
        @keyframes stroke-yellow-to-blue {
          from { stroke: #FFC107; }
          to { stroke: #2196F3; }
        }

        /* Cloud Drawing */
        .cloud-complete path {
          animation: draw-cloud 2s ease-out forwards;
        }
        @keyframes draw-cloud {
          to { stroke-dashoffset: 0; }
        }

        /* Lightbulb Soft Glow */
        .bulb-glow-soft {
          animation: glow-soft 1.5s ease-in-out infinite;
        }
        .bulb-rays-soft {
          animation: rays-soft 1.5s ease-in-out infinite;
        }
        @keyframes glow-soft {
          0%, 100% { filter: drop-shadow(0 0 5px #FFC107); }
          50% { filter: drop-shadow(0 0 15px #FFC107); }
        }
        @keyframes rays-soft {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        /* Mobile Apps Pop and Float */
        .apps-pop-float .app-1 {
          animation: pop-float 1.2s ease-in-out infinite;
          animation-delay: 0s;
        }
        .apps-pop-float .app-2 {
          animation: pop-float 1.2s ease-in-out infinite;
          animation-delay: 0.2s;
        }
        .apps-pop-float .app-3 {
          animation: pop-float 1.2s ease-in-out infinite;
          animation-delay: 0.4s;
        }
        .apps-pop-float .app-4 {
          animation: pop-float 1.2s ease-in-out infinite;
          animation-delay: 0.6s;
        }
        @keyframes pop-float {
          0%, 100% { transform: translateY(0) scale(1); }
          30% { transform: translateY(-5px) scale(1.15); }
          60% { transform: translateY(-10px) scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedIconsSection;