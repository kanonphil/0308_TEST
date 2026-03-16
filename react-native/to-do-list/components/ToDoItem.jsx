import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const ToDoItem = ({ 
  item, 
  isEditing, 
  editText, 
  onEditTextChange, 
  onEditStart, 
  onEditDone, 
  onEditCancel, 
  onDelete,
}) => {
  return (
    <View style={styles.itemContainer}>
      {isEditing ? (
        <TextInput 
          value={editText}
          onChangeText={(text) => {
            if (text.includes('\n')) {
              onEditDone()
              return
            }
            onEditTextChange(text)
          }}
          onSubmitEditing={onEditDone}
          submitBehavior='submit'
          autoFocus
          style={styles.editInput}
          onBlur={onEditCancel}
        />
      ) : (
        <>
          <Text style={styles.text}>{item.text}</Text>
          <Pressable 
            onPress={() => onEditStart(item)}
            style={({pressed}) => pressed && styles.pressed}
          >
            <MaterialIcons name='edit' size={20} />
          </Pressable>

          <Pressable 
            onPress={() => onDelete(item.id)}
            style={({pressed}) => pressed && styles.pressed}
          >
            <MaterialIcons name='delete-outline' size={20} />
          </Pressable>
        </>
      )}
    </View>
  )
}

export default ToDoItem

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 50,
    backgroundColor: '#eeeeee',
    gap: 10,
    flexShrink: 0
  },
  text: {
    flex: 1,
    fontSize: 15,
  },
  editInput: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#888',
    fontSize: 15,
    backgroundColor: '#eeeeee'
  },
  pressed: {
    opacity: 0.5
  }
})
