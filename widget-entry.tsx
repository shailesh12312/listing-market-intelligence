/**
 * Standalone Creative Campaigns Widget
 * 
 * This widget is self-contained and does not depend on:
 * - Your app's AuthContext
 * - React Router
 * - Global state management
 * 
 * It requires:
 * - A valid API token passed as HTML attribute
 * - Base URL for API calls
 */

import React, { createContext, useContext, ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import StandaloneCreativeCampaigns from './StandaloneCreativeCampaigns.tsx'
import '../index.css'

// Widget-specific context for token management
interface WidgetContextType {
  token: string
  baseUrl: string
  userId: string
}

const WidgetContext = createContext<WidgetContextType | undefined>(undefined)

export const useWidgetContext = () => {
  const context = useContext(WidgetContext)
  if (!context) {
    throw new Error('useWidgetContext must be used within WidgetProvider')
  }
  return context
}

interface WidgetProviderProps {
  children: ReactNode
  token: string
  baseUrl: string
  userId: string
}

const WidgetProvider: React.FC<WidgetProviderProps> = ({
  children,
  token,
  baseUrl,
  userId,
}) => {
  return (
    <WidgetContext.Provider value={{ token, baseUrl, userId }}>
      {children}
    </WidgetContext.Provider>
  )
}

// Main widget initialization
interface WidgetConfig {
  containerId: string
  token: string
  baseUrl: string
  userId: string
  theme?: 'light' | 'dark'
}

let widgetRoot: React.Root | null = null

export const CreativeCampaignsWidget = {
  /**
   * Initialize and mount the widget
   * @param config Widget configuration
   */
  init: (config: WidgetConfig) => {
    const { containerId, token, baseUrl, userId, theme = 'light' } = config

    // Validate required config
    if (!containerId) {
      console.error('Creative Campaigns Widget: containerId is required')
      return
    }

    if (!token) {
      console.error('Creative Campaigns Widget: token is required')
      return
    }

    if (!baseUrl) {
      console.error('Creative Campaigns Widget: baseUrl is required')
      return
    }

    if (!userId) {
      console.error('Creative Campaigns Widget: userId is required')
      return
    }

    // Find or create container
    let container = document.getElementById(containerId)

    if (!container) {
      container = document.createElement('div')
      container.id = containerId
      document.body.appendChild(container)
    }

    // Clear previous root if exists
    if (widgetRoot) {
      widgetRoot.unmount()
    }

    // Create and mount widget
    widgetRoot = createRoot(container)

    widgetRoot.render(
      <div className={theme === 'dark' ? 'dark' : ''}>
        <WidgetProvider token={token} baseUrl={baseUrl} userId={userId}>
          <StandaloneCreativeCampaigns />
        </WidgetProvider>
      </div>
    )
  },

  /**
   * Unmount the widget
   */
  destroy: () => {
    if (widgetRoot) {
      widgetRoot.unmount()
      widgetRoot = null
    }
  },

  /**
   * Get the current widget version
   */
  version: '1.0.0',
}

// Expose globally
declare global {
  interface Window {
    CreativeCampaignsWidget: typeof CreativeCampaignsWidget
  }
}

if (typeof window !== 'undefined') {
  window.CreativeCampaignsWidget = CreativeCampaignsWidget
}

export default CreativeCampaignsWidget
