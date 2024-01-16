import { ButtonProps } from "@/@types/ButtonProps"

export function HighlightButton({title, ...props}: ButtonProps) {
  return (
    <button {...props} className="text-base lg:text-lg bg-danger text-white rounded-md py-2 px-4 hover:bg-primary">{title}</button>
  )
}