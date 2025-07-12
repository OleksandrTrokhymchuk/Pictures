import "../styles/reset.css"
import DateInfo from "./components/DateInfo"
import Images from "./components/Images"
import mainStyles from "@/styles/main/main.module.css"

export default function Home() {
  return (
    <div className={mainStyles["wrapper"]}>
      <DateInfo/>
      <Images/>
    </div>
  )
}
