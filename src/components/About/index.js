// Write your JS code here

import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const About = () => {
  const a = 0
  console.log(a)
  return (
    <>
      <Header />
      <div className="about-card">
        <h1 className="about-heading">About Route</h1>
        <LogoutButton />
      </div>
    </>
  )
}

export default About
