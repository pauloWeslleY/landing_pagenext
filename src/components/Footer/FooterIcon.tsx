import { ElementType } from 'react'
import { IconFooter } from './styles'

interface FooterIconProps {
  icon: ElementType
}

export const FooterIcon = ({ icon: Icon }: FooterIconProps) => {
  return (
    <IconFooter href={'/#'}>
      <Icon />
    </IconFooter>
  )
}
