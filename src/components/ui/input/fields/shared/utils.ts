import { StatusTypes } from './sharedTypes'

export const getCurrentStatusType = (
  value: string,
  isFocused: boolean,
  errorMessage: string | undefined,
): StatusTypes => {
  return errorMessage ? 'error' : isFocused ? 'focused' : value ? 'filled' : 'default'
}
