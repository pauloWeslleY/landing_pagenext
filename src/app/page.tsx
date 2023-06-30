'use client'
import { Header } from '@/components/Header'
import { NavBar } from '@/components/NavBar'
import { CardHero } from '@/components/CardHero'
import { Divider } from '@/components/Divider'

export default function Home() {
  return (
    <main>
      <Header />

      <NavBar />

      <Divider />

      <section>
        <CardHero />
      </section>

      <Divider />
    </main>
  )
}
