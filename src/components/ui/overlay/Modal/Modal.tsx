import Icon from '@/components/icons/Icon'
import { Typography } from '@/components/ui/display'
import { Modal as ModalNative, Pressable, View } from 'react-native'
import { ModalProps } from './types'
import { useStyles } from './useStyles'

const Modal = ({ headTitle, visible, description, children, closeModal }: ModalProps) => {
  const styles = useStyles()

  return (
    <ModalNative visible={visible} animationType="fade" transparent={true}>
      <View style={styles.backdrop}>
        <View style={styles.wrapperModal}>
          <Pressable onPress={closeModal} style={styles.closeButton}>
            <Icon name="x" size={20} color={styles.icon.color} />
          </Pressable>

          <View style={styles.contentHeader}>
            <Typography
              variant="mediumBold"
              color={styles.headTitle.color}
              textTransform="capitalize"
            >
              {headTitle}
            </Typography>

            <Typography
              variant="smallRegular"
              color={styles.headDesc.color}
              textTransform="capitalize"
            >
              {description}
            </Typography>
          </View>

          <View>{children}</View>
        </View>
      </View>
    </ModalNative>
  )
}

export default Modal
