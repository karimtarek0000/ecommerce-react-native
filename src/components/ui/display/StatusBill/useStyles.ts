import { radius, spacing } from '@/constants'
import { useTheme } from '@/hooks'
import { TypographyVariant } from '@/types'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { Sizes } from '../Avatar/types'
import { StatusBillProps } from './types'
const { HS } = scalingMethods

export const useStyles = ({
  status,
  size,
  variant,
}: Omit<StatusBillProps, 'iconName' | 'label'>) => {
  const colors = useTheme()

  const statusSizes = {
    sm: {
      paddingHorizontal: spacing.space12.width,
      paddingVertical: spacing.space4.height,
    },
    lg: {
      paddingHorizontal: spacing.space16.width,
      paddingVertical: spacing.space8.height,
    },
  }

  const statusVariant: Record<typeof status, string> = {
    pending: colors.warning.base,
    onProgress: colors.primary.base,
    cancelled: colors.danger.base,
    complete: colors.success.strong,
  }

  const fontsSizes: Record<Exclude<Sizes, 'md'>, TypographyVariant> = {
    sm: 'xsmallBold',
    lg: 'smallBold',
  } as const

  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: HS(1),
      borderColor: variant === 'outline' ? statusVariant[status] : 'transparent',
      backgroundColor: variant === 'outline' ? colors.background.base : statusVariant[status],
      paddingHorizontal: statusSizes[size ?? 'lg'].paddingHorizontal,
      paddingVertical: statusSizes[size ?? 'lg'].paddingVertical,
      borderRadius: radius.full,
      gap: HS(4),
    },
    other: {
      color: variant === 'outline' ? statusVariant[status] : colors.forground.contrast,
    },
  })

  return { styles, fontsSizes }
}
