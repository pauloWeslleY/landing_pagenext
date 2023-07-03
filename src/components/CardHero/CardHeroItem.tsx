'use client'
import { useCallback, useState } from 'react'
import { ModalHero } from '../ModalHero'
import { Card, CardImage } from './styles'

export const CardHeroItem = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return (
    <>
      <Card>
        <CardImage onClick={handleOpenModal}>
          <img src="/images/thumbnail.png" alt="Thumbnail" />
        </CardImage>
        <span>Como aumentar sua Geração de Leads feat. Traktor</span>
      </Card>

      <ModalHero isOpen={isModalOpen} onClose={handleCloseModal}>
        <span>Hello World</span>
      </ModalHero>
    </>
  )
}
