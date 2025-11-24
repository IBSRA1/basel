import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const SkillsSection = styled.section`
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
  transition: color 0.3s ease;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;

  &[data-theme="dark"] {
    color: #cccccc;
  }
`

const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`

const SkillsCategory = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #333;
    text-align: center;
    transition: color 0.3s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  &[data-theme="dark"] h3 {
    color: #ffffff;
  }
`

const SkillItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9ff, #e8f2ff);
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }

  i {
    font-size: 2rem;
    color: #667eea;
  }

  span {
    font-weight: 500;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
`

const Skills = () => {
  const { theme } = useTheme()
  const { language, t } = useLanguage()

  const translations = {
    title: { en: 'Technical Skills', ar: 'المهارات التقنية' },
    subtitle: { en: 'Technologies & Tools I Work With', ar: 'التقنيات والأدوات التي أعمل بها' },
    hardware: { en: 'Hardware & Electronics', ar: 'الأجهزة والإلكترونيات' },
    programming: { en: 'Programming & Software', ar: 'البرمجة والبرمجيات' },
    robotics: { en: 'Robotics & IoT', ar: 'الروبوتات وإنترنت الأشياء' }
  }

  const skillCategories = [
    {
      title: t('hardware', translations.hardware),
      skills: [
        { icon: 'fas fa-microchip', name: 'Arduino' },
        { icon: 'fas fa-bolt', name: 'Circuit Design' },
        { icon: 'fas fa-wifi', name: 'Bluetooth/WiFi' },
        { icon: 'fas fa-eye', name: 'Sensor Integration' }
      ]
    },
    {
      title: t('programming', translations.programming),
      skills: [
        { icon: 'fab fa-cuttlefish', name: 'C/C++' },
        { icon: 'fab fa-python', name: 'Python' },
        { icon: 'fab fa-js', name: 'JavaScript' },
        { icon: 'fas fa-mobile-alt', name: 'Mobile Apps' }
      ]
    },
    {
      title: t('robotics', translations.robotics),
      skills: [
        { icon: 'fas fa-robot', name: 'Robotics' },
        { icon: 'fas fa-network-wired', name: 'IoT Systems' },
        { icon: 'fas fa-cogs', name: 'Motor Control' }
      ]
    }
  ]

  return (
    <SkillsSection id="skills" data-theme={theme} data-lang={language}>
      <Container>
        <SectionHeader>
          <SectionTitle>{t('title', translations.title)}</SectionTitle>
          <SectionSubtitle data-theme={theme}>{t('subtitle', translations.subtitle)}</SectionSubtitle>
        </SectionHeader>
        <SkillsContent>
          {skillCategories.map((category, categoryIndex) => (
            <SkillsCategory key={categoryIndex} data-theme={theme}>
              <h3>{category.title}</h3>
              <SkillItems>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  >
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </SkillItem>
                ))}
              </SkillItems>
            </SkillsCategory>
          ))}
        </SkillsContent>
      </Container>
    </SkillsSection>
  )
}

export default Skills
