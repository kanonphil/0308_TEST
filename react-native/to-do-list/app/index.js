import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ToDoList from '../components/ToDoList'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ToDoList />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})