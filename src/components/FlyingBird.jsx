import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const flyAnimation = keyframes`
  0% {
    transform: translateX(-100px) translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateX(25vw) translateY(-50px) rotate(5deg);
  }
  50% {
    transform: translateX(50vw) translateY(-100px) rotate(0deg);
  }
  75% {
    transform: translateX(75vw) translateY(-50px) rotate(-5deg);
  }
  100% {
    transform: translateX(calc(100vw + 100px)) translateY(0px) rotate(0deg);
  }
`

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`

const BirdContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['$top', '$duration', '$delay'].includes(prop),
})`
  position: fixed;
  top: ${props => props.$top}px;
  left: -100px;
  z-index: 1000;
  pointer-events: none;
  animation: ${flyAnimation} ${props => props.$duration}s linear infinite;
  animation-delay: ${props => props.$delay}s;
`

const Bird = styled.div`
  width: 40px;
  height: 30px;
  position: relative;
  animation: ${floatAnimation} 2s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #ff6b6b, #feca57);
    border-radius: 50% 10px 50% 10px;
    transform: rotate(-45deg);
    top: 5px;
    left: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: linear-gradient(135deg, #feca57, #ff6b6b);
    border-radius: 50% 10px 50% 10px;
    transform: rotate(-45deg);
    top: 8px;
    left: 12px;
  }
`

const Wing = styled.div`
  position: absolute;
  width: 25px;
  height: 8px;
  background: linear-gradient(90deg, #ff6b6b, #feca57);
  border-radius: 50%;
  top: 15px;
  left: 5px;
  animation: ${keyframes`
    0%, 100% { transform: rotate(0deg) scaleY(1); }
    50% { transform: rotate(10deg) scaleY(0.8); }
  `} 0.5s ease-in-out infinite;
`

const FlyingBird = () => {
  const [birds, setBirds] = useState([])
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const createBird = () => {
      const newBird = {
        id: Date.now() + Math.random(),
        top: Math.random() * (window.innerHeight * 0.6) + 50,
        duration: 8 + Math.random() * 4,
        delay: Math.random() * 5
      }
      setBirds(prev => [...prev, newBird])
    }

    // Create initial birds
    for (let i = 0; i < 3; i++) {
      setTimeout(createBird, i * 2000)
    }

    // Create more birds when scrolling
    const scrollThreshold = 500
    if (scrollY > scrollThreshold) {
      const interval = setInterval(createBird, 3000)
      return () => clearInterval(interval)
    }

    // Create new birds periodically
    const interval = setInterval(createBird, 8000)

    // Clean up birds that have finished flying
    const cleanup = setInterval(() => {
      setBirds(prev => prev.filter(bird => 
        Date.now() - bird.id < (bird.duration + bird.delay) * 1000 + 10000
      ))
    }, 5000)

    return () => {
      clearInterval(interval)
      clearInterval(cleanup)
    }
  }, [scrollY])

  return (
    <>
      {birds.map(bird => (
        <BirdContainer
          key={bird.id}
          $top={bird.top}
          $duration={bird.duration}
          $delay={bird.delay}
        >
          <Bird>
            <Wing />
          </Bird>
        </BirdContainer>
      ))}
    </>
  )
}

export default FlyingBird
