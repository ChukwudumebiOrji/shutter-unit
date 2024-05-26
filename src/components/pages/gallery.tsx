// src/components/Gallery.jsx
import React from "react"
import GalleryImage from "../layout/galleryImage"
import PicturesGrid from "../layout/picturesGrid"
import Header from "../layout/header"

const images = [
  {
    src: "https://picsum.photos/id/42/200/350",
    alt: "Image 1",
    collectionId: 1,
  },
  {
    src: "https://picsum.photos/id/39/200/300",
    alt: "Image 2",
    collectionId: 2,
  },
  { src: "https://picsum.photos/id/355/200/250", alt: "Image 3" },
  { src: "https://picsum.photos/id/24/200/300", alt: "Image 4" },
  { src: "https://picsum.photos/id/92/200/250", alt: "Image 5" },
  { src: "https://picsum.photos/id/553/200/350", alt: "Image 6" },
  { src: "https://picsum.photos/id/52/200/250", alt: "Image 7" },
  { src: "https://picsum.photos/id/41/200/350", alt: "Image 8" },
  { src: "https://picsum.photos/id/566/200/300", alt: "Image 9" },
  { src: "https://picsum.photos/id/19/200/350", alt: "Image 10" },
  // Add more images as needed
]

const Gallery = () => {
  return (
    <>
      <Header pageTitle="my gallery" />
      <p className="text-center mb-4 text-xs opacity-50">
        Select any image to explore that set in greater detail.
      </p>
      <PicturesGrid>
        {images.map((image, index) => (
          <GalleryImage
            key={index}
            src={image.src}
            alt={image.alt}
            collectionId={image.collectionId}
          />
        ))}
      </PicturesGrid>
    </>
  )
}

export default Gallery
