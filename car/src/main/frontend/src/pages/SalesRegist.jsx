import React, { useEffect, useState } from 'react'
import styles from './SalesRegist.module.css'
import { useNavigate } from 'react-router-dom'
import { getCarList } from '../api/carApi'
import { insertSales } from '../api/salesApi'
import PageTitle from '../components/common/PageTitle'

const INIT_FORM = {
  buyerName: '',
  color: '',
  modelNo: '',
  buyerPhone: ''
}

const SalesRegist = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState(INIT_FORM)
  const [carList, setCarList] = useState([])

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
        alert('모델 목록을 불러오지 못했습니다.')
      }
    }
    load()
  }, [])

  const handleInsert = async () => {
    if (!form.buyerName || !form.color || !form.modelNo) {
      alert('구매자명, 색상, 모델은 필수 입력입니다.')
      return
    }
    if (form.buyerPhone) {
      const phoneRegex = /^010-\d{4}-\d{4}$/
      if (!phoneRegex.test(form.buyerPhone)) {
        alert('연락처는 010-1111-2222 형태로 입력하세요')
        return
      }
    }
    try {
      await insertSales({
        ...form,
        buyerPhone: form.buyerPhone || null,
        modelNo: parseInt(form.modelNo)
      })
      alert('등록되었습니다.')
      navigate('/sales/list')
    } catch (error) {
      alert('판매 등록에 실패했습니다.')
    }
  }
  
  return (
    <div>
      <PageTitle title='판매정보등록' />

      <div className={styles.formArea}>
        <label>구매자명
          <input
            name='buyerName'
            value={form.buyerName}
            onChange={handleChange}
          />
        </label>

        <div className={styles.row}>
          <label>색상&nbsp;
            <select
              name='color'
              value={form.color}
              onChange={handleChange}
            >
              <option value="">선택</option>
              <option value="화이트">화이트</option>
              <option value="블랙">블랙</option>
              <option value="실버">실버</option>
              <option value="레드">레드</option>
              <option value="블루">블루</option>
            </select>
          </label>
          <label>모델
            <select
              name='modelNo'
              value={form.modelNo}
              onChange={handleChange}
            >
              <option value="">선택</option>
              {carList.map(car => (
                <option key={car.modelNo} value={car.modelNo}>
                  {car.modelName}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label>연락처
          <input
            name='buyerPhone'
            value={form.buyerPhone}
            onChange={handleChange}
            placeholder='010-0000-0000 (선택)'
          />
        </label>
        
        <button 
          type="button"
          onClick={handleInsert}
        >등록
        </button>
      </div>
    </div>
  )
}

export default SalesRegist