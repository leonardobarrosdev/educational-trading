export default function TopNavBar() {
  return (
    <div className="w-full bg-blackBlue py-2.5">
      <nav className="max-w-7xl mx-auto">
        <ul className="md:flex md:justify-between items-center max-md:grid max-md:grid-cols-6 max-md:gap-3">
          <li className="font-bold text-white">OVERVIEW -</li>
          <li className="font-bold text-white">MY ACCOUNTS -</li>
          <li className="font-bold text-white">PAYMENTS TRANSFERS -</li>
          <li className="font-bold text-white">CUSTOMER SERVICE -</li>
        </ul>
      </nav>
    </div>
  )
}