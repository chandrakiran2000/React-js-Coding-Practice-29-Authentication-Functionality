// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  const a = 0
  console.log(a)
  return (
    <div className="header-card">
      <ul className="header-ul-card">
        <Link to="/" className="Links">
          <li className="li">Home</li>
        </Link>
        <Link to="/about" className="Links">
          <li className="li">About</li>
        </Link>
      </ul>
    </div>
  )
}

export default Header
