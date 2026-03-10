import axios from "axios";

export const getSalesList = async () => {
  try {
    const response = await axios.get('/sales/list')
    return response.data
  } catch (error) {
    console.error('판매 목록 조회 실패:', error)
    throw error
  }
}

export const insertSales = async (salesDTO) => {
  try {
    const response = await axios.post('/sales/insert', salesDTO)
    return response.data
  } catch (error) {
    console.error('판매 등록 실패:', error)
    throw error
  }
}