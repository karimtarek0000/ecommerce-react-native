import { View, ViewProps } from 'react-native'
import { useStyles } from './useStyles'

const CustomBottomTabs = ({ style, ...rest }: ViewProps) => {
  const styles = useStyles()

  return (
    <View style={styles.safeAreaView}>
      <View style={[styles.tabsWrapper, style]} {...rest} />
    </View>
  )
}

export default CustomBottomTabs
