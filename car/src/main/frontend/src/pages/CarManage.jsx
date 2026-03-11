import React, { useEffect, useState } from 'react'
import { getCarList, insertCar } from '../api/carApi'
import PageTitle from '../components/common/PageTitle'
import DataTable from '../components/common/DataTable'
import styles from './CarManage.module.css'

const CAR_HEADERS = [[
  {label: 'No'},
  {label: '모델번호'},
  {label: '모델명'},
  {label: '제조사'},
]]

const INIT_FORM = {
  manufacturer: '',
  modelName: '',
  price: ''
}

const CarManage = () => {
  const [form, setForm] = useState(INIT_FORM)
  const [carList, setCarList] = useState([])
  const [refreshKey, setRefreshKey] = useState(0)

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getCarList()
        setCarList(data)
      } catch (error) {
        alert('차량 목록을 불러오지 못했습니다.')
      }
    }
    load()
  }, [refreshKey])

  const handleInsert = async () => {
    if (!form.manufacturer || !form.modelName || !form.price) {
      alert('제조사, 모델명, 가격은 필수 입력입니다.')
      return
    }
    try {
      await insertCar({
        ...form,
        price: parseInt(form.price)
      })
      alert('등록되었습니다.')
      setForm(INIT_FORM)
      setRefreshKey(prev => prev + 1)
    } catch (error) {
      alert('차량 등록에 실패했습니다.')
    }
  }
  
  return (
    <div>
      <PageTitle title='차량 등록' />

      <div className={styles.formArea}>
        <label>제조사
          <select 
            name='manufacturer'
            value={form.manufacturer}
            onChange={handleChange}
          >
            <option value="">선택</option>
            <option value="현대">현대</option>
            <option value="기아">기아</option>
          </select>
        </label>
        <label>모델명
          <input
            name='modelName'
            value={form.modelName}
            onChange={handleChange}
          />
        </label>
        <label>차량가격
          <input 
            type="number"
            name='price'
            value={form.price}
            onChange={handleChange}
          />
        </label>
        <button 
          type="button"
          onClick={handleInsert}
        >
          등록
        </button>
      </div>

      <PageTitle title='등록된 차량 목록' />
      <DataTable 
        headers={CAR_HEADERS}
        data={carList}
        renderRow={(car, index) => (
          <>
            <td>{carList.length - index}</td>
            <td>{car.modelNo}</td>
            <td>{car.modelName}</td>
            <td>{car.manufacturer}</td>
          </>
        )}
      />
    </div>
  )
}

export default CarManage