// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogoutButton = props => {
  const logoutBtn = () => {
    console.log(props)
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="logout-card">
      <button className="logout-btn" onClick={logoutBtn} type="button">
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
