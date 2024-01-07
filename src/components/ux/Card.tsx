export default function Card({children}: {children: React.ReactNode}) {
  return (
    <div className="p-10 rounded-md shadow-md">
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}