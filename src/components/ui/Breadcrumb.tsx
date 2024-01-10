"use client"

import { usePathname } from "next/navigation"

export function Breadcrumb() {
  const asPath = usePathname().split("/").slice(-1)

  return (
    <p className="text-md">{asPath}</p>
  )
}