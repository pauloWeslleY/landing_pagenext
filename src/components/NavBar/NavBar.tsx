'use client'
import { NavButton } from './NavButton'
import { NavBarContainer, SelectHero } from './styles'

export const NavBar = () => {
  const MENU: Array<string> = [
    'Agências',
    'Chatbot',
    'Marketing Digital',
    'Geração de Leads',
    'Mídia Paga',
  ]

  return (
    <NavBarContainer>
      <nav>
        {MENU.map((props, index) => (
          <NavButton key={index} title={props} />
        ))}
      </nav>

      <SelectHero>
        <span>Ordenar por</span>
        <select name="value">
          <option value="value">Data de Publicação</option>
        </select>
      </SelectHero>
    </NavBarContainer>
  )
}
