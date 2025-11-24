import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import styled from 'styled-components'
import profilePic from '../assets/1.jpeg'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);

  &[data-theme="dark"] {
    background: rgba(26, 26, 26, 0.95);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  }
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const ProfilePicSmall = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--primary-color);
`

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const LogoText = styled.h2`
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-size: 1.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background-color: white;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    padding: 2rem 0;

    &[data-theme="dark"] {
      background-color: #2d2d2d;
    }

    &.active {
      left: 0;
    }
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`

const NavControls = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

const ControlButton = styled.button`
  background: none;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background: var(--primary-color);
    color: white;
    transform: scale(1.1);
  }
`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Bar = styled.span`
  width: 25px;
  height: 3px;
  background: var(--text-color);
  margin: 3px 0;
  transition: 0.3s;
`

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()

  const translations = {
    home: { en: 'Home', ar: 'الرئيسية' },
    about: { en: 'About', ar: 'حولي' },
    projects: { en: 'Projects', ar: 'المشاريع' },
    skills: { en: 'Skills', ar: 'المهارات' },
    contact: { en: 'Contact', ar: 'تواصل' }
  }

  return (
    <Nav data-theme={theme}>
      <NavContainer>
        <NavLogo>
          <ProfilePicSmall>
            <ProfileImg 
              src={profilePic} 
              alt="Basel" 
            />
          </ProfilePicSmall>
          <LogoText>{t('name', { en: 'Basel', ar: 'باسل' })}</LogoText>
        </NavLogo>
        
        <NavMenu data-theme={theme}>
          <li><NavLink to="/">{t('home', translations.home)}</NavLink></li>
          <li><NavLink to="/#about">{t('about', translations.about)}</NavLink></li>
          <li><NavLink to="/#projects">{t('projects', translations.projects)}</NavLink></li>
          <li><NavLink to="/#skills">{t('skills', translations.skills)}</NavLink></li>
          <li><NavLink to="/#contact">{t('contact', translations.contact)}</NavLink></li>
        </NavMenu>
        
        <NavControls>
          <ControlButton onClick={toggleTheme} title="Toggle Theme">
            <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
          </ControlButton>
          <ControlButton onClick={toggleLanguage} title="Toggle Language">
            <i className="fas fa-language"></i>
          </ControlButton>
        </NavControls>
        
        <Hamburger>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
        </Hamburger>
      </NavContainer>
    </Nav>
  )
}

export default Navbar
