'use client'
import { Header } from '@/components/Header'
import { NavBar } from '@/components/NavBar'
import { CardHero } from '@/components/CardHero'
import { Divider } from '@/components/Divider'
import { PaginationHero } from '@/components/Pagination'
import { InfoHero } from '@/components/InfoHero'
import { FooterHero } from '@/components/Footer'
import { ModalHero } from '@/components/ModalHero'

export default function Home() {
  return (
    <main>
      <Header />
      <NavBar />

      <ModalHero onClose={() => null}>
        <span>Hello World</span>
      </ModalHero>

      <section>
        <Divider />
        <CardHero />
        <Divider />

        <PaginationHero allPages={4} />
      </section>

      <section>
        <InfoHero />
      </section>

      <footer>
        <FooterHero />
      </footer>
    </main>
  )
}
