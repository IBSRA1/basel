import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// ✅ Import your real profile image from assets
import profilePic from '../assets/1.jpeg'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: var(--gradient);
  overflow: hidden;
  padding-top: 70px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }
`

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`

const HeroText = styled.div`
  color: white;
`

const HeroProfile = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

const ProfilePicLarge = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  animation: profileFloat 3s ease-in-out infinite;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes profileFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const TextGradient = styled.span`
  background: linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.8;
`

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

const Button = styled(Link)`
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  overflow: hidden;

  &.primary {
    background: linear-gradient(135deg, #ff6b6b, #feca57);
    color: white;
    border: none;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
    }
  }

  &.secondary {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-2px);
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 250px;
  }
`

const HeroVisual = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 300px;
  }
`

const FloatingCube = styled.div`
  position: relative;
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
`

const Cube = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 20s linear infinite;

  @keyframes rotate {
    0% { transform: rotateX(0deg) rotateY(0deg); }
    100% { transform: rotateX(360deg) rotateY(360deg); }
  }
`

const Face = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  &.front { transform: rotateY(0deg) translateZ(100px); }
  &.back { transform: rotateY(180deg) translateZ(100px); }
  &.right { transform: rotateY(90deg) translateZ(100px); }
  &.left { transform: rotateY(-90deg) translateZ(100px); }
  &.top { transform: rotateX(90deg) translateZ(100px); }
  &.bottom { transform: rotateX(-90deg) translateZ(100px); }
`

const CircuitPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`

const CircuitLine = styled.div`
  position: absolute;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  height: 2px;
  animation: circuitFlow 3s linear infinite;

  &:nth-child(1) {
    top: 20%;
    width: 100%;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    top: 50%;
    width: 80%;
    left: 10%;
    animation-delay: 1s;
  }

  &:nth-child(3) {
    top: 80%;
    width: 60%;
    left: 20%;
    animation-delay: 2s;
  }

  @keyframes circuitFlow {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
  }
`

const ScrollArrow = styled.div`
  width: 20px;
  height: 20px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(45deg);
`

const Hero = () => {
  const { theme } = useTheme()
  const { language, t } = useLanguage()

  const translations = {
    title: { en: 'Electronics Engineer', ar: 'مهندس إلكترونيات' },
    subtitle: { en: '& IoT Developer', ar: 'ومطور إنترنت الأشياء' },
    description: { 
      en: 'Passionate about creating innovative Arduino projects, robotics solutions, and smart electronics systems. Transforming ideas into reality through code and circuits.',
      ar: 'شغوف بإنشاء مشاريع أردوينو مبتكرة وحلول الروبوتات وأنظمة الإلكترونيات الذكية. تحويل الأفكار إلى واقع من خلال الكود والدوائر.'
    },
    viewProjects: { en: 'View Projects', ar: 'عرض المشاريع' },
    getInTouch: { en: 'Get In Touch', ar: 'تواصل معي' }
  }

  return (
    <HeroSection data-theme={theme} data-lang={language}>
      <HeroContent>
        <HeroText>
          <HeroProfile>
            <ProfilePicLarge>
              {/* ✅ Use your imported image here */}
              <img 
                src={profilePic}
                alt="Sameh Albadry" 
              />
            </ProfilePicLarge>
          </HeroProfile>
          <HeroTitle>
            <TextGradient>{t('title', translations.title)}</TextGradient>
            <br />
            <span>{t('subtitle', translations.subtitle)}</span>
          </HeroTitle>
          <HeroDescription>
            {t('description', translations.description)}
          </HeroDescription>
          <HeroButtons>
            <Button to="/#projects" className="primary">
              {t('viewProjects', translations.viewProjects)}
            </Button>
            <Button to="/#contact" className="secondary">
              {t('getInTouch', translations.getInTouch)}
            </Button>
          </HeroButtons>
        </HeroText>
        <HeroVisual>
          <FloatingCube>
            <Cube>
              <Face className="front"></Face>
              <Face className="back"></Face>
              <Face className="right"></Face>
              <Face className="left"></Face>
              <Face className="top"></Face>
              <Face className="bottom"></Face>
            </Cube>
          </FloatingCube>
          <CircuitPattern>
            <CircuitLine></CircuitLine>
            <CircuitLine></CircuitLine>
            <CircuitLine></CircuitLine>
          </CircuitPattern>
        </HeroVisual>
      </HeroContent>
      <ScrollIndicator>
        <ScrollArrow></ScrollArrow>
      </ScrollIndicator>
    </HeroSection>
  )
}

export default Hero
