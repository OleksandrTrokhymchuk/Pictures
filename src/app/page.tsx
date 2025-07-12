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
import imageStyles from "../styles/images.module.css"

const imagesData = [
  { src: require("../../public/images/task-2/1.jpg").default, alt: "American Truck" },
  { src: require("../../public/images/task-2/2.jpg").default, alt: "Container Port" },
  { src: require("../../public/images/task-2/3.jpg").default, alt: "Plane" },
  { src: require("../../public/images/task-2/4.jpg").default, alt: "Mercedes-Benz Truck" },
  { src: require("../../public/images/task-2/5.jpg").default, alt: "Farm Truck" },
  { src: require("../../public/images/task-2/6.jpg").default, alt: "Containers" },
  { src: require("../../public/images/task-2/7.jpg").default, alt: "Volvo Truck" },
  { src: require("../../public/images/task-2/8.jpg").default, alt: "Volvo Truck" },
  { src: require("../../public/images/task-2/9.jpg").default, alt: "Ship at sea" }, 
  { src: require("../../public/images/task-2/10.jpg").default, alt: "Iveco Trucks on highway" }, 
  { src: require("../../public/images/task-2/11.jpg").default, alt: "Cargo Ship at sunset" }, 
  { src: require("../../public/images/task-2/12.jpg").default, alt: "Ship in port" }, 
];

export default function Home() {
  return (
    <div className={imageStyles["image__container"]}> 
      {imagesData.map((img, index) => (
        <div key={index} className={imageStyles["galleryItem"]}> 
          <Image
            className={imageStyles["galleryImage"]} 
            src={img.src}
            alt={img.alt}
          />
        </div>
      ))}
    </div>
  )
}
