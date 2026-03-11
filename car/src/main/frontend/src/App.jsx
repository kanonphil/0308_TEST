import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import CarManage from './pages/CarManage'
import SalesRegist from './pages/SalesRegist'
import SalesList from './pages/SalesList'
import styles from './App.module.css'

const App = () => {
  return (
    <BrowserRouter>
      <nav className={styles.nav}>
        <Link to="/"             className={styles.navItem}>홈</Link>
        <Link to="/car"          className={styles.navItem}>차량관리</Link>
        <Link to="/sales/regist" className={styles.navItem}>판매정보등록</Link>
        <Link to="/sales/list"   className={styles.navItem}>판매목록조회</Link>
      </nav>

      <div className={styles.content}>
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

export default App
