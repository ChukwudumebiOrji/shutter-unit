import { TbCategoryFilled, TbChevronLeft, TbChevronRight } from "react-icons/tb"
import CollectionImage from "../layout/CollectionImage"
import Header from "../layout/header"
import PicturesGrid from "../layout/picturesGrid"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { modalSelector, openModal } from "../../features/modalSlice"
import Modal from "../layout/modal"

const images = [
  {
    src: "https://picsum.photos/id/49/200/350",
    alt: "Image 1",
    collectionId: 1,
  },
  {
    src: "https://picsum.photos/id/39/200/300",
    alt: "Image 2",
    collectionId: 2,
  },
  {
    src: "https://picsum.photos/id/355/200/250",
    alt: "Image 3",
    collectionId: 3,
  },
  {
    src: "https://picsum.photos/id/24/200/300",
    alt: "Image 4",
    collectionId: 4,
  },
  {
    src: "https://picsum.photos/id/92/200/250",
    alt: "Image 5",
    collectionId: 5,
  },
  {
    src: "https://picsum.photos/id/553/200/350",
    alt: "Image 6",
    collectionId: 6,
  },
  {
    src: "https://picsum.photos/id/52/200/250",
    alt: "Image 7",
    collectionId: 7,
  },
  {
    src: "https://picsum.photos/id/41/200/350",
    alt: "Image 8",
    collectionId: 8,
  },
  {
    src: "https://picsum.photos/id/566/200/300",
    alt: "Image 9",
    collectionId: 9,
  },
  {
    src: "https://picsum.photos/id/19/200/350",
    alt: "Image 10",
    collectionId: 10,
  },
  // Add more images as needed
]

const Collection = () => {
  const { collectionId } = useParams()
  const nav = useNavigate()
  const isModalOpen = useSelector(modalSelector)
  const dispatch = useDispatch()

  const currentCollectionIndex = images.findIndex(
    (img) => img.collectionId === Number(collectionId)
  )

  const handleLeftClick = () => {
    if (currentCollectionIndex > 0) {
      nav(`/collections/${images[currentCollectionIndex - 1].collectionId}`)
    }
  }

  const handleRightClick = () => {
    if (currentCollectionIndex < images.length - 1) {
      nav(`/collections/${images[currentCollectionIndex + 1].collectionId}`)
    }
  }

  return (
    <>
      <Header pageTitle="Collection" />
      <PicturesGrid>
        {images.map((image, index) => (
          <CollectionImage
            key={index}
            src={image.src}
            alt={image.alt}
            index={index}
            onClick={() => dispatch(openModal(index))}
          />
        ))}
      </PicturesGrid>
      <div className="w-fit mx-auto my-8 flex gap-16 items-center">
        <button
          onClick={handleLeftClick}
          className="opacity-60 hover:opacity-100"
        >
          <TbChevronLeft size={48} />
        </button>
        <TbCategoryFilled size={36} />
        <button
          onClick={handleRightClick}
          className="opacity-60 hover:opacity-100"
        >
          <TbChevronRight size={48} />
        </button>
      </div>
      {isModalOpen.isModalOpen && <Modal images={images} />}
    </>
  )
}

export const collectionLoader = async () => {
  return null
}

export default Collection
