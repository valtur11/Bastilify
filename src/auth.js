import axios from 'axios'

function apiCall (method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](path, data)
      .then(res => {
        return resolve(res.data)
      })
      .catch(err => {
        return reject(err.response.data.error)
      })
  })
}

function setAuthorizationToken (token) {
  const headerName = 'Authorization'
  if (token) {
    axios.defaults.headers.common[headerName] = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common[headerName]
  }
}

function logout () {
  localStorage.clear() //eslint-disable-line
  setAuthorizationToken(false)
}

function authUser (type, userData) {
  // wrap our thunk in a promise so we can wait for the API call
  return new Promise((resolve, reject) => {
    return apiCall('post', `/api/auth/${type}`, userData)
      .then(({ token, ...user }) => {
        localStorage.setItem('jwtToken', token) //eslint-disable-line
        setAuthorizationToken(token)
        resolve() // indicate that the API call succeeded
      })
      .catch(err => {
        reject(err) // indicate the API call failed
      })
  })
}

export { logout, authUser }
