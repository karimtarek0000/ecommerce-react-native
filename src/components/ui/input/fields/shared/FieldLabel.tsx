import { Typography } from '@/components/ui/display'
import { FieldLabelProps } from './sharedTypes'
import { useSharedStyles } from './useSharedStyles'

const FieldLabel = ({ label }: FieldLabelProps) => {
  const styles = useSharedStyles()

  return (
    <Typography variant="normalBold" style={styles.label}>
      {label}
    </Typography>
  )
}

export default FieldLabel
