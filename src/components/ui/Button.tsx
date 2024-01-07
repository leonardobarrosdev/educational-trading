import { ButtonProps } from "@/@types/ButtonProps"

export function Button({title, ...props}: ButtonProps) {
  return (
    <button {...props} className="bg-primary text-white py-2 px-3 rounded-md hover:bg-danger">{title}</button>
  )
}