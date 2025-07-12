import Image from "next/image"

interface ModalProps {
    isOpen: boolean
    ImageNumber: number
}

export default function Modal({ isOpen, ImageNumber }: ModalProps) {
    const img = require(`../../../public/images/task-2/${ImageNumber}.jpg`).default

    return(
        <>
            {isOpen && (
                <>
                    <Image src={img} alt="Modal"/>
                </>
            )}
        </>
    )
}