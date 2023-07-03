'use client'
import { PageButton } from './PageButton'
import { PaginationContainer } from './styles'

interface PaginationProps {
  allPages: number
}

export const PaginationHero = (props: PaginationProps) => {
  const { allPages } = props
  const pageNumbers: number[] = []

  for (let i = 1; i <= allPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <PaginationContainer>
      <span>Página</span>
      {pageNumbers.map(number => (
        <PageButton key={number} title={number} />
      ))}
    </PaginationContainer>
  )
}
