import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/"             className={styles.navItem}>홈</Link>
      <Link to="/car"          className={styles.navItem}>차량관리</Link>
      <Link to="/sales/regist" className={styles.navItem}>판매정보등록</Link>
      <Link to="/sales/list"   className={styles.navItem}>판매목록조회</Link>
    </nav>
  )
}

export default Header