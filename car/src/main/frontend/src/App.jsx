import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CarManage from './pages/CarManage'
import SalesRegist from './pages/SalesRegist'
import SalesList from './pages/SalesList'
import HomeLayout from './components/layout/HomeLayout'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index                element={<Home />} />
          <Route path="/car"          element={<CarManage />} />
          <Route path="/sales/regist" element={<SalesRegist />} />
          <Route path="/sales/list"   element={<SalesList />} />
        </Route>
        
      </Routes>
    </>
  )
}

export default App
