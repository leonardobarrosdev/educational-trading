import "material-symbols"
import { CardTopProps } from "@/@types/CardProps"

export function CardTop({title, ...props}: CardTopProps) {
  return (
    <div className="w-full bg-grayLight rounded-t-md">
      <div className="flex items-center justify-between px-11">
        <div className="flex justify-around items-center">
          <span className="material-symbols-outlined">{props.titleIcon}</span>
          <h2 className="text-2xl">{title}</h2>
        </div>
        <>
          <div className="flxe">
            <span className="material-symbols-outlined">{props.removeIcon ? "remove" : ""}</span>
            <span className="material-symbols-outlined">{props.closeIcon ? "close" : ""}</span>
          </div>
        </>
      </div>
    </div>
  )
}