import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import Education from './components/Education'
import Work from './components/Work'
import Community from './components/Community'
import About from './components/About'
import Team from './components/Team'
import Experts from './components/Experts'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'

const PAGES = {
  home: Home,
  education: Education,
  work: Work,
  community: Community,
  about: About,
  team: Team,
  experts: Experts,
  newsletter: Newsletter,
  contact: Contact,
}

export default function App() {
  const [route, setRoute] = useState('home')

  const onNav = (page) => {
    setRoute(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const titles = {
      home: 'Human Future Hub — AI Literacy, Berlin',
      education: 'Future of Education — Human Future Hub',
      work: 'Future of Work — Human Future Hub',
      community: 'Community & Events — Human Future Hub',
      about: 'About — Human Future Hub',
      team: 'Team — Human Future Hub',
      experts: 'Expert Contributors — Human Future Hub',
      newsletter: 'Newsletter — Human Future Hub',
      contact: 'Contact — Human Future Hub',
    }
    document.title = titles[route] || titles.home
  }, [route])

  const Page = PAGES[route] || Home

  return (
    <>
      <Nav route={route} onNav={onNav} />
      <main>
        <Page onNav={onNav} />
      </main>
      <Footer onNav={onNav} />
    </>
  )
}
