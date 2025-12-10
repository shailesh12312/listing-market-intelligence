import React from 'react'

interface StandaloneHeroHeaderProps {
  title: string
  description: string
  shareable?: boolean
}

const StandaloneHeroHeader: React.FC<StandaloneHeroHeaderProps> = ({
  title,
  description,
  shareable = false,
}) => {
  return (
    <div className="border-b bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
          {shareable && (
            <div className="ml-4">
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Share
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StandaloneHeroHeader
