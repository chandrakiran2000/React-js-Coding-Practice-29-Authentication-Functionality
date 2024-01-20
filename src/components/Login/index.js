// Write your JS code here

//  import Header from '../Header'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Login = props => {
  const storeTheJwtChangePath = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    const {history} = props
    history.replace('/')
  }

  const submitLoginDetails = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    console.log(props)
    storeTheJwtChangePath(data.jwt_token)
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="login-card">
      <h1 className="login-heading">Please Login</h1>
      <button className="login-btn" onClick={submitLoginDetails} type="button">
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
