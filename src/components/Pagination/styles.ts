import { styled } from 'styled-components'

interface PageNumberProps {
  isActive: boolean
}

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  margin-top: 0.7rem;
  margin-bottom: 1rem;

  span {
    font-weight: 800;
    color: ${props => props.theme.colors.gray._800};
  }
`

export const PageNumber = styled.button<PageNumberProps>`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid ${props => (props.isActive ? '#3b82f6' : 'transparent')};
  color: ${props => (props.isActive ? '#3b82f6' : '#1f2937')};
  padding: 5px 10px;
  margin: 0 1px;
  cursor: pointer;

  display: flex;
  align-items: center;

  font-weight: ${props => (props.isActive ? 800 : 600)};

  &:hover {
    background: ${props => props.theme.colors.blue._400};
    color: ${props => props.theme.colors.white};
  }
`
