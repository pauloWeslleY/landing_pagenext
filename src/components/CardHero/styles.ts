import { styled } from 'styled-components'

export const CardContainer = styled.section`
  max-width: 956px;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 1.6rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
`

export const Card = styled.article`
  display: flex;
  flex: 1 1 250px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 1rem;

  -webkit-box-shadow: 1px 1px 10px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 10px 4px rgba(0, 0, 0, 0.1);

  > span {
    font-weight: 800;
    font-size: 0.95rem;

    color: ${props => props.theme.colors.gray._800};
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    padding: 0.8rem;
  }
`

export const CardImage = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`
