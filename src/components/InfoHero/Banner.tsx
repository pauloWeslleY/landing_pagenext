import React from 'react'
import styled from 'styled-components'

const ResponsiveComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

const TextBlock = styled.div`
  padding: 20px;
  background-color: #f1f1f1;
`

const ResponsiveGridComponent = () => {
  return (
    <ResponsiveComponent>
      <Image src="/images/comparativo_img_CTA.png" alt="Imagem" />
      <TextBlock>
        <h2>Título</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
          mattis ullamcorper.
        </p>
      </TextBlock>
    </ResponsiveComponent>
  )
}

export default ResponsiveGridComponent
