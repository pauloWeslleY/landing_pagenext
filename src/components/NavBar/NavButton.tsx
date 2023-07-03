import { ButtonHTMLAttributes } from 'react'
import { Button } from './styles'

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export const NavButton = ({ title, ...rest }: NavButtonProps) => {
  return <Button {...rest}>{title}</Button>
}
