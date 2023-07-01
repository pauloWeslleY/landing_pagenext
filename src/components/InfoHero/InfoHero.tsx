'use client'
import {
  Info,
  InfoContainer,
  InfoImage,
  InfoContent,
  InfoText,
  InfoDivider,
  InfoBox,
  InfoFooter,
  Container,
} from './styles'

export const InfoHero = () => {
  return (
    <InfoContainer>
      <Container>
        <InfoImage>
          <img src="/images/comparativo_img_CTA.png" alt="Imagem" />
        </InfoImage>
        <InfoContent>
          <InfoText>
            <h2>
              Pronto para triplicar sua<span>Geração de Leads?</span>
            </h2>
            <p>
              Criação a ativação em <span>4 minutos</span>.
            </p>
          </InfoText>
          <InfoDivider />
          <Info>
            <button>ver demonstração</button>
            <img src="/images/selo_RD.png" alt="Logotipo da seção" />
          </Info>

          <InfoFooter>
            <InfoBox>
              <img src="/images/no-card-dark.webp" alt="" />
              <p>
                <span>Não</span> é necessário Cartão de Crédito
              </p>
            </InfoBox>
            <span />
            <InfoBox>
              <img src="/images/rating.webp" alt="" />
              <p>
                <span>4.9</span>/5 média de satisfação
              </p>
            </InfoBox>
          </InfoFooter>
        </InfoContent>
      </Container>
    </InfoContainer>
  )
}
