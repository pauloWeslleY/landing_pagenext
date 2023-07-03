'use client'
import { ButtonHTMLAttributes } from 'react'
import { BtnPage } from './styles'

interface PageButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: any
  isActive?: boolean
}

export const PageButton = (props: PageButtonProps) => {
  const { title, isActive = false, ...rest } = props

  return (
    <BtnPage {...rest} active={isActive.toString()}>
      {title}
    </BtnPage>
  )
}
