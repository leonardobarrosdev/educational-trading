import { ButtonProps } from "@/@types/ButtonProps"

export function Button({title, ...props}: ButtonProps) {
  return (
    <button {...props} className={`${props.bgColor ? props.bgColor : "bg-primary"} ${props.className} text-white text-sm md:text-base px-1 py-1/4 md:py-2 md:px-3 rounded-md hover:bg-danger`}>{title}</button>
  )
}