"use client"

import Image from "next/image"
import modalStyles from "@/styles/modal/modal.module.css"
import { use, useEffect, useRef, useState } from "react"

interface ModalProps {
    isOpen: boolean
    ImageNumber: number | null
    onClose: () => void
}

export default function Modal({ isOpen, ImageNumber, onClose }: ModalProps) {
    const img = require(`../../../public/images/task-2/${ImageNumber ? ImageNumber : 1}.jpg`).default

    const [showModal, setShowModal] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setShowModal(true);
            setIsClosing(false);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true)
        setTimeout(() => {
            setShowModal(false)
            onClose()
        }, 300)
    }


    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
              handleClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown)
            modalOverlayRef.current?.addEventListener("click", handleClose)
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            modalOverlayRef.current?.removeEventListener("click", handleClose)
        }
    }, [isOpen, handleClose])

    const modalOverlayRef = useRef<HTMLDivElement>(null) 



    return(
        <>
            {showModal && (
                <div className={`${modalStyles["modalOverlay"]} ${isClosing ? modalStyles["fadeOut"] : ''}`} ref={modalOverlayRef}>
                    <div className={`${modalStyles["modalContent"]} ${isClosing ? modalStyles["fadeOut"] : ''}`}>
                        <Image src={img} alt="Modal"/>
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