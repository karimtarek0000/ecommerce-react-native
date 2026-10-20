import { radius } from '@/constants'
import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { Sizes } from './type'
const { HS, VS } = scalingMethods

export const useStyles = (size: Sizes) => {
  const colors = useTheme()

  const sizes = {
    sm: {
      width: HS(44),
      height: VS(44),
    },
    md: {
      width: HS(60),
      height: VS(60),
    },
    lg: {
      width: HS(120),
      height: VS(120),
    },
  }

  const styles = StyleSheet.create({
    wrapper: {
      position: 'relative',
    },
    image: {
      width: sizes[size].width,
      height: sizes[size].height,
      borderRadius: radius.full,
    },
    uploader: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: HS(39),
      height: VS(39),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primary.base,
      borderRadius: radius.full,
      borderWidth: HS(3),
      borderColor: colors.background.base,
    },
    icon: {
      color: colors.background.base,
    },
  })

  return styles
}
