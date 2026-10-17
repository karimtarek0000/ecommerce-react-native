import { Typography } from '@/components/ui/display'
import { useStyles } from './useStyles'

const TextInputErrorMessage = ({ errorMessage }: { errorMessage?: string }) => {
  const styles = useStyles()

  if (!errorMessage) return null

  return (
    <Typography
      variant="xsmallRegular"
      color={styles.errorMessage.color}
      style={{ marginTop: styles.errorMessage.marginTop }}
    >
      {errorMessage}
    </Typography>
  )
}

export default TextInputErrorMessage
