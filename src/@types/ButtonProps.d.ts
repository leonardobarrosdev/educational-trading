import { ButtonHTMLAttributes } from "react"

export type ButtonProps = ButtonHTMLAttributes<T> & {
  title: string
}