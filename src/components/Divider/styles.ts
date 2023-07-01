import { styled } from 'styled-components'

export const DividerHero = styled.div`
  max-width: 925px;
  margin: 0 auto;
  border-bottom: 2px solid ${props => props.theme.colors.zinc._200};

  div {
    margin-top: 1rem;
  }
`
