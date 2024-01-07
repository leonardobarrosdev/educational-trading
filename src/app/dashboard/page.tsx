import Header from "../../components/ux/Header";
import TopNavBar from "../../components/ux/TopNavBar";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <TopNavBar />
      <h1>DASHBOARD</h1>
    </main>
  )
}