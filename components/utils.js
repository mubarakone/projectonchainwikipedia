export const getButtonLabel = (isLoading, isSuccess, isError) => {
    if (isLoading) return 'Saving...';
    if (isSuccess) return 'Published';
    if (isError) return 'Error';
    return 'Comment';
  };
  
  export const getButtonClass = (isLoading, isSuccess, isError) => {
    if (isLoading) return 'bg-gray-500';
    if (isSuccess) return 'bg-green-500';
    if (isError) return 'bg-red-500';
    return 'bg-blue-500 hover:bg-blue-600';
  };
  