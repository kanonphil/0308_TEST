import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>차량 판매 정보 시스템</h1>
      <p className={styles.subtitle}>차량 등록부터 판매 관리까지</p>
    </div>
  )
}

export default Home