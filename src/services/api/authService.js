// Authentication Service
// This file handles all authentication-related API calls

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api"

class AuthService {
  // Login user
  async login(credentials) {
    try {
      // TODO: Replace with actual API call
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        throw new Error("Login failed")
      }

      const data = await response.json()

      // Store token in localStorage
      if (data.token) {
        localStorage.setItem("authToken", data.token)
        localStorage.setItem("userRole", data.user.role)
        localStorage.setItem("userId", data.user.id)
      }

      return data
    } catch (error) {
      console.error("Login error:", error)
      throw error
    }
  }

  // Register new user
  async register(userData) {
    try {
      // TODO: Replace with actual API call
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        throw new Error("Registration failed")
      }

      return await response.json()
    } catch (error) {
      console.error("Registration error:", error)
      throw error
    }
  }

  // Logout user
  logout() {
    localStorage.removeItem("authToken")
    localStorage.removeItem("userRole")
    localStorage.removeItem("userId")
    window.location.href = "/login"
  }

  // Get current user token
  getToken() {
    return localStorage.getItem("authToken")
  }

  // Get current user role
  getUserRole() {
    return localStorage.getItem("userRole")
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.getToken()
  }

  // Get authorization headers
  getAuthHeaders() {
    const token = this.getToken()
    return token ? { Authorization: `Bearer ${token}` } : {}
  }
}

export default new AuthService()
