import { InfoImage } from './styles'

export const InfoHeroImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <InfoImage>
      <img src={imageUrl} alt="Imagem Comparativo CTA" />
    </InfoImage>
  )
}
