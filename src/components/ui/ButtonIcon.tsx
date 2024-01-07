import { ButtonIconProps } from "@/@types/ButtonProps"

export function ButtonIcon({title, icon, ...props}: ButtonIconProps) {
  return (
    <div className="flex items-center justify-center gap-1">
      <span className="materialsymbols-outled" style={{transform: "rotate(90deg)"}}>{icon}</span>
      <button {...props} className="bg-primary text-white py-2 px-3 rounded-md hover:bg-danger">{title}</button>
    </div>
  )
}