import { CardTopProps } from "@/@types/CardProps"

export function CardTop({title, ...props}: CardTopProps) {
  return (
    <div className="w-full bg-grayLight rounded-t-md max-h-10">
      <div className="flex items-center justify-between px-2 py-2">
        <div className="flex items-center gap-2 text-md">
          <span className="material-symbols-outlined text-primary">{props.titleIcon}</span>
          <h2 className="text-md font-bold text-blackBlue">{title}</h2>
        </div>
        <div className="flex">
          <span className="material-symbols-outlined text-primary">{props.removeIcon ? "remove" : ""}</span>
          <span className="material-symbols-outlined text-primary">{props.closeIcon ? "close" : ""}</span>
        </div>
      </div>
    </div>
  )
}