import { useDispatch } from "react-redux"
import { openModal } from "../../features/modalSlice"

const CollectionImage = ({ src, alt, index }: any) => {
  const dispatch = useDispatch()

  const handleOpen = () => {
    console.log(index)
    dispatch(openModal(index))
  }

  return (
    <div className="mb-4 break-inside-avoid" onClick={handleOpen}>
      <figure className="relative">
        <img
          src={src}
          alt={alt}
          className="object-cover block w-full rounded"
        />
        <div className="absolute inset-0 rounded"></div>
      </figure>
    </div>
  )
}

export default CollectionImage
