const catchAxiosError = async (axiosFunc) => {
  try {
    return await axiosFunc()
  } catch (error) {
    throw new Error(
      error.response?.data?.message + error.response?.data?.additional_message
        ? "  --  Additional Message:  " +
          error.response?.data?.additional_message
        : "" || error.message
    )
  }
}

export default catchAxiosError
