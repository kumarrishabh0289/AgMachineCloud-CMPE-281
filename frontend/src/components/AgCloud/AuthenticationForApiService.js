import axios from 'axios'
import { API_URL } from '../../Constants'

export const AUTHENTICATED_USER_SESSION = 'authenticatedUser'

class AuthenticationForApiService {

    

    authenticate(email, password, role) {
        return axios.post(`${API_URL}/login`, {
            email,
            password,
            role
        })
    }

    registerSuccessfulLogin(username, token) {
        sessionStorage.setItem(AUTHENTICATED_USER_SESSION, username)
        
    }

    
    logout() {
        sessionStorage.removeItem(AUTHENTICATED_USER_SESSION);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(AUTHENTICATED_USER_SESSION)
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(AUTHENTICATED_USER_SESSION)
        if (user === null) return ''
        return user
    }

  
}

export default new AuthenticationForApiService()