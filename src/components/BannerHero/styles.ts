import { styled } from 'styled-components'

export const Banner = styled.div`
  width: 100%;
  height: 35rem;

  background-color: ${props => props.theme.colors.blue._50};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    padding: 0.1rem 0.7rem;
    font-weight: 600;
    color: ${props => props.theme.colors.blue._500};

    border: 2px solid ${props => props.theme.colors.blue._500};
    border-radius: 2rem;
    border-bottom-left-radius: 0.4rem;
  }

  h2 {
    font-size: 2.3rem;
    font-weight: 500;
    color: ${props => props.theme.colors.gray._700};
  }

  hr {
    width: 600px;
    margin-block: 1rem;
    border-color: ${props => props.theme.colors.gray._200};
    border-style: solid;
  }

  p {
    color: ${props => props.theme.colors.gray._700};
    font-weight: 700;

    span {
      font-weight: 900;
    }
  }
`

export const BannerTitle = styled.div`
  position: relative;

  h3 {
    font-size: 4.7rem;
    color: ${props => props.theme.colors.blue._500};
    background: linear-gradient(to right, #3b82f6, #2563eb);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  img {
    position: absolute;
    top: 5px;
    right: -17px;
  }

  small {
    position: absolute;
    bottom: 2px;
    left: 5px;
    font-weight: 700;
    font-size: 0.6rem;
    color: ${props => props.theme.colors.red};
  }
`
