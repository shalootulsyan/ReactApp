import { Image, Button, Carousel } from "react-bootstrap";
import styles from "./styles.module.css";

function Card({ product }) {
  return (
    <div
      key={product.id}
      className={`${styles.productCard} rounded  m-3 bg-white`}
    >
      <div>
        <Carousel slide={false}>
          {product.flickr_images.map((img) => (
            <Carousel.Item
              style={{
                height: "400px",
                width: "450px",
                position: "relative",
                margin: "0",
                padding: "2px",
              }}
            >
              <Image fluid src={img} className={`${styles.imgCover} rounded`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div
        className={
          "d-flex flex-column align-items-start justify-content-center"
        }
      >
        <p
          className={"mb-0 font-weight-bold"}
          style={{ fontFamily: "EBGaramond", fontSize: 20 }}
        >
          {product.name}
        </p>
        {product.cost_per_launch ? (
          <p
            className={""}
            style={{ fontFamily: "EBGaramond", fontSize: 20 }}
          >{`Rs.${product.cost_per_launch}`}</p>
        ) : null}

        {product.orbit_duration_yr ? (
          <p
            className={""}
            style={{ fontFamily: "EBGaramond", fontSize: 20 }}
          >{`Duration year ${product.orbit_duration_yr}`}</p>
        ) : null}

        {product.type === "rocket" ? (
          <Button href={`/${product.type}/${product.id}`} className={"m-1"}>
            Read More
          </Button>
        ) : null}

        {product.type === "capsule" ? (
          <Button href={`/${product.type}/${product.id}`} className={"m-1"}>
            Read More
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
