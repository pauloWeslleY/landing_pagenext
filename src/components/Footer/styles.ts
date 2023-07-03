import { styled } from 'styled-components'

export const FooterContainer = styled.div`
  max-width: 1220px;
  margin: 0 auto;
`

export const FooterContent = styled.div`
  margin-block: 4rem;

  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;

  @media (min-width: 425x) {
    grid-template-columns: 1fr;
  }
`

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.4rem;

  margin-top: 2rem;

  > span {
    font-size: 0.745rem;
    font-weight: 600;
    color: ${props => props.theme.colors.zinc._400};
  }
`

export const TitleFooter = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme.colors.zinc._700};
  }
`
export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
`

export const List = styled.ul`
  list-style: none;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;

  gap: 1.1rem;
`

export const ListItem = styled.li`
  color: ${props => props.theme.colors.zinc._400};
  font-size: 0.9rem;
`

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-block: 1.3rem;
`

export const FooterLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.787rem;

  p {
    font-size: 0.95rem;
    font-weight: 600;

    color: ${props => props.theme.colors.zinc._700};

    span {
      color: ${props => props.theme.colors.gray._400};
    }
  }
`

export const IconFooter = styled.a`
  background-color: ${props => props.theme.colors.zinc._100};
  color: ${props => props.theme.colors.zinc._500};

  font-size: 1.1rem;

  border-radius: 55%;
  padding: 1.1rem;

  transition: all 0.4s ease-in-out;

  &:hover {
    opacity: 0.7;
    color: ${props => props.theme.colors.blue._700};
    background-color: ${props => props.theme.colors.gray._500};
  }
`

export const FooterBarContent = styled.footer`
  border-top: 1px solid ${props => props.theme.colors.zinc._200};

  div {
    max-width: 1220px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-block: 2rem;

    p {
      font-weight: 500;
      color: ${props => props.theme.colors.zinc._500};

      span {
        font-weight: 600;
        color: ${props => props.theme.colors.blue._400};
      }
    }

    small {
      font-size: 0.895rem;
      color: ${props => props.theme.colors.zinc._400};
    }
  }
`
