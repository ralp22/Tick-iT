import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'

const LoginPage = (props) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({ email: '', passwordInput: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    // e.preventDefault()
    // const payload = await SignInUser(formValues)
    // setFormValues({ email: '', passwordInput: '' })
    // props.setUser(payload)
    // props.toggleAuthenticated(true)
    navigate('/')
  } 
 
  return ( 
    <div>
      <Nav/>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Preferred e-mail address here"
              value={formValues.email}
              required
            />
          </div>
          <div>
            <label htmlFor="passwordInput">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="passwordInput"
              value={formValues.passwordInput}
              required
            />
          </div>
          <button type='submit' disabled={!formValues.email || !formValues.passwordInput}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
