import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useWidgetContext } from './widget-entry'
import StandaloneCreativeCampaignCreationBar from './components/StandaloneCreativeCampaignCreationBar'
import StandaloneCreativeCampaignHubTable from './components/StandaloneCreativeCampaignHubTable'
import StandaloneHeroHeader from './components/StandaloneHeroHeader'

export interface CreativeCampaignTableHandle {
  forceRefresh: () => Promise<void>
}

/**
 * Standalone Creative Campaigns Component
 * 
 * This component:
 * ✓ Does not use React Router
 * ✓ Does not use AuthContext
 * ✓ Does not import from app pages
 * ✓ Manages its own state for campaigns
 * ✓ Uses token-based API calls
 */
const StandaloneCreativeCampaigns: React.FC = () => {
  const { token, baseUrl, userId } = useWidgetContext()
  const tableRef = useRef<CreativeCampaignTableHandle>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Validate widget is properly initialized
    if (token && baseUrl && userId) {
      setIsReady(true)
    }
  }, [token, baseUrl, userId])

  const handleWorkflowStart = useCallback(() => {
    // Refresh the table when a workflow starts
    tableRef.current?.forceRefresh()
  }, [])

  if (!isReady) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Initializing Creative Campaigns Widget...</p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="h-screen overflow-auto bg-gradient-to-b from-muted/30 to-background"
      id="campaigns-scrollable-div"
    >
      <StandaloneHeroHeader
        title="Creative Campaigns Hub"
        description="Create and manage Market Intelligence + Creative Brief workflows"
        shareable={false}
      />
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-8 pt-0">
        <StandaloneCreativeCampaignCreationBar onWorkflowStart={handleWorkflowStart} />
        <StandaloneCreativeCampaignHubTable ref={tableRef} />
      </div>
    </div>
  )
}

export default StandaloneCreativeCampaigns
