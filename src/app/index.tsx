import { useState } from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Index() {
  const [title, setTitle] = useState('')

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.one}>
          <Text>This is a paragraph {title}</Text>
        </View>
        <View style={styles.two}>
          <Text>Second div</Text>
        </View>
      </View>
      <Pressable
        style={styles.button1}
        onPress={() => {
          setTitle('This is a title')
          console.log('Clicked on pressable')
        }}
      >
        <Text>Click me</Text>
      </Pressable>
      <TouchableOpacity style={styles.button2} onPress={() => console.log('Clicked on touchable')}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    gap: 10,
    height: 100,
  },
  one: {
    backgroundColor: 'red',
    padding: 5,
  },
  two: {
    backgroundColor: 'orange',
    padding: 5,
  },
  button1: {
    backgroundColor: 'red',
  },
  button2: {
    backgroundColor: 'orange',
  },
})
