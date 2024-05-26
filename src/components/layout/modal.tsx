import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeModal, modalSelector } from "../../features/modalSlice"
import { TbChevronLeft, TbChevronRight, TbX } from "react-icons/tb"

const Modal = ({ images }: any) => {
  const dispatch = useDispatch()
  const { currentIndex } = useSelector(modalSelector)

  const [index, setIndex] = useState(currentIndex)

  console.log(currentIndex)

  // Ensure the modal starts from the correct index when opened
  useEffect(() => {
    setIndex(currentIndex)
  }, [currentIndex])

  const handleClose = () => {
    dispatch(closeModal())
  }

  const handlePrev = () => {
    setIndex((prevIndex: any) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    )
  }

  const handleNext = () => {
    setIndex((prevIndex: any) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    )
  }

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex justify-center items-center z-50">
      <div className="relative w-[90%] h-[90%] bg-white rounded-lg shadow-lg overflow-hidden p-16">
        <div className="absolute top-4 right-4 z-50">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            <TbX size={24} />
          </button>
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="flex justify-between h-full items-center">
            <button
              onClick={handlePrev}
              className="opacity-60 hover:opacity-100"
            >
              <TbChevronLeft size={48} />
            </button>
            <div className="flex-1 flex justify-center items-center">
              <img
                src={images[index].src}
                alt={images[index].alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <button
              onClick={handleNext}
              className="opacity-60 hover:opacity-100"
            >
              <TbChevronRight size={48} />
            </button>
          </div>
          <div className="flex gap-2 justify-center items-center mx-auto p-4 max-h-[20%] overflow-x-auto">
            {images.map((img: any, imgIndex: any) => (
              <img
                key={img.src} // Use unique key
                src={img.src}
                alt={img.alt}
                className={`h-full cursor-pointer ${
                  imgIndex === index ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => setIndex(imgIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
