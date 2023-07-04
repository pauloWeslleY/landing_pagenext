import { ReactNode } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { ModalContainer, ModalContent, ModalClose } from './styles'

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
            <ModalClose>
              <button type="button" onClick={onClose}>
                <AiOutlineClose />
              </button>
            </ModalClose>
            {children}
          </ModalContent>
        </ModalContainer>
      )}
    </>
  )
}

export { ModalHero }
