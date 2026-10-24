import Icon from '@/components/icons/Icon'
import { Typography } from '@/components/ui/display'
import { BottomSheet, BottomSheetRef } from '@/components/ui/overlay'
import { useRef, useState } from 'react'
import { Keyboard, Pressable } from 'react-native'
import FieldWrapper from '../shared/FieldWrapper'
import { useSharedStyles } from '../shared/useSharedStyles'
import { getCurrentStatusType } from '../shared/utils'
import DropdownOptions from './DropdownOptions'
import { DropdownProps } from './types'

const Dropdown = ({
  label,
  placeholder = 'Select Type',
  value,
  options,
  iconName,
  errorMessage,
  style,
  onSelect,
}: DropdownProps) => {
  const styles = useSharedStyles()
  const [isOpen, setIsOpen] = useState(false)
  const bottomSheetRef = useRef<BottomSheetRef>(null)

  const selectedOption = options.find(option => option.value === value)?.value

  const currentStatusInput = getCurrentStatusType(selectedOption ?? '', isOpen, errorMessage)

  const openBottomSheetHandler = () => {
    Keyboard.dismiss()
    setIsOpen(true)
    bottomSheetRef.current?.expand()
  }

  const selectHandler = (val: string) => {
    bottomSheetRef.current?.close()
    setIsOpen(false)
    onSelect(val)
  }

  return (
    <Pressable onPress={openBottomSheetHandler} style={styles.selectWrapper}>
      <FieldWrapper
        label={label}
        errorMessage={errorMessage}
        iconName={iconName}
        currentStatusInput={currentStatusInput}
        style={style}
      >
        <Typography
          variant="smallRegular"
          numberOfLines={1}
          ellipsizeMode="tail"
          color={selectedOption ? styles.selectTextValue.color : styles.selectTextEmpty.color}
          style={styles.selectText}
        >
          {selectedOption ?? placeholder}
        </Typography>

        <Icon
          name={isOpen ? 'chevronUp' : 'chevronDown'}
          size={20}
          color={styles.iconAction.color}
        />

        <BottomSheet
          ref={bottomSheetRef}
          headTitle=" Bottom Sheet Title"
          description="Optional secondary description below the title"
          bottomSheetProps={{
            snapPoints: ['50%'],
            onClose: () => setIsOpen(false),
          }}
        >
          <BottomSheet.ScrollView>
            <DropdownOptions
              options={options}
              value={selectedOption ?? ''}
              onSelect={selectHandler}
            />
          </BottomSheet.ScrollView>
        </BottomSheet>
      </FieldWrapper>
    </Pressable>
  )
}

export default Dropdown
