import { styled } from 'styled-components'

export const NavBarContainer = styled.div`
  /* background-color: ${props => props.theme.colors.zinc._100}; */

  width: 100%;
  max-width: 996px;
  margin: 0 auto;
  margin-top: 3rem;
  height: 45px;

  display: flex;
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
    border-radius: 6px;
  }
`

export const Button = styled.button`
  padding: 0.6rem 0.7rem;
  color: ${props => props.theme.colors.zinc._800};
  background-color: transparent;

  font-size: 0.9rem;
  font-weight: 700;

  border-radius: 3rem;
  border: 1px solid ${props => props.theme.colors.zinc._600};
  cursor: pointer;

  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1px solid ${props => props.theme.colors.blue._600};
    color: ${props => props.theme.colors.blue._600};
  }
`
