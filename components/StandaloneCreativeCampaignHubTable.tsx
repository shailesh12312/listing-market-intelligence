import React, { Fragment, useEffect, useState, useCallback } from 'react'
import { useWidgetContext } from '../widget-entry'
import { WidgetAPI } from '../api/WidgetAPI'
import {
  Search,
  Trash2,
  Eye,
  CheckCircle2,
  XCircle,
  Clock,
  Mail,
  MailCheck,
  Package,
} from 'lucide-react'

export interface CreativeCampaignTableHandle {
  forceRefresh: () => Promise<void>
}

interface Campaign {
  id: string
  asin?: string
  keyword?: string
  country: string
  mode: 'fast' | 'deep'
  status: 'pending' | 'completed' | 'failed'
  created_at: string
  updated_at: string
  response_summary?: any
}

const ITEMS_PER_PAGE = 21

const StandaloneCreativeCampaignHubTable = React.forwardRef<CreativeCampaignTableHandle>(
  (props, ref) => {
    const { token, baseUrl, userId } = useWidgetContext()
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [campaigns, setCampaigns] = useState<Campaign[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [page, setPage] = useState<number>(0)
    const [hasMore, setHasMore] = useState<boolean>(true)

    // Initialize API
    React.useEffect(() => {
      WidgetAPI.initialize({ token, baseUrl, userId })
    }, [token, baseUrl, userId])

    // Load campaigns
    const loadCampaigns = useCallback(async (pageNum = 0) => {
      setIsLoading(true)
      setError('')
      try {
        // This endpoint should be implemented in your backend
        // It should return campaigns for the authenticated user
        const response = await WidgetAPI.get('/campaigns', {
          page: pageNum,
          limit: ITEMS_PER_PAGE,
          search: searchQuery,
        })

        if (pageNum === 0) {
          setCampaigns(response.data || [])
        } else {
          setCampaigns((prev) => [...prev, ...(response.data || [])])
        }

        setHasMore(response.hasMore ?? true)
        setPage(pageNum)
      } catch (err) {
        console.error('Failed to load campaigns:', err)
        setError('Failed to load campaigns')
        setCampaigns([])
      } finally {
        setIsLoading(false)
      }
    }, [searchQuery])

    // Initial load
    useEffect(() => {
      loadCampaigns(0)
    }, [searchQuery, loadCampaigns])

    // Expose forceRefresh via ref
    React.useImperativeHandle(ref, () => ({
      forceRefresh: async () => {
        setPage(0)
        setCampaigns([])
        await loadCampaigns(0)
      },
    }))

    const handleDelete = async (campaignId: string) => {
      if (!confirm('Are you sure you want to delete this campaign?')) {
        return
      }

      try {
        await WidgetAPI.delete(`/campaigns/${campaignId}`)
        setCampaigns((prev) => prev.filter((c) => c.id !== campaignId))
      } catch (err) {
        console.error('Failed to delete campaign:', err)
        setError('Failed to delete campaign')
      }
    }

    const getStatusIcon = (status: string) => {
      switch (status) {
        case 'completed':
          return (
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
          )
        case 'pending':
          return <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
        case 'failed':
          return <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
        default:
          return null
      }
    }

    const getStatusLabel = (status: string) => {
      return status.charAt(0).toUpperCase() + status.slice(1)
    }

    if (isLoading && campaigns.length === 0) {
      return (
        <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-slate-950">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Loading campaigns...
            </p>
          </div>
        </div>
      )
    }

    if (error && campaigns.length === 0) {
      return (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
          <button
            onClick={() => loadCampaigns(0)}
            className="mt-2 text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
          >
            Try Again
          </button>
        </div>
      )
    }

    if (campaigns.length === 0) {
      return (
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-gray-800 dark:bg-slate-950">
          <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-500 dark:text-gray-400">No campaigns yet</p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Create your first campaign to get started
          </p>
        </div>
      )
    }

    return (
      <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-slate-950 overflow-hidden">
        {/* Search Bar */}
        <div className="border-b border-gray-200 p-4 dark:border-gray-800">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search campaigns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-gray-300 pl-10 pr-4 py-2 text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Search
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Country
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Mode
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {campaigns.map((campaign) => (
                <tr
                  key={campaign.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium">
                    {campaign.asin || campaign.keyword}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                    {campaign.country}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        campaign.mode === 'fast'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                      }`}
                    >
                      {campaign.mode.charAt(0).toUpperCase() +
                        campaign.mode.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(campaign.status)}
                      <span className="text-gray-600 dark:text-gray-400">
                        {getStatusLabel(campaign.status)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                    {new Date(campaign.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-right space-x-2">
                    <button
                      onClick={() => alert('View campaign details')}
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      title="View"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(campaign.id)}
                      className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="border-t border-gray-200 px-6 py-4 text-center dark:border-gray-800">
            <button
              onClick={() => loadCampaigns(page + 1)}
              disabled={isLoading}
              className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 disabled:text-gray-400"
            >
              {isLoading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    )
  }
)

StandaloneCreativeCampaignHubTable.displayName =
  'StandaloneCreativeCampaignHubTable'

export default StandaloneCreativeCampaignHubTable
