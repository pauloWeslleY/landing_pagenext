import { FooterTitle } from './FooterTitle'
import { ContainerList, List, ListItem } from './styles'

interface FooterListProps {
  title: string
  list: {
    label: string
  }[]
}

export const FooterList = ({ title, list }: FooterListProps) => {
  return (
    <ContainerList>
      <FooterTitle title={title} />

      <List>
        {list.map(item => (
          <ListItem key={`item-${item.label}`}>{item.label}</ListItem>
        ))}
      </List>
    </ContainerList>
  )
}
