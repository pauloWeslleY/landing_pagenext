'use client'
import { InfoHeroFooter } from './InfoHeroFooter'
import { InfoHeroImage } from './InfoHeroImage'
import { InfoHeroText } from './InfoHeroText'
import {
  Info,
  InfoContainer,
  InfoContent,
  InfoDivider,
  Container,
} from './styles'

export const InfoHero = () => {
  return (
    <InfoContainer>
      <Container>
        <InfoHeroImage imageUrl="/images/comparativo_img_CTA.png" />
        <InfoContent>
          <InfoHeroText />

          <InfoDivider />
          <Info>
            <button>ver demonstração</button>
            <img src="/images/selo_RD.png" alt="Logotipo da seção" />
          </Info>

          <InfoHeroFooter imageUrl="/images/no-card-dark.webp" />
        </InfoContent>
      </Container>
    </InfoContainer>
  )
}
