import { ButtonProps } from "@/@types/ButtonProps"

export function Button({title, ...props}: ButtonProps) {
  return (
    <button className="bg-primary text-white py-2.5 px-5 rounded-lg">{title}</button>
  )
}