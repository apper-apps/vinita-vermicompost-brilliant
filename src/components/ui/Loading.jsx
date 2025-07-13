import ApperIcon from "@/components/ApperIcon"

const Loading = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
            <ApperIcon name="Leaf" className="text-white" size={32} />
          </div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-accent/30 rounded-full animate-ping mx-auto" />
        </div>
        
        <h3 className="text-xl font-semibold text-primary mb-2">Loading...</h3>
        <p className="text-gray-600">Please wait while we load the content</p>
        
        {/* Loading skeleton for content preview */}
        <div className="mt-8 space-y-4 max-w-md mx-auto">
          <div className="h-4 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-4 bg-gray-200 rounded-full animate-pulse w-3/4" />
          <div className="h-4 bg-gray-200 rounded-full animate-pulse w-1/2" />
        </div>
      </div>
    </div>
  )
}

export default Loading