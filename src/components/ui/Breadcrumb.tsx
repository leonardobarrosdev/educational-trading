type formatedLinkProps = {
  href: string,
  title: string
}

export function Breadcrumb({asPath: string}: formatedLinkProps[]) {
  const filteredLinksArray = getArrayFromAsPath(asPath)
  // const finalLinksArray = filteredLinksArray.map((_, index, array) => {
  //   const currentLinkArray = array.slice(0, index + 1)
  //   const href = `/${currentLinkArray.join("/")}`
  //   const lastWord = [...currentLinkArray].pop()
  //   const title = capitalizeFirstLatterOfAString(lastWord)
  //   return {
  //     href,
  //     title
  //   }
  // }

  function finalLinksArray(array) {
    const currentLinkArray = array.slice(-1)
  }

  function getArrayFromAsPath(asPath) {
    return asPath.split("/")
  }
  
  return (
    <nav className="divide-x" aria-label="readcrumb">
      {finalLinksArray.map(link) => (
        <ol key={link.href} className="breadcrumb">
          <li className="breadcrumb-item"><a href={link.href}>{link.title}</a></li>
        </ol>
      )}
    </nav>
  )
}