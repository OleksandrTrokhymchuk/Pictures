"use client"

import Image, { StaticImageData } from "next/image"
import modalStyles from "@/styles/modal/modal.module.css"
import { useCallback, useEffect, useRef, useState } from "react"

interface ModalProps {
    isOpen: boolean
    ImageNumber: number | null
    onClose: () => void
}

export default function Modal({ isOpen, ImageNumber, onClose }: ModalProps) {
    // const img = require(`../../../public/images/task-2/${ImageNumber ? ImageNumber : 1}.jpg`).default

    const [imageSrc, setImageSrc] = useState<StaticImageData | null>(null)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [isClosing, setIsClosing] = useState<boolean>(false)

    useEffect(() => {
        if (isOpen) {
            setShowModal(true)
            setIsClosing(false)
        }
    }, [isOpen])

    const handleClose = useCallback(() => {
        setIsClosing(true)
        setTimeout(() => {
            setShowModal(false)
            onClose()
        }, 300)
    }, [onClose])


    useEffect(() => {
        if (isOpen) {
            setShowModal(true)
            setIsClosing(false)
            const loadImage = async () => {
                try {
                    const imgModule = await import(`../../../public/images/task-2/${ImageNumber ? ImageNumber : 1}.jpg`)
                    setImageSrc(imgModule.default)
                } catch (e) {
                    console.error(e)
                }
            }
            loadImage()
        } else {
            setImageSrc(null)
        }
    }, [isOpen, ImageNumber])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
              handleClose()
            }
        }

        if (showModal) {
            document.addEventListener('keydown', handleKeyDown)
            modalOverlayRef.current?.addEventListener("click", handleClose)
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            modalOverlayRef.current?.removeEventListener("click", handleClose)
        }
    }, [showModal, handleClose])

    const modalOverlayRef = useRef<HTMLDivElement>(null) 



    return(
        <>
            {showModal && (
                <div className={`${modalStyles["modalOverlay"]} ${isClosing ? modalStyles["fadeOut"] : ''}`} ref={modalOverlayRef}>
                    <div className={`${modalStyles["modalContent"]} ${isClosing ? modalStyles["fadeOut"] : ''}`} onClick={(e) => e.stopPropagation()}>
                        {imageSrc && <Image src={imageSrc} alt="Modal" />}
                        <button 
                        className={modalStyles["closeButton"]}
                        onClick={handleClose}
                    >
                        &times;
                    </button>
                    </div>
                    
                </div>
            )}
        </>
    )
}