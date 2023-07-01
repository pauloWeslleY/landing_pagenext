'use client'
import { Header } from '@/components/Header'
import { NavBar } from '@/components/NavBar'
import { CardHero } from '@/components/CardHero'
import { Divider } from '@/components/Divider'
import { PaginationHero } from '@/components/Pagination'
import { InfoHero } from '@/components/InfoHero'

export default function Home() {
  return (
    <main>
      <Header />

      <NavBar />

      <Divider />

      <section>
        <CardHero />

        <Divider />

        <PaginationHero allPages={4} currentPage={3} />
      </section>

      <section>
        <InfoHero />
      </section>
    </main>
  )
}
