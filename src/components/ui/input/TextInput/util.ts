import { StatusTypes } from './types'

export const getCurrentStatusType = (
  errorMessage: string | undefined,
  isFocused: boolean,
  value: string,
): StatusTypes => {
  return errorMessage ? 'error' : isFocused ? 'focused' : value ? 'filled' : 'default'
}
