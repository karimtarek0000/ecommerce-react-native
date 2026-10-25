import { TabListProps } from 'expo-router/ui'
import { View } from 'react-native'
import { useStyles } from './useStyles'

const CustomBottomTabs = ({ style, ...rest }: TabListProps) => {
  const styles = useStyles()

  return (
    <View style={[styles.safeArea, style]} {...rest}>
      <View style={styles.tabsWrapper}>{rest.children}</View>
    </View>
  )
}

export default CustomBottomTabs
