import { Typography } from '@/components/ui/display'
import { FieldErrorProps } from './sharedTypes'
import { useSharedStyles } from './useSharedStyles'

const FieldErrorMessage = ({ errorMessage }: FieldErrorProps) => {
  const styles = useSharedStyles()

  if (!errorMessage) return null

  return (
    <Typography variant="xsmallRegular" style={styles.errorMessage}>
      {errorMessage}
    </Typography>
  )
}

export default FieldErrorMessage
