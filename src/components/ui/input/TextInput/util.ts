import { StatusTypes } from './type'

export const getCurrentStatusType = (
  errorMessage: string | undefined,
  isFocused: boolean,
  value: string,
): StatusTypes => {
  return errorMessage ? 'error' : isFocused ? 'focused' : value ? 'filled' : 'default'
}
