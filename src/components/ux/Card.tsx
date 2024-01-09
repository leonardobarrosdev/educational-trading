export default function Card({children}: {children: React.ReactNode}) {
  return (
    <div className="p-2 rounded-md shadow-md">
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  )
}