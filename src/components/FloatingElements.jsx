import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(5deg);
  }
  50% {
    transform: translateY(-40px) rotate(0deg);
  }
  75% {
    transform: translateY(-20px) rotate(-5deg);
  }
`

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`

const driftAnimation = keyframes`
  0% {
    transform: translateX(0px) translateY(0px);
  }
  25% {
    transform: translateX(20px) translateY(-10px);
  }
  50% {
    transform: translateX(0px) translateY(-20px);
  }
  75% {
    transform: translateX(-20px) translateY(-10px);
  }
  100% {
    transform: translateX(0px) translateY(0px);
  }
`

const FloatingElement = styled.div.withConfig({
  shouldForwardProp: (prop) => !['$left', '$top', '$animation', '$duration', '$delay'].includes(prop),
})`
  position: fixed;
  pointer-events: none;
  z-index: 1;
  animation: ${props => {
    switch(props.$animation) {
      case 'float': return floatAnimation;
      case 'rotate': return rotateAnimation;
      case 'pulse': return pulseAnimation;
      case 'drift': return driftAnimation;
      default: return floatAnimation;
    }
  }} ${props => props.$duration}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  left: ${props => props.$left}%;
  top: ${props => props.$top}%;
`

const Cube = styled.div.withConfig({
  shouldForwardProp: (prop) => !['$size'].includes(prop),
})`
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`

const Circle = styled.div.withConfig({
  shouldForwardProp: (prop) => !['$size'].includes(prop),
})`
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.3), rgba(254, 202, 87, 0.3));
  border-radius: 50%;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`

const Triangle = styled.div.withConfig({
  shouldForwardProp: (prop) => !['$size'].includes(prop),
})`
  width: 0;
  height: 0;
  border-left: ${props => props.$size/2}px solid transparent;
  border-right: ${props => props.$size/2}px solid transparent;
  border-bottom: ${props => props.$size}px solid rgba(72, 219, 251, 0.3);
  backdrop-filter: blur(10px);
`

const Star = styled.div.withConfig({
  shouldForwardProp: (prop) => !['$size'].includes(prop),
})`
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: linear-gradient(135deg, rgba(255, 159, 243, 0.3), rgba(72, 219, 251, 0.3));
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  backdrop-filter: blur(10px);
`

const Heart = styled.div.withConfig({
  shouldForwardProp: (prop) => !['$size'].includes(prop),
})`
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.3), rgba(255, 159, 243, 0.3));
  position: relative;
  transform: rotate(-45deg);
  backdrop-filter: blur(10px);
  
  &::before,
  &::after {
    content: '';
    width: ${props => props.$size * 0.6}px;
    height: ${props => props.$size * 0.6}px;
    position: absolute;
    left: ${props => props.$size * 0.5}px;
    top: 0;
    background: inherit;
    border-radius: 50%;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  
  &::after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`

const FloatingElements = () => {
  const [elements, setElements] = useState([])

  useEffect(() => {
    const createElement = () => {
      const shapes = ['cube', 'circle', 'triangle']
      const animations = ['float', 'rotate', 'pulse']
      
      const newElement = {
        id: Date.now() + Math.random(),
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        size: 25 + Math.random() * 15, // Reduced size variation
        left: Math.random() * 100,
        top: Math.random() * 100,
        animation: animations[Math.floor(Math.random() * animations.length)],
        duration: 4, // Fixed duration
        delay: Math.random() * 2
      }
      
      setElements(prev => [...prev, newElement])
    }

    // Create initial elements
    for (let i = 0; i < 2; i++) {
      setTimeout(createElement, i * 1000)
    }

    // Create new elements less frequently
    const interval = setInterval(createElement, 15000)

    // Clean up old elements more frequently
    const cleanup = setInterval(() => {
      setElements(prev => prev.filter(el => 
        Date.now() - el.id < 20000
      ))
    }, 8000)

    return () => {
      clearInterval(interval)
      clearInterval(cleanup)
    }
  }, [])

  const renderShape = (element) => {
    const props = { $size: element.size }
    
    switch(element.shape) {
      case 'cube':
        return <Cube {...props} />
      case 'circle':
        return <Circle {...props} />
      case 'triangle':
        return <Triangle {...props} />
      case 'star':
        return <Star {...props} />
      case 'heart':
        return <Heart {...props} />
      default:
        return <Cube {...props} />
    }
  }

  return (
    <>
      {elements.map(element => (
        <FloatingElement
          key={element.id}
          $left={element.left}
          $top={element.top}
          $animation={element.animation}
          $duration={element.duration}
          $delay={element.delay}
        >
          {renderShape(element)}
        </FloatingElement>
      ))}
    </>
  )
}

export default FloatingElements

