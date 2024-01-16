"use client"

import { useState } from "react"

import Header from "@/components/ux/Header"
import TopNavBar from "@/components/ux/TopNavBar"
import Card from "@/components/ux/Card"
import { CardTop } from "@components/ux/CardTop"
import { Button } from "@components/ui/Button"
import { Input } from "@/components/ui/Input"

export default function LogIn() {
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [startIn, setStartIn] = useState("")

  function handleChange(event: any) {
    const target = event.target

    setUserId(target.userid.value)
    setPassword(target.password.value)
    setStartIn(target.startin.value)
  }

  function handleSubmit(event: any) {
    event.preventDefault()
    alert(`Test: ${userId ? userId : "you need of the backend"}`)
  }

  return (
    <main className="min-h-screen flex flex-col items-center">
      <Header />
      <TopNavBar />
      <section className="w-full my-10">
        <div className="max-w-7xl mx-auto flex max-md:flex-col justify-around lg:justify-between items-center max-sm-flex-col-2">
          <div className="md:w-2/5">
            <CardTop title="Login to International Banking" titleIcon="lock" />
            <Card>
              <div className="p-8">
                <form onSubmit={handleSubmit} className="form w-full">
                  <div className="md:flex md:items-center mt-7">
                    <div className="md:w-1/3">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="userid">
                        User ID
                      </label>
                    </div>
                    <div className="md:w-full">
                      <Input 
                        id="userid"
                        type="text"
                        value="Jane Doe"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="md:flex md:items-center my-7">
                    <div className="md:w-1/3">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="password">
                        Password
                      </label>
                    </div>
                    <div className="md:w-full">
                      <Input
                        id="password"
                        type="password"
                        placeholder="******************"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="md:flex md:items-center mb-7">
                    <div className="md:w-1/3">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Start In
                      </label>
                    </div>
                    <div className="md:w-full">
                      <select id="startin" className="px-4 py-2 mb-3 w-full rounded-md" onChange={handleChange} aria-label="Large select example">
                        <option selected>Band Account</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex md:items-center justify-center gap-2 md:gap-3">
                    <Button title="MY PROFILE" />
                    <div className="flex items-center justify-center px-2">
                      <span className="material-symbols-outlined text-primary" style={{transform: "rotate(90deg)"}}>change_history</span>
                      <button type="button" className="text-blackBlue py-2 px-1 rounded-md hover:rounded-danger hover:text-danger">View Demo</button>
                    </div>
                  </div>
                </form>
              </div>
            </Card>
          </div>
          <div className="md:w-2/5">
            <Card>
              <div className="w-full">
                <div className="flex flex-col justify-around items-center">
                  <h1 className="text-center text-danger text-2xl">May I help you?</h1>
                  <ul className="mt-8 grid gap-y-4">
                    <li className="flex items-center hover:text-danger"><span className="material-symbols-outlined mr-3">person</span><a href="#">New User? Get UserID</a></li>
                    <li className="flex items-center hover:text-danger"><span className="material-symbols-outlined mr-3">build</span><a href="#">Password? Get Password</a></li>
                    <li className="flex items-center hover:text-danger"><span className="material-symbols-outlined mr-3">construction</span><a href="#">Trouble logging in?</a></li>
                    <li className="flex items-center hover:text-danger"><span className="material-symbols-outlined mr-3">preview</span><a href="#">View Online Demo</a></li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full my-10">
        <div className="w-10/12 lg:max-w-7xl mx-auto">
          <CardTop title="Important security information:" />
          <Card>
            <ul className="list-disc px-5">
              <li>Before logging in please share that the URL address on the address bar of your Internet browser start you with...</li>
              <li>Never provide your User ID or password...</li>
              <li>Do not enter login or other sensitive information in any pop up window</li>
              <li>Verify the site is security certificate by clicking on the prodicck icon of your Internet browser. For more detail: <a className="underline underline-blackBlue" href="#">Click here</a></li>
            </ul>
          </Card>
          <CardTop title="Digital segurity:" />
          <Card>
            <p className="text-base px-5">-----------------</p>
          </Card>
        </div>
      </section>
    </main>
  )
}