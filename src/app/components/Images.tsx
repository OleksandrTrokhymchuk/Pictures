"use client"

import Image from "next/image"
import imageStyles from "@/styles/images/images.module.css"
import mainStyles from "@/styles/main/main.module.css"
import { useState } from "react"
import Modal from "./Modal"

const imagesData = [
    { id: 1, src: require("../../../public/images/task-2/1.jpg").default, alt: "American Truck" },
    { id: 2, src: require("../../../public/images/task-2/2.jpg").default, alt: "Container Port" },
    { id: 3, src: require("../../../public/images/task-2/3.jpg").default, alt: "Plane" },
    { id: 4, src: require("../../../public/images/task-2/4.jpg").default, alt: "Mercedes-Benz Truck" },
    { id: 5, src: require("../../../public/images/task-2/5.jpg").default, alt: "Farm Truck" },
    { id: 6, src: require("../../../public/images/task-2/6.jpg").default, alt: "Containers" },
    { id: 7, src: require("../../../public/images/task-2/7.jpg").default, alt: "Volvo Truck" },
    { id: 8, src: require("../../../public/images/task-2/8.jpg").default, alt: "Volvo Truck" },
    { id: 9, src: require("../../../public/images/task-2/9.jpg").default, alt: "Ship at sea" }, 
    { id: 10, src: require("../../../public/images/task-2/10.jpg").default, alt: "Iveco Trucks on highway" }, 
    { id: 11, src: require("../../../public/images/task-2/11.jpg").default, alt: "Cargo Ship at sunset" }, 
    { id: 12, src: require("../../../public/images/task-2/12.jpg").default, alt: "Ship in port" }, 
]

export default function Images() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [numberPictureForModal, setNumberPictureForModal] = useState<number>(1)
    return (
        <>
            <p className={mainStyles["text"]}>Number of pictures: {imagesData.length}</p>
            <div className={imageStyles["image__container"]}> 
                {imagesData.map((img, index) => (
                    <div key={index} className={imageStyles["galleryItem"]}> 
                        <Image
                            className={imageStyles["galleryImage"]} 
                            src={img.src}
                            alt={img.alt}
                            onClick={() => {setIsModalOpen(!isModalOpen); setNumberPictureForModal(img.id)}}
                        />
                    </div>
                ))}
            </div>
            <Modal isOpen={isModalOpen} ImageNumber={numberPictureForModal}/>
        </>
    )
}