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

interface CardHeroItemProps {
  title: string
  imageUrl: string
  description: string
  videoURL: string
}

interface CardsProps {
  card: CardHeroItemProps
}

export const CardHeroItem = ({ card }: CardsProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { title, description, imageUrl, videoURL } = card

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
          <img src={imageUrl} alt="Thumbnail" />
        </CardImage>
        <span>{title}</span>
      </Card>

      <ModalHero isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalHeroTitle>
          <h3>
            <span>Webinar:</span> {title}
          </h3>
        </ModalHeroTitle>

        <ModalHeroImage>
          <iframe
            title={title}
            height="315"
            src={videoURL}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </ModalHeroImage>

        <ModalHeroDescription>
          <h3>Descrição</h3>
          <hr />

          <p>{description}</p>
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
