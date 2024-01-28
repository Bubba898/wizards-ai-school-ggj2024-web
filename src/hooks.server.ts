export const handleError = async ({ error }: { error: any }) => {
  console.log("handleErrorB", error);
  return {
    message: error.message || 'Unknown Error',
    stack: error.stack || '',
    status: error.status || 500,
    details: JSON.stringify(error.body?.detail, null, 2)
  };
};
