import Image from "next/image";
import imageStyles from "../../styles/images.module.css"

const imagesData = [
  { src: require("../../../public/images/task-2/1.jpg").default, alt: "American Truck" },
  { src: require("../../../public/images/task-2/2.jpg").default, alt: "Container Port" },
  { src: require("../../../public/images/task-2/3.jpg").default, alt: "Plane" },
  { src: require("../../../public/images/task-2/4.jpg").default, alt: "Mercedes-Benz Truck" },
  { src: require("../../../public/images/task-2/5.jpg").default, alt: "Farm Truck" },
  { src: require("../../../public/images/task-2/6.jpg").default, alt: "Containers" },
  { src: require("../../../public/images/task-2/7.jpg").default, alt: "Volvo Truck" },
  { src: require("../../../public/images/task-2/8.jpg").default, alt: "Volvo Truck" },
  { src: require("../../../public/images/task-2/9.jpg").default, alt: "Ship at sea" }, 
  { src: require("../../../public/images/task-2/10.jpg").default, alt: "Iveco Trucks on highway" }, 
  { src: require("../../../public/images/task-2/11.jpg").default, alt: "Cargo Ship at sunset" }, 
  { src: require("../../../public/images/task-2/12.jpg").default, alt: "Ship in port" }, 
];

export default function Images() {
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