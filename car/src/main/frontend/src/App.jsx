import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import CarManage from './pages/CarManage'
import SalesRegist from './pages/SalesRegist'
import SalesList from './pages/SalesList'

function App() {
  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <Link to="/"             style={itemStyle}>홈</Link>
        <Link to="/car"          style={itemStyle}>차량관리</Link>
        <Link to="/sales/regist" style={itemStyle}>판매정보등록</Link>
        <Link to="/sales/list"   style={itemStyle}>판매목록조회</Link>
      </nav>

      <div style={{ padding: '30px' }}>
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/car"          element={<CarManage />} />
          <Route path="/sales/regist" element={<SalesRegist />} />
          <Route path="/sales/list"   element={<SalesList />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

const navStyle = {
  display: 'flex',
  backgroundColor: '#222',
}

const itemStyle = {
  flex: 1,
  padding: '15px',
  color: 'white',
  textAlign: 'center',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
}

export default App
