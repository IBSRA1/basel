import { useParams, useNavigate } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { getProjectById } from '../data/projects'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ProjectContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: var(--gradient);
`

const ProjectContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
`

const ProjectCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
`

const ProjectImage = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ProjectInfo = styled.div`
  padding: 2rem;
`

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--text-color);
`

const Section = styled.div`
  margin-bottom: 2rem;
`

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--primary-color);
`

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
`

const FeatureItem = styled.li`
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: var(--text-color);

  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--primary-color);
    font-weight: bold;
  }
`

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const TechTag = styled.span`
  background: var(--gradient);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`

const FunctionalitySection = styled.div`
  background: rgba(102, 126, 234, 0.05);
  border-left: 4px solid var(--primary-color);
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 2rem;

  &[data-theme="dark"] {
    background: rgba(102, 126, 234, 0.1);
  }

  p {
    margin: 0;
    line-height: 2;
    color: var(--text-color);
    white-space: pre-line;
  }
`

const ProjectPage = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const { theme } = useTheme()
  const { language, t } = useLanguage()
  
  const project = getProjectById(projectId)

  if (!project) {
    return (
      <ProjectContainer>
        <ProjectContent>
          <h1>Project not found</h1>
          <BackButton onClick={() => navigate('/')}>
            {t('backToHome', { en: 'Back to Home', ar: 'العودة للرئيسية' })}
          </BackButton>
        </ProjectContent>
      </ProjectContainer>
    )
  }

  const translations = {
    backToHome: { en: 'Back to Home', ar: 'العودة للرئيسية' },
    description: { en: 'Description', ar: 'الوصف' },
    features: { en: 'Features', ar: 'المميزات' },
    technologies: { en: 'Technologies Used', ar: 'التقنيات المستخدمة' },
      functionality: { en: 'Workflow / Functionality', ar: 'سير العمل / الوظائف' },
    circuitDiagram: { en: 'Circuit Diagram', ar: 'مخطط الدائرة' }
  }

  return (
    <ProjectContainer data-theme={theme} data-lang={language}>
      <ProjectContent>
        <BackButton onClick={() => navigate('/')}>
          {t('backToHome', translations.backToHome)}
        </BackButton>
        
        <ProjectCard
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ProjectImage>
            <img src={project.image} alt={project.title[language]} />
          </ProjectImage>
          
          <ProjectInfo>
            <ProjectTitle>{project.title[language]}</ProjectTitle>
            <ProjectDescription>{project.description[language]}</ProjectDescription>
            
            <Section>
              <SectionTitle>{t('features', translations.features)}</SectionTitle>
              <FeaturesList>
                {project.features[language].map((feature, index) => (
                  <FeatureItem key={index}>{feature}</FeatureItem>
                ))}
              </FeaturesList>
            </Section>
            
            <Section>
              <SectionTitle>{t('technologies', translations.technologies)}</SectionTitle>
              <TechTags>
                {project.technologies.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </TechTags>
            </Section>

            {project.functionality && (
              <Section>
                <SectionTitle>{t('functionality', translations.functionality)}</SectionTitle>
                <FunctionalitySection data-theme={theme}>
                  <p>{project.functionality}</p>
                </FunctionalitySection>
              </Section>
            )}
            
            {project.circuitDiagram && (
              <Section>
                <SectionTitle>{t('circuitDiagram', translations.circuitDiagram)}</SectionTitle>
                <div style={{ width: '100%', marginBottom: '2rem' }}>
                  <img 
                    src={project.circuitDiagram} 
                    alt={`${project.title[language]} Circuit Diagram`}
                    style={{ 
                      width: '100%', 
                      height: 'auto', 
                      borderRadius: '15px',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </div>
              </Section>
            )}
          </ProjectInfo>
        </ProjectCard>
      </ProjectContent>
    </ProjectContainer>
  )
}

export default ProjectPage
