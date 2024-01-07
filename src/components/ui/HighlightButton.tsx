import { ButtonProps } from "@/@types/ButtonProps"

export function HighlightButton({title, ...props}: ButtonProps) {
  return (
    <button {...props} className="bg-danger text-white rounded-md text-lg py-2 px-4 hover:bg-primary">{title}</button>
  )
}