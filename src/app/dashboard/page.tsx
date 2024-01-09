"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"

import Header from "@components/ux/Header"
import TopNavBar from "@components/ux/TopNavBar"
import Card from "@components/ux/Card"
import { Button } from "@components/ui/Button"
import { CardTop } from "@/components/ux/CardTop"
import { Calendar } from "@components/ux/Calendar"

export default function Dashboard() {
  const asPath = usePathname().split("/").slice(-1)

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <TopNavBar />
      <section className="mx-auto max-w-7xl my-10">
        <div className="flex gap-x-6">
          <div className="grid gap-y-3">
            <div className="flex gap-x-3">
              <span className="material-symbols-outlined">lock</span>
              <h3 className="tex-2xl text-blackBlue">WELCOME BACK</h3>
            </div>
            <p>ARCHIT JAN</p>
            <div className="flex gap-x-3">
              <Button title="LOG OUT" bgColor="bg-blackBlue" />
              <Button title="MY PROFILE" />
            </div>
            <p className="text-sm">Los visibled 24-15-2023 14:43:08 H</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-md">{asPath}</p>
            <hr className="px-2xl" />
          </div>
        </div>
        <section className="grid grid-cols-5 gap-4">
          <div></div>
          <div className="grid col-span-2">
            <h1 className="text-2xl text-blackBlue">My View</h1>
          </div>
          <div className="grid col-span-2">
            <div className="col-start-2">
              <p className="text-xl text-danger text-right">Restore dashboard</p>
            </div>
          </div>
          <div className="">
            <CardTop title="MY SHORTCUTS" titleIcon="star" removeIcon={true} closeIcon={true} />
            <Card>
              <div>
                <ul className="grid gap-y-3">
                  <li>Rechange</li>
                  <li>Payments</li>
                  <li>Transfer</li>
                  <li>Account Summary</li>
                  <li>Service Requests</li>
                </ul>
                <Button title="CUSTOMISE" className="mt-3"/>
              </div>
            </Card>
          </div>
          <div className="grid col-span-2">
            <CardTop title="ASSETS" titleIcon="" removeIcon={true} />
            <Card>
              <div>
                <ul className="grid gap-y-3">
                  <li>Account Balance<span>55XXX XX</span></li>
                  <li>Demot<span>11XXX.XX</span></li>
                  <li>Deposit<span>10000</span></li>
                </ul>
                <Button title="MY PROFILE" className="mt-3"/>
              </div>
            </Card>
          </div>
          <div className="grid col-span-2">
            <CardTop title="LIABILITIES" titleIcon="" removeIcon={true} />
            <Card>
              <div>
                <ul className="grid gap-y-3">
                  <li>Credi Cards<span>55XXX XX</span></li>
                  <li>Loans<span>11XXX.XX</span></li>
                  <li>Insurance<span>12000 00</span></li>
                </ul>
                <Button title="LINK MY ACCOUNT" className="mt-3"/>
              </div>
            </Card>
          </div>
          <div className="">
            <CardTop title="LIABILITIES" titleIcon="" removeIcon={true} />
            <Calendar />
          </div>
          <div className="grid col-span-2">
            <CardTop title="REWORDS" titleIcon="" removeIcon={true} closeIcon={true} />
            <Card>
              <div>
                <Image
                  src={require("@assets/images/dashboard/80caf159ba52e9cc9905238f19833a4d.jpeg")}
                  alt="The image features a white star on a blue background, and it is tagged as related to Christmas tree."
                  className="w-64"
                />
                <p>scrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap</p>
                <Button title="REMEMBER" className="mt-3"/>
              </div>
            </Card>
          </div>
          <div className="grid col-span-2">
            <CardTop title="LIABILITIES" titleIcon="" removeIcon={true} closeIcon={true} />
            <Card>
              <div>
                <Image
                  src={require("@assets/images/dashboard/lamp.jpeg")}
                  alt="The image is of a gold statue on a pole with a sky background. It also includes outdoor elements such as trees and buildings."
                  className="w-64"
                />
                <p>scrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap</p>
                <Button title="START NEW" className="mt-3"/>
              </div>
            </Card>
          </div>
        </section>
      </section>
    </main>
  )
}