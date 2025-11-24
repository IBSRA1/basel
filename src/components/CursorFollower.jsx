import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Cursor = styled.div.withConfig({
  shouldForwardProp: (prop) => !['$visible', '$x', '$y'].includes(prop),
})`
  position: fixed;
  width: 20px;
  height: 20px;
  background: rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
  mix-blend-mode: difference;
  opacity: ${props => props.$visible ? 1 : 0};
  left: ${props => props.$x - 10}px;
  top: ${props => props.$y - 10}px;
`

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <Cursor 
      $x={mousePosition.x} 
      $y={mousePosition.y} 
      $visible={isVisible}
    />
  )
}

export default CursorFollower
