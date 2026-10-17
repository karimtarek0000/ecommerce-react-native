import { Typography } from '@/components/ui/display'
import { useStyles } from './useStyles'

const TextInputLabel = ({ label }: { label?: string }) => {
  const styles = useStyles()

  return (
    <Typography
      variant="normalBold"
      color={styles.label.color}
      style={{ marginBottom: styles.label.marginBottom }}
    >
      {label}
    </Typography>
  )
}

export default TextInputLabel
