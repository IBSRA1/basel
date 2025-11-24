import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const AboutSection = styled.section`
  padding: 100px 0;
  background: white;
  
  &[data-theme="dark"] {
    background: #1a1a1a !important;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const AboutText = styled.div`
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.8;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const Stat = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f8f9ff, #e8f2ff);
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h4 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #667eea;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-weight: 500;
    margin: 0;
  }
`

const AboutImage = styled.div`
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`

const TechIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  i {
    font-size: 3rem;
    color: white;
    animation: iconFloat 3s ease-in-out infinite;

    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.5s; }
    &:nth-child(3) { animation-delay: 1s; }
    &:nth-child(4) { animation-delay: 1.5s; }
  }

  @keyframes iconFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`

const About = () => {
  const { theme } = useTheme()
  const { language, t } = useLanguage()

  const translations = {
    title: { en: 'About Me', ar: 'حولي' },
    subtitle: { en: 'Passionate Electronics Engineer & Maker', ar: 'مهندس إلكترونيات شغوف وصانع' },
    heading: { en: 'Building the Future, One Circuit at a Time', ar: 'بناء المستقبل، دائرة واحدة في كل مرة' },
    description1: {
      en: "I'm a dedicated electronics engineer with a passion for creating innovative Arduino projects and IoT solutions. My journey in electronics began with curiosity and has evolved into a deep understanding of embedded systems, robotics, and smart technology.",
      ar: "أنا مهندس إلكترونيات مخصص مع شغف لإنشاء مشاريع أردوينو مبتكرة وحلول إنترنت الأشياء. بدأت رحلتي في الإلكترونيات بالفضول وتطورت إلى فهم عميق لأنظمة المدمجة والروبوتات والتكنولوجيا الذكية."
    },
    description2: {
      en: "From simple LED circuits to complex autonomous robots, I enjoy tackling challenges that combine hardware and software. Each project is an opportunity to learn, innovate, and push the boundaries of what's possible with electronics.",
      ar: "من دوائر LED البسيطة إلى الروبوتات المستقلة المعقدة، أستمتع بمواجهة التحديات التي تجمع بين الأجهزة والبرمجيات. كل مشروع هو فرصة للتعلم والابتكار ودفع حدود ما هو ممكن مع الإلكترونيات."
    },
    projects: { en: 'Projects Completed', ar: 'مشاريع مكتملة' },
    experience: { en: 'Years Experience', ar: 'سنوات خبرة' },
    passion: { en: 'Passion Driven', ar: 'مدفوع بالشغف' }
  }

  return (
    <AboutSection id="about" data-theme={theme} data-lang={language}>
      <Container>
        <SectionHeader>
          <SectionTitle>{t('title', translations.title)}</SectionTitle>
          <SectionSubtitle>{t('subtitle', translations.subtitle)}</SectionSubtitle>
        </SectionHeader>
        <AboutContent>
          <AboutText>
            <h3>{t('heading', translations.heading)}</h3>
            <p>{t('description1', translations.description1)}</p>
            <p>{t('description2', translations.description2)}</p>
            <Stats>
              <Stat
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4>7+</h4>
                <p>{t('projects', translations.projects)}</p>
              </Stat>
              <Stat
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4>3+</h4>
                <p>{t('experience', translations.experience)}</p>
              </Stat>
              <Stat
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4>100%</h4>
                <p>{t('passion', translations.passion)}</p>
              </Stat>
            </Stats>
          </AboutText>
          <AboutImage>
            <ImageContainer>
              <TechIcons>
                <i className="fas fa-microchip"></i>
                <i className="fas fa-robot"></i>
                <i className="fas fa-bolt"></i>
                <i className="fas fa-wifi"></i>
              </TechIcons>
            </ImageContainer>
          </AboutImage>
        </AboutContent>
      </Container>
    </AboutSection>
  )
}

export default About
