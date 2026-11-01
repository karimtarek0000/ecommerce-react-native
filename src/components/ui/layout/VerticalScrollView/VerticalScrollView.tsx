import { ScrollView, StyleSheet } from 'react-native'
import { VerticalScrollViewProps } from './type'

const VerticalScrollView = ({ children, ...props }: VerticalScrollViewProps) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.contentContainer, props.contentContainerStyle]}
      {...props}
    >
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
})

export default VerticalScrollView
