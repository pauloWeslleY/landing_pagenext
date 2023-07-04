'use client'
import { useCallback, useState } from 'react'
import { BsCloudDownload } from 'react-icons/bs'
import {
  ModalHero,
  ModalHeroTitle,
  ModalHeroDescription,
  ModalHeroImage,
  ModalHeroIcon,
  ModalHeroBoxIcon,
} from '../ModalHero'
import MODAL_PROPS from '../ModalHero/[modal_icon_props]/modal_icons'
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
        <ModalHeroTitle>
          <h3>
            <span>Webinar:</span> Como aumentar sua Geração de Leads feat.
            Traktor
          </h3>
        </ModalHeroTitle>

        <ModalHeroImage>
          <img src="/images/thumbnail.png" alt="Thumbnail" />
        </ModalHeroImage>

        <ModalHeroDescription>
          <h3>Descrição</h3>
          <hr />

          <p>
            At accusam et voluptua sit et sadipscing sanctus dolor dolore
            takimata, tempor dolor sadipscing invidunt magna gubergren. Voluptua
            elitr stet at sed lorem sit labore. Voluptua dolore accusam justo
            ipsum. Consetetur at dolor diam takimata et vero justo vero.
          </p>
          <h3>Downloads</h3>
          <hr />

          <ModalHeroBoxIcon>
            {MODAL_PROPS.map(props => (
              <ModalHeroIcon
                key={`icon-${props.label}`}
                icon={BsCloudDownload}
                label={props.label}
                color={props.color}
                bgSpan={props.bgSpan}
                backgroundColor={props.bg}
              />
            ))}
          </ModalHeroBoxIcon>
        </ModalHeroDescription>
      </ModalHero>
    </>
  )
}
