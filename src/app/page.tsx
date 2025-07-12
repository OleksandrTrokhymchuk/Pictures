import Image from "next/image"
import "../styles/reset.css"
import Image1 from "../../public/images/task-2/1.jpg"
import Image2 from "../../public/images/task-2/2.jpg"
import Image3 from "../../public/images/task-2/3.jpg"
import Image4 from "../../public/images/task-2/4.jpg"
import Image5 from "../../public/images/task-2/5.jpg"
import Image6 from "../../public/images/task-2/6.jpg"
import Image7 from "../../public/images/task-2/7.jpg"
import Image8 from "../../public/images/task-2/8.jpg"
import Image9 from "../../public/images/task-2/9.jpg"
import Image10 from "../../public/images/task-2/10.jpg"
import Image11 from "../../public/images/task-2/11.jpg"
import Image12 from "../../public/images/task-2/12.jpg"

export default function Home() {
  return (
    <>
      <Image src={Image1} alt="American Truck"/>
      <Image src={Image2} alt="Container Port"/>
      <Image src={Image3} alt="Plane"/>
      <Image src={Image4} alt="Mercedes-Benz Truck"/>
      <Image src={Image5} alt="Farm Truck"/>
      <Image src={Image6} alt="Containers"/>
      <Image src={Image7} alt="Volvo Truck"/>
      <Image src={Image8} alt="Volvo Truck"/>
      <Image src={Image9} alt="Ship"/>
      <Image src={Image10} alt="Iveco Trucks"/>
      <Image src={Image11} alt="Ship"/>
      <Image src={Image12} alt="Ship"/>
    </>
  )
}
