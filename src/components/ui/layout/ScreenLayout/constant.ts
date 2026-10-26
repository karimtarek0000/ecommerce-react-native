import { spacing } from '@/constants'
import { scalingMethods } from '@/utils'
const { VS } = scalingMethods

export const TOP_BAR_GAP = VS(20)
export const CONTENT_BOTTOM_GAP = VS(16)

const CONTENT_PADDING_HORIZONTAL = spacing.space24.width

export const SIDE_PADDING = {
  both: { paddingHorizontal: CONTENT_PADDING_HORIZONTAL },
  start: { paddingStart: CONTENT_PADDING_HORIZONTAL },
  end: { paddingEnd: CONTENT_PADDING_HORIZONTAL },
  none: {},
} as const
