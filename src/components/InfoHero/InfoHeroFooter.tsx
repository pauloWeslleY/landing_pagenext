import { InfoBox, InfoFooter } from './styles'

interface InfoHeroFooterProps {
  imageUrl: string
}

export const InfoHeroFooter = ({ imageUrl }: InfoHeroFooterProps) => (
  <InfoFooter>
    <InfoBox>
      <img src={imageUrl} alt="Card Logo" />
      <p>
        <span>Não</span> é necessário Cartão de Crédito
      </p>
    </InfoBox>
    <span />
    <InfoBox>
      <img src="/images/rating.webp" alt="Rating Logo" />
      <p>
        <span>4.9</span>/5 média de satisfação
      </p>
    </InfoBox>
  </InfoFooter>
)
