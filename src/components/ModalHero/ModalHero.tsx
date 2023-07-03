import { ReactNode } from 'react'
import { ModalContainer, ModalContent } from './styles'

interface ModalHeroProps {
  onClose: () => void
  isOpen?: boolean
  children: ReactNode
}

const ModalHero = ({ onClose, isOpen, children }: ModalHeroProps) => {
  return (
    <>
      {isOpen && (
        <ModalContainer>
          <ModalContent>
            {children}
            <button onClick={onClose}>Fechar</button>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  )
}

export { ModalHero }
