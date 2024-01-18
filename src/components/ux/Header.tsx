export default function Header() {
  return (
    <header className="w-full items-center bg-white">
      <div className="max-lg:mx-3 lg:mx-auto lg:max-w-7xl">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12 py-4">
            <h1 className="text-xl md:text-2xl weight-400 font-semibold">Brand</h1>
          </div>
          <div className="flex items-center gap-x-2 md:gap-x-3">
            <ul className="min-md:hidden flex max-md:flex-col justify-between md:divide-x max-md:divide-y divide-blackBlue">
              <li className="md:text-center">
                <a href="#" className="md:mx-3 md:my-0 my-3 hover:text-danger">About Link</a>
              </li>
              <li className="md:text-center">
                <a href="#" className="md:mx-3 md:my-0 my-3 hover:md:text-danger">Email Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}