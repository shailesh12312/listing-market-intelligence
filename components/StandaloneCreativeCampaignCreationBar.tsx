import React, { useState } from 'react'
import { useWidgetContext } from '../widget-entry'
import { WidgetAPI } from '../api/WidgetAPI'
import { Loader2, Search, Zap, Target } from 'lucide-react'

interface StandaloneCreativeCampaignCreationBarProps {
  onWorkflowStart?: () => void
}

const StandaloneCreativeCampaignCreationBar: React.FC<
  StandaloneCreativeCampaignCreationBarProps
> = ({ onWorkflowStart }) => {
  const { token, baseUrl, userId } = useWidgetContext()
  const [searchType, setSearchType] = useState<'keyword' | 'asin'>('asin')
  const [mode, setMode] = useState<'fast' | 'deep'>('fast')
  const [keyword, setSearch] = useState<string>('')
  const [asin, setAsin] = useState<string>('')
  const [country, setCountry] = useState<string>('US')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [inputError, setInputError] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState<string>('')

  // Initialize API with widget context
  React.useEffect(() => {
    WidgetAPI.initialize({ token, baseUrl, userId })
  }, [token, baseUrl, userId])

  const isASIN = (val: string) => /^[A-Z0-9]{10}$/.test(val)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value

    if (searchType === 'keyword') {
      setSearch(val)
      if (isASIN(val)) {
        setInputError('Enter keyword only')
      } else {
        setInputError('')
      }
    } else {
      const up = val.toUpperCase()
      setAsin(up)
      if (up.length === 0) {
        setInputError('')
      } else if (!isASIN(up)) {
        setInputError('Enter a valid ASIN')
      } else {
        setInputError('')
      }
    }
  }

  const createCampaign = async () => {
    setIsLoading(true)
    setSuccessMessage('')
    try {
      const URL =
        searchType === 'keyword'
          ? '/generate-avatars'
          : '/generate-avatars-for-asin'
      const code = country === 'GB' ? 'UK' : country
      const payload = {
        ...(searchType === 'keyword'
          ? { keyword, id: userId, country: code }
          : { asin, id: userId, country: code }),
        start_brief_on_complete: mode === 'fast',
      }

      const response = await WidgetAPI.post(URL, payload)

      if (response) {
        setSuccessMessage(
          `Campaign started in ${mode === 'fast' ? 'Fast' : 'Deep'} mode`
        )
        onWorkflowStart?.()
        setAsin('')
        setSearch('')
        setTimeout(() => setSuccessMessage(''), 3000)
      }
    } catch (error) {
      console.error('Campaign creation error:', error)
      setInputError('Failed to create campaign. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputError) {
      return
    }
    await createCampaign()
  }

  const inputValue = searchType === 'keyword' ? keyword : asin
  const isFormValid =
    !inputError && inputValue.length > 0 && !isLoading

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-slate-950">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Start New Campaign
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Create a campaign using keyword or ASIN search
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Search Type */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Search Type
            </label>
            <select
              value={searchType}
              onChange={(e) => {
                setSearchType(e.target.value as 'keyword' | 'asin')
                setInputError('')
              }}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            >
              <option value="asin">ASIN</option>
              <option value="keyword">Keyword</option>
            </select>
          </div>

          {/* Search Input */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {searchType === 'keyword' ? 'Keyword' : 'ASIN'}
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={
                searchType === 'keyword'
                  ? 'Enter product keyword'
                  : 'Enter 10-char ASIN'
              }
              className={`w-full rounded-md border px-3 py-2 text-sm ${
                inputError
                  ? 'border-red-500 dark:border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              } bg-white dark:bg-gray-900 dark:text-white`}
            />
            {inputError && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                {inputError}
              </p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Country
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            >
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="IT">Italy</option>
              <option value="ES">Spain</option>
              <option value="CA">Canada</option>
              <option value="AU">Australia</option>
              <option value="JP">Japan</option>
              <option value="IN">India</option>
            </select>
          </div>

          {/* Mode */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Analysis Mode
            </label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value as 'fast' | 'deep')}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            >
              <option value="fast">Fast</option>
              <option value="deep">Deep</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={!isFormValid}
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white transition-colors ${
              isFormValid
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            {isLoading ? 'Creating...' : 'Create Campaign'}
          </button>
          {successMessage && (
            <div className="rounded-md bg-green-50 p-3 text-sm text-green-800 dark:bg-green-900 dark:text-green-200">
              {successMessage}
            </div>
          )}
        </div>
      </form>

      {/* Info Box */}
      <div className="mt-4 space-y-2 rounded-md bg-blue-50 p-3 dark:bg-blue-900/20">
        <p className="text-xs font-medium text-blue-900 dark:text-blue-200">
          💡 Tips:
        </p>
        <ul className="text-xs text-blue-800 dark:text-blue-300 space-y-1">
          <li>• <strong>ASIN:</strong> Use exactly 10 characters (e.g., B0123456789)</li>
          <li>• <strong>Keyword:</strong> Try specific product names or categories</li>
          <li>• <strong>Fast Mode:</strong> Quick analysis with automatic brief creation</li>
          <li>• <strong>Deep Mode:</strong> Comprehensive analysis, brief creation optional</li>
        </ul>
      </div>
    </div>
  )
}

export default StandaloneCreativeCampaignCreationBar
