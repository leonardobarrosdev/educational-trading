import Image from "next/image"

import Header from "@components/ux/Header"
import TopNavBar from "@components/ux/TopNavBar"
import Card from "@components/ux/Card"
import { Button } from "@components/ui/Button"
import { CardTop } from "@/components/ux/CardTop"
import { Calendar } from "@components/ux/Calendar"
import { Breadcrumb } from "@/components/ui/Breadcrumb"

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <TopNavBar />
      <section className="mx-auto max-w-7xl my-10">
        <div className="flex gap-x-6">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-x-3">
                <span className="material-symbols-outlined">lock</span>
                <h3 className="tex-2xl text-blackBlue">WELCOME BACK</h3>
              </div>
              <p>ARCHIT JAN</p>
              <div className="flex gap-x-3">
                <Button title="LOG OUT" bgColor="bg-blackBlue" />
                <Button title="MY PROFILE" />
              </div>
              <p className="text-[0.75rem]">Los visibled 24-15-2023 14:43:08 H</p>
            </div>
            <div className="">
              <CardTop title="MY SHORTCUTS" titleIcon="star" removeIcon={true} closeIcon={true} />
              <Card>
                <div>
                  <ul className="grid gap-y-3">
                    <li>Transfer</li>
                    <li>Account Summary</li>
                    <li>Service Requests</li>
                  </ul>
                  <Button title="CUSTOMISE" className="mt-3"/>
                </div>
              </Card>
            </div>
          </div>
          <div className="w-4/5">
            <div className="flex flex-col gap-y-2 mb-10">
                <Breadcrumb />
                <hr className="w-full text-2xl" />
              </div>
            <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="grid col-span-2">
                <CardTop title="ASSETS" titleIcon="analytics" removeIcon={true} />
                <Card>
                  <div>
                    <ul className="grid gap-y-3">
                      <li className="font-semibold whitespace-break-spaces">Account Balance       <span className="font-normal text-end">55XXX XX</span></li>
                      <li className="font-semibold whitespace-break-spaces">Deposit                     <span className="font-normal">10000</span></li>
                    </ul>
                    <Button title="MY PROFILE" className="mt-3"/>
                  </div>
                </Card>
              </div>
              <div className="grid col-span-2">
                <CardTop title="REWORDS" titleIcon="featured_seasonal_and_gifts" removeIcon={true} closeIcon={true} />
                <Card>
                  <div>
                    <Image
                      src={require("@assets/images/dashboard/80caf159ba52e9cc9905238f19833a4d.jpeg")}
                      alt="The image features a white star on a blue background, and it is tagged as related to Christmas tree."
                      className="w-64 my-3"
                    />
                    <p>scrambled it to make a type specimen book. It has survived not only fivecenturies, but also the leap</p>
                  </div>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}