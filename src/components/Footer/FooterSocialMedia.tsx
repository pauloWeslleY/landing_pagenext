import { IconType } from 'react-icons'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FooterIcon } from './FooterIcon'
import { FooterTitle } from './FooterTitle'

import { SocialLinks, FooterLabel } from './styles'

interface IconsProps {
  icon: IconType
}

export const FooterSocialMedia = ({ title }: { title: string }) => {
  const ICON: Array<IconsProps> = [
    { icon: FaLinkedinIn },
    { icon: FaFacebookF },
    { icon: FaInstagram },
  ]

  return (
    <div>
      <FooterTitle title={title} />

      <SocialLinks>
        {ICON.map(props => (
          <FooterIcon key={`icon-${props.icon}`} icon={props.icon} />
        ))}
      </SocialLinks>

      <FooterLabel>
        <p>
          E-mail: <span>contato@leadster.com.br</span>
        </p>
        <p>
          Telefone: <span>(42) 98828-9851</span>
        </p>
      </FooterLabel>
    </div>
  )
}
