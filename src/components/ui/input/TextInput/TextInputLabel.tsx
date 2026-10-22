import { Typography } from '@/components/ui/display'
import { useStyles } from './useStyles'

const TextInputLabel = ({ label }: { label: string }) => {
  const styles = useStyles()

  return (
    <Typography variant="normalBold" style={{ ...styles.label }}>
      {label}
    </Typography>
  )
}

export default TextInputLabel
