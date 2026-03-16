import React, { useEffect, useState } from 'react'
import { getSalesList } from '../api/salesApi'
import PageTitle from '../components/common/PageTitle'
import DataTable from '../components/common/DataTable'

const SALES_HEADERS = [
  [
    {label: 'No', rowSpan: 2},
    {label: '구매자 정보', colSpan: 3},
    {label: '차량정보', colSpan: 3},
  ],
  [
    {label: '구매자명'},
    {label: '연락처'},
    {label: '구매일'},
    {label: '색상'},
    {label: '모델명'},
    {label: '가격'},
  ]
]

const SalesList = () => {
  const [salesList, setSalesList] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getSalesList()
        setSalesList(data)
      } catch (error) {
        alert('판매 목록을 불러오지 못했습니다.')
      }
    }
    load()
  }, [])
  
  return (
    <div>
      <PageTitle title='판매 목록 조회' />
      <DataTable 
        headers={SALES_HEADERS}
        data={salesList}
        renderRow={(sale, index, total) => (
          <>
            <td>{total - index}</td>
            <td>{sale.buyerName}</td>
            <td>{sale.buyerPhone ? sale.buyerPhone : '-'}</td>
            <td>{sale.saleDate}</td>
            <td>{sale.color}</td>
            <td>{sale.modelName}</td>
            <td>{sale.price.toLocaleString()}원</td>
          </>
        )}
      />
    </div>
  )
}

export default SalesList