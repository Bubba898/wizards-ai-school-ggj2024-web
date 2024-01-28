export const handleError = async ({ error }: { error: App.Error }): Promise<App.Error> => {
  console.log("handleErrorF", error);
  return {
    message: `${error.message} ${error}`,
    stack: error.stack || 'No stack trace',
    status: error.status || 500,
    name: error.name || 'Error'
  };
};
