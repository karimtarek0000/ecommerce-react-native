import Icon from '@/components/icons/Icon'
import { useState } from 'react'
import { Pressable, View } from 'react-native'
import Animated, { LinearTransition } from 'react-native-reanimated'
import { Typography } from '../../display'
import { AccordionProps } from './types'
import { useStyles } from './useStyles'

const Accordion = ({ items, currentId = 1 }: AccordionProps) => {
  const styles = useStyles()
  const [itemId, setItemId] = useState(currentId)

  const itemHandler = (id: number) => {
    if (id === itemId) {
      setItemId(0)
    } else {
      setItemId(id)
    }
  }

  return (
    <>
      {items.map(item => {
        const currentId = item.id === itemId

        return (
          <Pressable key={item.id} onPress={() => itemHandler(item.id)} style={styles.item}>
            <View style={styles.wrapper}>
              <View style={styles.head}>
                <Typography variant="smallBold" style={styles.title}>
                  {item.title}
                </Typography>

                <Icon name={currentId ? 'chevronUp' : 'chevronDown'} color={styles.icon.color} />
              </View>

              <Animated.View
                layout={LinearTransition.springify()}
                style={[styles.textBodyWrapper, [currentId && styles.textBodyWrapperActive]]}
              >
                <Typography variant="xsmallRegular" style={styles.textBody}>
                  {item.textBody}
                </Typography>
              </Animated.View>
            </View>
          </Pressable>
        )
      })}
    </>
  )
}

export default Accordion
