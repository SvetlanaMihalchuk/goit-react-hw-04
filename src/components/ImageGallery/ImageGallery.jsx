import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

const ImageGallery = ({ pictures, onImageClick }) => {
    return (
        <ul className={css.list}>
            {pictures.map((item) => (
                <li className={css.item} key={item.id} onClick={() => onImageClick(item)}> 
                    <ImageCard {...item} item={item} />
                </li>
          ))}
            </ul> 
  )
}

export default ImageGallery