export default function TopNavBar() {
  return (
    <div className="w-full bg-blackBlue py-2.5">
      <nav className="md:max-w-7xl mx-3 sm::mx-auto">
        <ul className="max-sm:grid max-sm:grid-cols-2 flex justify-around lg:justify-between items-center">
          <li className="text-sm md:text-md font-bold text-white">OVERVIEW -</li>
          <li className="text-sm md:text-md font-bold text-white">MY ACCOUNTS -</li>
          <li className="text-sm md:text-md font-bold text-white">PAYMENTS TRANSFERS -</li>
          <li className="text-sm md:text-md font-bold text-white">CUSTOMER SERVICE -</li>
        </ul>
      </nav>
    </div>
  )
}