import { Link } from "react-router-dom"
// import HeartIcon from "../../assets/icons/HeartIcon"
import BodyText from "../BodyText/BodyText"
import ImageWithLoadBg from "../ImageWithLoadBg/ImageWithLoadBg"
import "./NFTItemCard.scss"

export interface NFTItemCardProps {
  image: any
  name: string
  collectionTitle: string
  collectionId: string
  price: number
  id: string
  tokenType: string
}

const NFTItemCard = (props: NFTItemCardProps) => {
  const { image, name, collectionTitle, collectionId, price } = props
  return (
    <Link to={`/${collectionId}/item/${props.tokenType}/${props.id}`} className="nft-item-card">
      <ImageWithLoadBg aspectRatio={1} src={image} alt={name} />
      {/* <div className="like-btn">
        <HeartIcon />
      </div> */}
      <div className="details-container">
        <div className="collection-and-price-container">
          <BodyText className="collection-name" light>
            {collectionTitle}
          </BodyText>
          {price &&
            <div className="price-container">
              <BodyText className="price" bold>
                {price.toLocaleString()} Ⓝ
              </BodyText>
            </div>
          }
        </div>
        <BodyText className="item-name" bold>
          {name}
        </BodyText>
      </div>
    </Link>
  )
}

export default NFTItemCard
