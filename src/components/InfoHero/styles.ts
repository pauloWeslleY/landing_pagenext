import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 1345px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  column-gap: 1.1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const InfoContainer = styled.div`
  background-color: ${props => props.theme.colors.blue._50};
  padding: 3rem;
  margin-top: 5rem;
`

export const InfoImage = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 42rem;
    height: auto;
    object-fit: cover;
  }
`

export const InfoContent = styled.div`
  padding-block: 10rem;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

export const InfoText = styled.div`
  color: ${props => props.theme.colors.gray._800};

  h2 {
    font-size: 2.5rem;
    font-weight: 500;

    span {
      display: block;
      font-weight: 800;
    }
  }

  p {
    font-weight: 500;
    margin-block: 0.5rem;

    span {
      font-weight: 700;
    }
  }
`
export const InfoDivider = styled.hr`
  width: 35rem;
  margin-top: 0.4rem;
  margin-bottom: 0.1rem;

  border-color: ${props => props.theme.colors.zinc._300};
  border-style: solid;
`

export const Info = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    width: 15rem;
    height: 3.5rem;

    cursor: pointer;

    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;

    border: none;
    border-radius: 5rem;
    background-color: ${props => props.theme.colors.blue._500};
    color: ${props => props.theme.colors.white};

    transition: all 0.4s ease-in-out;

    &:hover {
      background-color: ${props => props.theme.colors.blue._700};
      color: ${props => props.theme.colors.zinc._900};

      opacity: 0.7;
      box-shadow: 1px 1px 15px 3px rgba(0, 0, 0, 0.8);
    }
  }
`

export const InfoFooter = styled.div`
  margin-block: 1rem;

  display: flex;
  gap: 2px;

  > span {
    border: 1px solid ${props => props.theme.colors.zinc._600};
    margin-inline: 0.3rem;
  }
`

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  p {
    color: ${props => props.theme.colors.gray._700};

    font-size: 0.85rem;
    font-weight: 600;

    span {
      font-weight: 800;
    }
  }
`
