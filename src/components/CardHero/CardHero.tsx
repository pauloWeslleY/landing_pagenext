'use client'
import { CardHeroItem } from './CardHeroItem'
import { cards } from './[cards_props]/card_props.json'

import { CardContainer } from './styles'

export const CardHero = () => {
  return (
    <CardContainer>
      {cards.map(card => (
        <CardHeroItem key={`card-${card.id}`} card={card} />
      ))}
    </CardContainer>
  )
}
