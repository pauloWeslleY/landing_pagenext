import { TitleFooter } from './styles'

export const FooterTitle = ({ title }: { title: string }) => {
  return (
    <TitleFooter>
      <h3>{title}</h3>
    </TitleFooter>
  )
}
