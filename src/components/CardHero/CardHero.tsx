'use client'
import { useMemo } from 'react'
import { CardHeroItem } from './CardHeroItem'

import { CardContainer } from './styles'

interface CardHeroProps {
  cards: {
    id: number
    title: string
    description: string
    imageUrl: string
    videoURL: string
  }[]
}

export const CardHero = ({ cards }: CardHeroProps) => {
  const CARDS = useMemo(() => {
    const data = cards.map(props => {
      return {
        cardId: props.id,
        title: props.title,
        description: props.description,
        imageUrl: props.imageUrl,
        videoUrl: props.videoURL,
      }
    })

    return data
  }, [cards])

  return (
    <CardContainer>
      {CARDS.map(card => (
        <CardHeroItem key={`card-${card.cardId}`} card={card} />
      ))}
    </CardContainer>
  )
}
