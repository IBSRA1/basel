import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useState } from 'react'

const ContactSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2, p {
    color: white;
  }
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ff6b6b, #feca57);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ContactInfo = styled.div`
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    line-height: 1.8;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
`

const ContactMethods = styled.div`
  margin-bottom: 2rem;
`

const ContactMethod = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  i {
    font-size: 1.5rem;
    color: #feca57;
  }

  h4 {
    margin-bottom: 0.5rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  p {
    opacity: 0.8;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }
`

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 120px;

  &:focus {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
`

const Button = styled.button`
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #ff6b6b, #feca57);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
  }
`

const Contact = () => {
  const { theme } = useTheme()
  const { language, t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formspreeId = 'xgvbvwvb'
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email
        })
      })

      const data = await response.json()

      if (response.ok || response.status === 200) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Error sending message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const translations = {
    title: { en: 'Get In Touch', ar: 'تواصل معي' },
    subtitle: { en: "Let's collaborate on your next electronics project", ar: 'دع��ا نتعاون في مشروع الإلكترونيات القادم' },
    heading: { en: 'Ready to Build Something Amazing?', ar: 'مستعد لبناء شيء مذهل؟' },
    description: {
      en: "I'm always excited to work on new projects and collaborate with fellow makers and engineers. Whether you need help with Arduino programming, circuit design, or robotics solutions, I'm here to help!",
      ar: 'أنا دائماً متحمس للعمل على مشاريع جديدة والتعاون مع زملاء الصانعين والمهندسين. سواء كنت تحتاج مساعدة في برمجة أردوينو أو تصميم الدوائر أو حلول الروبوتات، أنا هنا للمساعدة!'
    },
    email: { en: 'Email', ar: 'البريد الإلكتروني' },
    phone: { en: 'Phone', ar: 'الهاتف' },
    location: { en: 'Location', ar: 'الموقع' },
    emailValue: { en: 'basel@electronics.com', ar: 'basel@electronics.com' },
    phoneValue: { en: '+1 (555) 123-4567', ar: '+1 (555) 123-4567' },
    locationValue: { en: 'Available for Remote Work', ar: 'متاح للعمل عن بُعد' },
    name: { en: 'Your Name', ar: 'اسمك' },
    emailPlaceholder: { en: 'Your Email', ar: 'بريدك الإلكتروني' },
    subject: { en: 'Subject', ar: 'الموضوع' },
    message: { en: 'Your Message', ar: 'رسالتك' },
    sendMessage: { en: 'Send Message', ar: 'إرسال الرسالة' }
  }

  return (
    <ContactSection id="contact" data-theme={theme} data-lang={language}>
      <Container>
        <SectionHeader>
          <SectionTitle>{t('title', translations.title)}</SectionTitle>
          <SectionSubtitle>{t('subtitle', translations.subtitle)}</SectionSubtitle>
        </SectionHeader>
        <ContactContent>
          <ContactInfo>
            <h3>{t('heading', translations.heading)}</h3>
            <p>{t('description', translations.description)}</p>
            <ContactMethods>
              <ContactMethod
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>{t('email', translations.email)}</h4>
                  <p>{t('emailValue', translations.emailValue)}</p>
                </div>
              </ContactMethod>
              <ContactMethod
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <i className="fas fa-phone"></i>
                <div>
                  <h4>{t('phone', translations.phone)}</h4>
                  <p>{t('phoneValue', translations.phoneValue)}</p>
                </div>
              </ContactMethod>
              <ContactMethod
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>{t('location', translations.location)}</h4>
                  <p>{t('locationValue', translations.locationValue)}</p>
                </div>
              </ContactMethod>
            </ContactMethods>
            <SocialLinks>
              <SocialLink href="#"><i className="fab fa-github"></i></SocialLink>
              <SocialLink href="#"><i className="fab fa-linkedin"></i></SocialLink>
              <SocialLink href="#"><i className="fab fa-twitter"></i></SocialLink>
              <SocialLink href="#"><i className="fab fa-youtube"></i></SocialLink>
            </SocialLinks>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('name', translations.name)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('emailPlaceholder', translations.emailPlaceholder)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t('subject', translations.subject)}
                required
              />
            </FormGroup>
            <FormGroup>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('message', translations.message)}
                rows="5"
                required
              />
            </FormGroup>
            <Button type="submit" disabled={loading}>
              {loading ? 'Sending...' : t('sendMessage', translations.sendMessage)}
            </Button>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ color: '#48ff00', marginTop: '1rem', textAlign: 'center' }}
              >
                Message sent successfully! 🎉
              </motion.div>
            )}
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  )
}

export default Contact
