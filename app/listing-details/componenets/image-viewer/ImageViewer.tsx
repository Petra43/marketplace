import Image from "next/image";
import React from "react";
import styles from "./ImageViewer.module.css"

export default function ImageViewer({images}: {images: ImageInfo[]}) {
  
  const imageCount = images.length
  const mainImageIndex = images.findIndex((image) => image.order === 0)
  
  const mainImage = () => {
      let image = images.find((image) => image.order === 0)
      if (image) {
        return (
          <div>
            <Image src={image.url} alt={image.altText} />
          </div>
        )
      } else {
        return (
          <div>
            <Image src="" alt="default image"/>
          </div>
    )}
  }
  
  const secondaryImages: React.JSX.Element[] = []
  if(imageCount > 1) {
    const secondaryImagesInfo = images.splice(mainImageIndex, 1)
    secondaryImagesInfo.forEach( (image)=> {
      secondaryImages.push(
        <div>
          <Image src={image.url} alt={image.altText} />
        </div>
    )}
  )}

  return(
    <div>
      <div>
        {mainImage()}
      </div>
      <div>
        {secondaryImages}
      </div>
    </div>
  )
}