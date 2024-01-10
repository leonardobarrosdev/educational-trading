"use client"

import { usePathname } from "next/navigation"

export function Breadcrumb() {
  return usePathname().split("/").slice(-1)
}