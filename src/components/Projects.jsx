import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { getProjectsByCategory, getAllCategories } from '../data/projects'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ProjectsSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #f8f9ff, #e8f2ff);
  
  &[data-theme="dark"] {
    background: linear-gradient(135deg, #1a1a1a, #2d2d2d) !important;
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

  &[data-theme="dark"] {
    color: #ccc;
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &[data-theme="dark"] {
    background: #2d2d2d;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`

const ProjectImage = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(102, 126, 234, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const ProjectLink = styled(Link)`
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  text-decoration: none;
  font-size: 1.2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

const ProjectContent = styled.div`
  padding: 2rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;

  &[data-theme="dark"] {
    color: #fff;
  }
`

const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;

  &[data-theme="dark"] {
    color: #ccc;
  }
`

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const TechTag = styled.span`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`

const CategoryButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: 2px solid ${props => props.active ? '#667eea' : '#ddd'};
  background: ${props => props.active ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    border-color: #667eea;
  }

  &[data-theme="dark"] {
    background: ${props => props.active ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#2d2d2d'};
    color: ${props => props.active ? 'white' : '#ccc'};
    border-color: ${props => props.active ? '#667eea' : '#444'};
  }
`

const NoProjectsMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.2rem;
`

const Projects = () => {
  const { theme } = useTheme()
  const { language, t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  // Get categories with error handling
  let categories = ['All']
  try {
    const allCategories = getAllCategories()
    if (allCategories && Array.isArray(allCategories)) {
      categories = ['All', ...allCategories]
    }
  } catch (error) {
    console.error('Error getting categories:', error)
  }
  
  // Get projects with error handling
  let projects = []
  try {
    projects = getProjectsByCategory(selectedCategory === 'All' ? null : selectedCategory)
    if (!Array.isArray(projects)) {
      projects = []
    }
  } catch (error) {
    console.error('Error getting projects:', error)
    projects = []
  }

  const translations = {
    title: { en: 'Featured Projects', ar: 'المشاريع المميزة' },
    subtitle: { en: 'Innovative Electronics & Robotics Solutions', ar: 'حلول إلكترونيات وروبوتات مبتكرة' },
    all: { en: 'All Projects', ar: 'جميع المشاريع' }
  }

  const categoryTranslations = {
    'All': { en: 'All Projects', ar: 'جميع المشاريع' },
    'Robotics': { en: 'Robotics', ar: 'الروبوتات' },
    'Electronics': { en: 'Electronics', ar: 'الإلكتر��نيات' },
    'Mobile Application': { en: 'Mobile Apps', ar: 'تطبيقات الموبايل' },
    'Desktop Games': { en: 'Desktop Games', ar: 'ألعاب سطح المكتب' }
  }

  return (
    <ProjectsSection id="projects" data-theme={theme} data-lang={language}>
      <Container>
        <SectionHeader>
          <SectionTitle>{t('title', translations.title)}</SectionTitle>
          <SectionSubtitle data-theme={theme}>{t('subtitle', translations.subtitle)}</SectionSubtitle>
        </SectionHeader>
        <CategoryFilter>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              data-theme={theme}
            >
              {categoryTranslations[category] ? categoryTranslations[category][language] : category}
            </CategoryButton>
          ))}
        </CategoryFilter>
        {projects.length > 0 ? (
          <ProjectsGrid>
            {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              data-theme={theme}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title[language]} />
                <ProjectOverlay>
                  <ProjectLinks>
                    <ProjectLink to={`/project/${project.id}`}>
                      <i className="fas fa-eye"></i>
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectOverlay>
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle data-theme={theme}>{project.title[language]}</ProjectTitle>
                <ProjectDescription data-theme={theme}>
                  {project.shortDescription ? project.shortDescription[language] : project.description[language]}
                </ProjectDescription>
                <ProjectTech>
                  {project.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </ProjectTech>
              </ProjectContent>
            </ProjectCard>
          ))}
          </ProjectsGrid>
        ) : (
          <NoProjectsMessage>
            {language === 'ar' ? 'لا توجد مشاريع في هذه الفئة' : 'No projects found in this category'}
          </NoProjectsMessage>
        )}
      </Container>
    </ProjectsSection>
  )
}

export default Projects
