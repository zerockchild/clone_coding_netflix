// eslint-disable-next-line consistent-return
const catchAsync = async (fn) => {
    try {
      const responseData = await fn.then((result) => result.data);
      return responseData;
    } catch (error) {
      console.error(error);
    }
  };
  
  export default catchAsync;