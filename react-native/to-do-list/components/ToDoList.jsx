import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

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

    const newItem = {
      id: Date.now(),
      text: inputText
    }

    setToDoList([
      ...toDoList,
      newItem
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
      item.id === editId ? {...item, text: editText} : item
    ))
    setEditId(null)
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>

      <View>
        <TextInput 
          style={styles.input}
          value={inputText}
          onChangeText={handleChange}
          onSubmitEditing={handleAdd}
          submitBehavior='submit'
          returnKeyType='done'
          placeholder='+ Add a Task'
        />

        <FlatList 
          data={toDoList}
          keyExtractor={(item) => String(item.id)}
          style={styles.listContainer}
          renderItem={({item, index}) => (
            <View 
              style={[
                styles.itemContainer, 
                index === toDoList.length - 1 && { borderBottomWidth: 0 }]}>
              <View style={styles.item}>
                {editId === item.id ? (
                  <TextInput 
                    value={editText}
                    onChangeText={(text) => {
                      if (text.includes('\n')) {
                        handleEditDone()
                        return
                      }
                      setEditText(text)
                    }}
                    onSubmitEditing={handleEditDone}
                    submitBehavior='submit'
                    autoFocus
                    style={styles.editInput}
                  />
                ) : (
                  <Text style={styles.text}>{item.text}</Text>
                )}
              </View>
              
              <TouchableOpacity onPress={() => handleEditStart(item)}>
                <MaterialIcons name='edit' size={20} />
              </TouchableOpacity>
             
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <MaterialIcons name='delete-outline' size={20} />
              </TouchableOpacity>
             
            </View>
          )}
        />
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
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 42, 
    marginBottom: 12,
  },
  listContainer: {
    borderWidth: 3,
    borderColor: '#aaa',
    borderRadius: 4,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 50, 
    borderBottomWidth: 3,
    borderBottomColor: '#aaa',
    gap: 10
  },
  item: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  text: {
    fontSize: 15,
  },
  editInput: {
    fontSize: 15,
    flex: 1,
    textAlignVertical: 'center',
  },
})