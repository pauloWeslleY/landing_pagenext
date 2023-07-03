'use client'
import Image from 'next/image'
import { BannerHero } from '../BannerHero'
import { HeaderHero } from './styles'

export const Header = () => {
  return (
    <header>
      <HeaderHero>
        <Image
          src="/images/logo.png"
          alt="logotipo header"
          width={200}
          height={45}
          priority
        />
      </HeaderHero>

      <BannerHero />
    </header>
  )
}
