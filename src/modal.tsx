import react from "react"

const ModalWindow = (props: any) => {
    const parentModalWindow = document.createElement("div") as HTMLDivElement
    const imageModalWindow = document.createElement("img") as HTMLImageElement
    parentModalWindow.classList.add("parent-modal-window")
    imageModalWindow.classList.add("image-modal-window")
    imageModalWindow.id = ("imageModalWindow")
    imageModalWindow.src = props.modalImage
    parentModalWindow.appendChild(imageModalWindow)
    return (
        <>
        {parentModalWindow}
        </>
    )
}

export default ModalWindow
