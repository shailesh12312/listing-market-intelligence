/**
 * Widget API Utilities
 * 
 * Handles all API calls using token-based authentication
 * No dependency on Supabase context or app auth providers
 */

interface WidgetAPIConfig {
  token: string
  baseUrl: string
  userId: string
}

export class WidgetAPI {
  private static config: WidgetAPIConfig | null = null

  static initialize(config: WidgetAPIConfig) {
    this.config = config
  }

  private static getHeaders(): HeadersInit {
    if (!this.config) {
      throw new Error('WidgetAPI not initialized. Call WidgetAPI.initialize(config) first.')
    }

    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.config.token}`,
      'X-User-ID': this.config.userId,
      'ngrok-skip-browser-warning': 'true',
    }
  }

  static async get<T = any>(url: string, params?: Record<string, any>): Promise<T> {
    if (!this.config) {
      throw new Error('WidgetAPI not initialized')
    }

    const queryString = params ? '?' + new URLSearchParams(params).toString() : ''
    const fullUrl = `${this.config.baseUrl}${url}${queryString}`

    try {
      const response = await fetch(fullUrl, {
        method: 'GET',
        headers: this.getHeaders(),
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      return response.json() as Promise<T>
    } catch (error) {
      console.error('Widget API GET Error:', error)
      throw error
    }
  }

  static async post<T = any>(url: string, data: any): Promise<T> {
    if (!this.config) {
      throw new Error('WidgetAPI not initialized')
    }

    const fullUrl = `${this.config.baseUrl}${url}`

    try {
      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      return response.json() as Promise<T>
    } catch (error) {
      console.error('Widget API POST Error:', error)
      throw error
    }
  }

  static async put<T = any>(url: string, data: any): Promise<T> {
    if (!this.config) {
      throw new Error('WidgetAPI not initialized')
    }

    const fullUrl = `${this.config.baseUrl}${url}`

    try {
      const response = await fetch(fullUrl, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      return response.json() as Promise<T>
    } catch (error) {
      console.error('Widget API PUT Error:', error)
      throw error
    }
  }

  static async delete<T = any>(url: string): Promise<T> {
    if (!this.config) {
      throw new Error('WidgetAPI not initialized')
    }

    const fullUrl = `${this.config.baseUrl}${url}`

    try {
      const response = await fetch(fullUrl, {
        method: 'DELETE',
        headers: this.getHeaders(),
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      return response.json() as Promise<T>
    } catch (error) {
      console.error('Widget API DELETE Error:', error)
      throw error
    }
  }
}

export default WidgetAPI
