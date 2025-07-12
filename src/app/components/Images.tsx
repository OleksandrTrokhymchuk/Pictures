"use client"

import Image from "next/image"
import imageStyles from "@/styles/images/images.module.css"
import mainStyles from "@/styles/main/main.module.css"
import { useEffect, useState } from "react"
import Modal from "./Modal"

export default function Images() {

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

    const [displayedImages, setDisplayedImages] = useState<any[]>([])

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [numberPictureForModal, setNumberPictureForModal] = useState<number | null>(null)

    const [isMounted, setIsMounted] = useState(false);

    const openModal = (imgNumber: number) => {
        setIsModalOpen(true)
        setNumberPictureForModal(imgNumber)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setNumberPictureForModal(null)
    }

    const [removedPictures, setRemovedPictures] = useState<number[]>([])

    useEffect(() => {
        setIsMounted(true)

        if (typeof window !== 'undefined') { 
            const storedRemoved = localStorage.getItem("removedPictures")
            try {
                setRemovedPictures(storedRemoved ? JSON.parse(storedRemoved) : [])
            } catch (e) {
                console.log(e)
                setRemovedPictures([])
            }
        }
    }, []) 

    const removePicture = (imgNumber: number) => {
        setRemovedPictures(removedPictures => [...removedPictures, imgNumber])
    }

    const restorePictures = () => {
        setRemovedPictures([])
    }

    useEffect(() => {
        const filteredImages = imagesData.filter(img => !removedPictures.includes(img.id))
        setDisplayedImages(filteredImages)

        if (isMounted && typeof window !== 'undefined') {
            localStorage.setItem("removedPictures", JSON.stringify(removedPictures))
        }
    }, [removedPictures, isMounted])

    return (
        <>
            <p className={mainStyles["text"]}>Number of pictures: {displayedImages.length}</p>
            <div className={imageStyles["image__container"]}> 
                {displayedImages.map((img) => (
                    <div key={img.id} className={imageStyles["galleryItem"]}> 
                        <Image
                            className={imageStyles["galleryImage"]} 
                            src={img.src}
                            alt={img.alt}
                            onClick={() => {openModal(img.id)}}
                        />
                        <button 
                            className={imageStyles["removeImage"]}
                            onClick={() => {removePicture(img.id)}}
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>
            {isMounted && removedPictures.length > 0 && (
                <button className={imageStyles["restorePictures"]} onClick={restorePictures}>
                    Restore deleted pictures
                </button>
            )}
            <Modal isOpen={isModalOpen} ImageNumber={numberPictureForModal} onClose={closeModal}/>
        </>
    )
}