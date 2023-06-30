'use client'
import Image from 'next/image'
import { HeaderHero, BannerHero, HeroTitle } from './styles'

export const Header = () => {
  return (
    <header>
      <HeaderHero>
        <Image src="/images/logo.png" alt="" width={200} height={45} priority />
      </HeaderHero>

      <BannerHero>
        <span>Webinars Exclusivos</span>
        <h2>Menos Conversinha,</h2>

        <HeroTitle>
          <h3>Mais Conversão</h3>
          <img src="/images/asset-header.png" alt="Logotipo" />
          <small>#2c83fb{'->'}#1f76f0 (-45º)</small>
        </HeroTitle>

        <hr />

        <p>
          Conheça as estratégias que <span>mudaram o jogo</span> e como
          aplicá-las no seu negócio
        </p>
      </BannerHero>
    </header>
  )
}
