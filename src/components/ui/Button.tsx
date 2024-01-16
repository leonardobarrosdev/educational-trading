import { ButtonProps } from "@/@types/ButtonProps"

export function Button({title, ...props}: ButtonProps) {
  return (
    <button {...props} className={`${props.bgColor ? props.bgColor : "bg-primary"} ${props.className} text-white text-nowrap text-sm lg:text-base text-semibold px-1 py-1 md:py-2 md:px-3 rounded-md hover:bg-danger`}>{title}</button>
  )
}