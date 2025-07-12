import mainStyles from "@/styles/main/main.module.css"

export default function DateInfo() {
    const now = new Date()
  
    const day = now.getDate().toString().padStart(2, '0')
    const month = (now.getMonth() + 1).toString().padStart(2, '0')
    const year = now.getFullYear()

    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')

    return(
        <div style={{marginTop: "20px"}}>
            <p className={mainStyles["text"]}>{day}.{month}.{year} {hours}:{minutes}</p>
        </div>
    )
}