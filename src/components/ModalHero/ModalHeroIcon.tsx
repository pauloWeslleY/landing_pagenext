import { ElementType } from 'react'
import { ModalIcon } from './styles'

interface ModalHeroIconProps {
  icon: ElementType
  label: string
  color: string
  backgroundColor: string
  bgSpan: string
}

export const ModalHeroIcon = (props: ModalHeroIconProps) => {
  const { icon: Icon, label, color, backgroundColor, bgSpan } = props

  return (
    <ModalIcon color={color} background={backgroundColor} bg={bgSpan}>
      <span>
        <Icon />
      </span>
      <div>{label}</div>
    </ModalIcon>
  )
}
