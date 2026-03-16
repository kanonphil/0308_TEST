import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ToDoList from '../components/ToDoList'

const HomeScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <ToDoList />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})