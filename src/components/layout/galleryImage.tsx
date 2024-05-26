import { useNavigate } from "react-router-dom"

const GalleryImage = ({ src, alt, collectionId, caption }: any) => {
  const nav = useNavigate()

  return (
    <div
      className="mb-4 break-inside-avoid hover:cursor-pointer"
      onClick={() => {
        nav(`/collections/${collectionId}`)
      }}
    >
      <figure className="relative">
        <figcaption>{caption}</figcaption>
        <img
          src={src}
          alt={alt}
          className="object-cover block w-full rounded"
        />
        <div className="absolute inset-0 hover:bg-gradient-to-t hover:from-black/90 hover:to-transparent rounded"></div>
      </figure>
    </div>
  )
}

export default GalleryImage
