import { ButtonHTMLAttributes } from "react"

export type ButtonProps = ButtonHTMLAttributes<T> & {
  title: string
}

export type ButtonIconProps = ButtonHTMLAttributes<T> & {
  title: string,
  icon: string
}