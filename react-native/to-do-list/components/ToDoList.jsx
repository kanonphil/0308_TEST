import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import ToDoInput from './ToDoInput'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  const [inputText, setInputText] = useState('')
  const [toDoList, setToDoList] = useState([])
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  const handleChange = (text) => {
    if (text.includes('\n')) {
      handleAdd()
      return
    }
    setInputText(text)
  }

  const handleAdd = () => {
    if (inputText.trim() === '') return

    const idList = toDoList.map(item => item.id)

    const newData = {
      id: toDoList.length > 0 ? Math.max(...idList) + 1 : 1,
      text: inputText
    }
    
    setToDoList([
      ...toDoList, 
      newData
    ])
    setInputText('')
  }

  const handleDelete = (id) => {
    setToDoList(toDoList.filter((item) => item.id !== id))
  }

  const handleEditStart = (item) => {
    setEditId(item.id)
    setEditText(item.text)
  }

  const handleEditDone = () => {
    setToDoList(toDoList.map((item) => 
      item.id === editId 
      ? {
          ...item, 
          text: editText
        } 
      : item
    ))
    setEditId(null)
  }

  const handleEditCancel = () => {
    setEditId(null)
    setEditText('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>

      <View>
        <ToDoInput 
          inputText={inputText}
          onChangeText={handleChange}
          onAdd={handleAdd}
        />

        {toDoList.length === 0 ? (
          <View>
            <Text 
              style={{ 
                textAlign: 'center', 
                color: '#555', 
                marginVertical: 12,
              }}
            >
              리스트를 추가해주세요
            </Text>
          </View>
        ) : (
          <FlatList 
            data={toDoList}
            keyExtractor={(item) => String(item.id)}
            scrollEnabled={false}
            keyboardShouldPersistTaps='handled'
            renderItem={({item}) => (
              <ToDoItem 
                item={item}
                isEditing={editId === item.id}
                editText={editText}
                onEditTextChange={setEditText}
                onEditStart={handleEditStart}
                onEditDone={handleEditDone}
                onEditCancel={handleEditCancel}
                onDelete={handleDelete}
              />
            )}
            contentContainerStyle={{
              gap: 10,
              backgroundColor: '#dddddd',
              padding: 10,
              borderRadius: 4,
            }}
          />
        )}
      </View>
    </View>
  )
}

export default ToDoList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    marginHorizontal: 'auto'
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginVertical: 12,
  },
})
