import React, { useState, useEffect, useRef } from 'react'

const MountainBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [draggedMountain, setDraggedMountain] = useState(null)
  const [mountains, setMountains] = useState([
    { id: 1, x: 10, y: 60, scale: 1.2, color: '#2d3748', opacity: 0.9 },
    { id: 2, x: 25, y: 70, scale: 1.0, color: '#4a5568', opacity: 0.8 },
    { id: 3, x: 45, y: 65, scale: 1.1, color: '#718096', opacity: 0.7 },
    { id: 4, x: 70, y: 75, scale: 0.9, color: '#a0aec0', opacity: 0.6 },
    { id: 5, x: 85, y: 68, scale: 1.0, color: '#cbd5e0', opacity: 0.5 }
  ])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePosition({ x, y })

      if (isDragging && draggedMountain) {
        setMountains(prev => prev.map(mountain => 
          mountain.id === draggedMountain.id 
            ? { ...mountain, x: x - 5, y: Math.max(50, Math.min(85, y)) }
            : mountain
        ))
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      setDraggedMountain(null)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, draggedMountain])

  const handleMountainMouseDown = (mountain) => {
    setIsDragging(true)
    setDraggedMountain(mountain)
  }

  const MountainShape = ({ mountain, index }) => {
    const baseWidth = 200 * mountain.scale
    const baseHeight = 120 * mountain.scale
    
    return (
      <div
        className={`absolute cursor-move transition-transform duration-200 hover:scale-110 ${
          isDragging && draggedMountain?.id === mountain.id ? 'z-50' : ''
        }`}
        style={{
          left: `${mountain.x}%`,
          top: `${mountain.y}%`,
          transform: `translate(-50%, -50%) scale(${mountain.scale})`,
          zIndex: 10 - index
        }}
        onMouseDown={() => handleMountainMouseDown(mountain)}
      >
        <svg
          width={baseWidth}
          height={baseHeight}
          viewBox="0 0 200 120"
          className="drop-shadow-lg"
        >
          <defs>
            <linearGradient id={`mountainGradient${mountain.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={mountain.color} stopOpacity={mountain.opacity} />
              <stop offset="100%" stopColor={mountain.color} stopOpacity={mountain.opacity * 0.6} />
            </linearGradient>
          </defs>
          <polygon
            points="0,120 50,20 100,60 150,10 200,120"
            fill={`url(#mountainGradient${mountain.id})`}
            stroke={mountain.color}
            strokeWidth="2"
            className="transition-all duration-300"
          />
          {/* Snow caps */}
          <polygon
            points="45,25 50,20 55,25"
            fill="white"
            opacity="0.8"
          />
          <polygon
            points="145,15 150,10 155,15"
            fill="white"
            opacity="0.8"
          />
        </svg>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Parallax background layers */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
        style={{
          transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px)`
        }}
      />
      
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `translateX(${mousePosition.x * 0.01}px) translateY(${mousePosition.y * 0.01}px)`
            }}
          />
        ))}
      </div>

      {/* Interactive mountains */}
      <div className="absolute inset-0 pointer-events-auto">
        {mountains.map((mountain, index) => (
          <MountainShape key={mountain.id} mountain={mountain} index={index} />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: `translateX(${mousePosition.x * 0.03}px) translateY(${mousePosition.y * 0.03}px)`
            }}
          />
        ))}
      </div>

      {/* Instruction text */}
      <div className="absolute bottom-4 left-4 text-white/60 text-sm pointer-events-none">
        🏔️ Drag the mountains to move them around!
      </div>
    </div>
  )
}

export default MountainBackground

