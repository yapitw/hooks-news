import React from 'react'
import userFromValidation from './useFormValidation'
import validateLogin from './validateLogin'

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
}

function Login(props) {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = userFromValidation(INITIAL_STATE, validateLogin)
  const [login, setLogin] = React.useState(true)
  return (
    <div>
      <h2 className="mv3">{login ? 'Login' : 'Create Account'}</h2>
      <form className="flex flex-column" onSubmit={handleSubmit}>
        {!login && (
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="name"
            value={values.name}
            type="text"
            placeholder="Your name"
            autoComplete="off"
          />
        )}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          value={values.email}
          className={errors.email && 'error-input'}
          type="email"
          placeholder="Your email"
          autoComplete="off"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          value={values.password}
          className={errors.password && 'error-input'}
          type="password"
          placeholder="Choose a secure password"
          autoComplete="off"
        />
        {errors.password && <p className="error-text">{errors.password}</p>}

        <div className="flex mt3">
          <button
            className="button pointer mr2"
            disabled={isSubmitting}
            style={{
              background: isSubmitting ? 'grey' : 'orange',
            }}>
            submit
          </button>
          <button
            type="button"
            className="pointer button"
            onClick={() => setLogin(prevLogin => !prevLogin)}>
            {login ? 'Need to create an account?' : 'already have an account?'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
