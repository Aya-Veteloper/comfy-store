import { Outlet, useNavigation } from "react-router-dom"
import { Header, NavBar, Loading } from "../components"

export default function HomeLayout() {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === "loading"
  return <>

    <Header />
    <NavBar />

    {isPageLoading ? <Loading /> : <section className="align-element py-20">
      <Outlet />
    </section>}



  </>
}
