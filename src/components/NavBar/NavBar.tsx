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
        <select>
          <option value="option1">Data de Publicação </option>
          <option value="option2">Data de Publicação 2</option>
          <option value="option3">Data de Publicação 3</option>
        </select>
      </SelectHero>
    </NavBarContainer>
  )
}
