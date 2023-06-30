import { PageNumber, PaginationContainer } from './styles'

interface PaginationProps {
  allPages: number
  currentPage: number
}

export const PaginationHero = (props: PaginationProps) => {
  const { allPages, currentPage } = props
  const pageNumbers: number[] = []

  for (let i = 1; i <= allPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <PaginationContainer>
      <span>Página</span>
      {pageNumbers.map(number => (
        <PageNumber key={number} isActive={currentPage === number}>
          {number}
        </PageNumber>
      ))}
    </PaginationContainer>
  )
}
