import { StyleSheet, TextInput } from 'react-native'

const ToDoInput = ({
  inputText, 
  onChangeText, 
  onAdd
}) => {
  return (
    <TextInput 
      style={styles.input}
      value={inputText}
      onChangeText={onChangeText}
      onSubmitEditing={onAdd}
      submitBehavior='submit'
      returnKeyType='done'
      placeholder='+ Add a Task'
    />
  )
}

export default ToDoInput

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 42, 
    marginBottom: 12,
  },
})