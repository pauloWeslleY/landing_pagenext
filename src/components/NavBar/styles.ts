import { styled } from 'styled-components'

export const NavBarContainer = styled.div`
  width: 100%;
  max-width: 996px;
  margin: 0 auto;
  margin-top: 3rem;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  nav {
    display: flex;
    gap: 8px;

    justify-content: center;
  }
`

export const SelectHero = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  > span {
    font-weight: 600;
  }

  > select {
    padding: 0.4rem 0.6rem;
    color: ${props => props.theme.colors.gray._700};
    font-weight: 600;
    border-radius: 8px;
  }
`

export const Button = styled.button`
  padding-inline: 0.8rem;
  height: 2rem;
  color: ${props => props.theme.colors.zinc._800};
  background-color: transparent;

  font-size: 0.9rem;
  font-weight: 600;

  border-radius: 2rem;
  border: 1px solid ${props => props.theme.colors.zinc._600};
  cursor: pointer;

  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1px solid ${props => props.theme.colors.blue._400};
    color: ${props => props.theme.colors.blue._600};
  }
`
