import axiosInstance from "./axiosInstance";

export const getCarList = async () => {
  try {
    const response = await axiosInstance.get('/cars/list')
    return response.data
  } catch (error) {
    console.error('차량 목록 조회 실패:', error)
    throw error
  }
}

export const insertCar = async (carDTO) => {
  try {
    const response = await axiosInstance.post('/cars/insert', carDTO)
    return response.data
  } catch (error) {
    console.error('차량 등록 실패:', error)
    throw error
  }
}