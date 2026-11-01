import { personImage } from '@/assets/images'
import { Avatar } from '@/components/ui/display'
import { Button, TextInput } from '@/components/ui/input'
import useTranslations from '@/hooks/useTranslations'
import { View } from 'react-native'
import { useStyles } from './useStyles'

const EditProfile = () => {
  const { t } = useTranslations()
  const styles = useStyles()

  return (
    <>
      <Avatar imgSrc={personImage} enableUploader size="lg" />

      {/* Form */}
      <View style={styles.form}>
        <TextInput
          label={t('auth_fieldUserName')}
          placeholder={t('auth_placeholderUserName')}
          value=""
          iconName="user"
          onChange={() => {}}
        />
        <TextInput
          label={t('auth_fieldEmail')}
          placeholder={t('auth_placeholderEmail')}
          value=""
          iconName="mail"
          onChange={() => {}}
        />
        <TextInput
          label={t('account_profileFieldPhone')}
          placeholder="+1 234 567 890"
          value=""
          iconName="phone"
          onChange={() => {}}
        />
        <TextInput
          label={t('account_profileFieldConfirmPassword')}
          placeholder={t('account_placeholderPasswordToConfirm')}
          value=""
          iconName="user"
          onChange={() => {}}
        />
      </View>
      <Button title="save changes" onPress={() => {}} style={styles.submitBTN} />
    </>
  )
}

export default EditProfile
