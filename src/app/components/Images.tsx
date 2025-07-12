"use client"

import Image from "next/image"
import imageStyles from "@/styles/images/images.module.css"
import mainStyles from "@/styles/main/main.module.css"
import { useEffect, useState, useMemo } from "react"
import Modal from "./Modal"

import img1 from "../../../public/images/task-2/1.jpg"
import img2 from "../../../public/images/task-2/2.jpg"
import img3 from "../../../public/images/task-2/3.jpg"
import img4 from "../../../public/images/task-2/4.jpg"
import img5 from "../../../public/images/task-2/5.jpg"
import img6 from "../../../public/images/task-2/6.jpg"
import img7 from "../../../public/images/task-2/7.jpg"
import img8 from "../../../public/images/task-2/8.jpg"
import img9 from "../../../public/images/task-2/9.jpg"
import img10 from "../../../public/images/task-2/10.jpg"
import img11 from "../../../public/images/task-2/11.jpg"
import img12 from "../../../public/images/task-2/12.jpg"

interface ImageData {
    id: number
    src: any
    alt: string
}

export default function Images() {

    const imagesData: ImageData[] = [
        { id: 1, src: img1, alt: "American Truck" },
        { id: 2, src: img2, alt: "Container Port" },
        { id: 3, src: img3, alt: "Plane" },
        { id: 4, src: img4, alt: "Mercedes-Benz Truck" },
        { id: 5, src: img5, alt: "Farm Truck" },
        { id: 6, src: img6, alt: "Containers" },
        { id: 7, src: img7, alt: "Volvo Truck" },
        { id: 8, src: img8, alt: "Volvo Truck" },
        { id: 9, src: img9, alt: "Ship at sea" }, 
        { id: 10, src: img10, alt: "Iveco Trucks on highway" }, 
        { id: 11, src: img11, alt: "Cargo Ship at sunset" }, 
        { id: 12, src: img12, alt: "Ship in port" }, 
    ]

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

    const displayedImages = useMemo(() => {
        return imagesData.filter(img => !removedPictures.includes(img.id));
    }, [removedPictures, imagesData])

    useEffect(() => {
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