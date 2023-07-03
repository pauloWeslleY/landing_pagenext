'use client'
import { FooterList } from './FooterList'
import { FooterSocialMedia } from './FooterSocialMedia'
import { FooterBar } from './FooterBar'

import { FooterContainer, FooterLogo, FooterContent } from './styles'

import {
  CASES,
  LINKS_PRINCIPAIS,
  MATERIAIS,
} from './[footer_list_props]/[footer_list_props]'

export const FooterHero = () => {
  return (
    <div>
      <FooterContainer>
        <FooterLogo>
          <img src="/images/logo.png" alt="Logo do Footer" />
          <span>Transformando visitantes em clientes.</span>
        </FooterLogo>

        <FooterContent>
          <FooterList title="Links Principais" list={LINKS_PRINCIPAIS} />
          <FooterList title="Cases" list={CASES} />
          <FooterList title="Materiais" list={MATERIAIS} />

          <FooterSocialMedia title="Siga a Leadster" />
        </FooterContent>
      </FooterContainer>

      <FooterBar />
    </div>
  )
}
