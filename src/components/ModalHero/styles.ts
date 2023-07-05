import styled from 'styled-components'

interface ModalIconProps {
  color: string
  background: string
  bg: string
}

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  background-color: ${props => props.theme.colors.zinc._100};

  width: 30rem;
  height: auto;

  display: flex;
  flex-direction: column;

  border-radius: 0.585rem;
  border-top: 3px solid ${props => props.theme.colors.blue._500};
`

export const ModalClose = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.545rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: none;

    font-size: 1.3rem;
    color: ${props => props.theme.colors.zinc._700};

    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      color: ${props => props.theme.colors.blue._700};
    }
  }
`

export const ModalTitle = styled.header`
  padding-inline: 6rem;
  padding-bottom: 1.245rem;

  h3 {
    font-size: 1.3rem;
    line-height: 1.1;
    letter-spacing: -1px;

    span {
      color: ${props => props.theme.colors.blue._600};
    }
  }
`

export const ModalImage = styled.div`
  margin-bottom: 0.895rem;

  > iframe {
    width: 100%;
    object-fit: cover;
  }
`

export const ModalDescription = styled.section`
  padding-inline: 2rem;

  hr {
    margin-block: 0.485rem;
    height: 0.145rem;
    border-color: ${props => props.theme.colors.gray._100};
  }

  h3 {
    font-size: 0.985rem;
    font-weight: 700;
    color: ${props => props.theme.colors.gray._900};
  }

  p {
    margin-bottom: 0.5rem;
    font-weight: 600;

    color: ${props => props.theme.colors.gray._600};
  }
`

export const ModalBoxIcon = styled.div`
  margin-bottom: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.3rem;
  padding: 0.2rem;
`

export const ModalIcon = styled.div<ModalIconProps>`
  color: ${props => props.color};
  font-weight: 600;

  display: flex;
  flex: 1 1 20rem;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.945rem;

    width: 30px;
    height: 27px;
    background-color: ${props => props.bg};
    border-top-left-radius: 0.445rem;
    border-bottom-left-radius: 0.445rem;
  }

  div {
    display: flex;
    align-items: center;

    font-size: 0.745rem;
    padding: 0.4rem;
    height: 27px;
    background-color: ${props => props.background};
    border-top-right-radius: 0.445rem;
    border-bottom-right-radius: 0.445rem;
  }
`
