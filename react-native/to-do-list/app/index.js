import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ToDoList from '../components/ToDoList'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ToDoList />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})