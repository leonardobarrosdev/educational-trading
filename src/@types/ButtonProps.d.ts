import { ButtonHTMLAttributes } from "react"

export type ButtonProps = ButtonHTMLAttributes<T> & {
  title: string,
  bgColor?: string,
  className?: string
}

export type ButtonIconProps = ButtonHTMLAttributes<T> & {
  title: string,
  icon: string
}