import { useState, useEffect, Fragment } from "react";
import { Container, Image, Row, Col, Carousel } from "react-bootstrap";
import axios from "axios";
import styles from "./style.module.css";

function Detail(props) {
  let data = props.match.params.productid;
  let type = props.match.params.producttype;

  const [productDetail, setProductDetail] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    if (type === "rocket") {
      axios
        .get(`https://api.spacexdata.com/v4/rockets/${data}`)
        .then((response) => {
          const value = response.data;
          setProductDetail(value);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (type === "capsule") {
      axios
        .get(`https://api.spacexdata.com/v4/dragons/${data}`)
        .then((response) => {
          const value = response.data;
          setProductDetail(value);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  console.log(productDetail);
  console.log(props);

  return (
    <Container className={"bg-white min-vh-100 p-4"}>
      {productDetail ? (
        <div>
          <h2>{productDetail.name}</h2>
          <hr />

          <div className={"d-flex justify-content-center"}>
            <Carousel>
              {productDetail.flickr_images.map((img) => (
                <Carousel.Item>
                  <Image fluid src={img} height="auto" max-width="100%" />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {type === "rocket" ? (
            <Fragment>
              <div>
                <Row
                  className={`${styles.textalign} justify-content-center m-3`}
                >
                  <Col>
                    <h4>Height</h4>
                    <p>{`${productDetail.height.feet} Feet`}</p>
                  </Col>

                  <Col>
                    <h4>Diameter</h4>
                    <p>{`${productDetail.diameter.feet} Feet`}</p>
                  </Col>

                  <Col className={"d-flex flex-column"}>
                    <h4>Mass</h4>
                    <p>{`${productDetail.mass.kg} Kg`}</p>
                  </Col>
                </Row>
              </div>

              <div>
                <Row
                  className={`${styles.textalign} justify-content-center m-3`}
                >
                  <Col>
                    <h4>First Flight</h4>
                    <p>{`${productDetail.first_flight}`}</p>
                  </Col>

                  <Col>
                    <h4 className={`${styles.pairPadding}`}>Active</h4>
                    <p>{`${productDetail.active}`}</p>
                  </Col>

                  <Col>
                    {" "}
                    <h4 className={`${styles.pairPadding}`}>Cost</h4>
                    <p>{`${productDetail.cost_per_launch}`}</p>
                  </Col>
                </Row>
              </div>
            </Fragment>
          ) : null}

          {type === "capsule" ? (
            <Fragment>
              <div>
                <Row
                  className={`${styles.textalign} justify-content-center m-3`}
                >
                  <Col>
                    <h4>Height</h4>
                    <p>{`${productDetail.height_w_trunk.feet} Feet`}</p>
                  </Col>

                  <Col>
                    <h4>Diameter</h4>
                    <p>{`${productDetail.diameter.feet} Feet`}</p>
                  </Col>

                  <Col className={"d-flex flex-column"}>
                    <h4>Dry Mass</h4>
                    <p>{`${productDetail.dry_mass_kg} Kg`}</p>
                  </Col>
                </Row>
              </div>

              <div>
                <Row
                  className={`${styles.textalign} justify-content-center m-3`}
                >
                  <Col>
                    <h4>First Flight</h4>
                    <p>{`${productDetail.first_flight}`}</p>
                  </Col>

                  <Col>
                    <h4 className={`${styles.pairPadding}`}>Launch Payload</h4>
                    <p>{`${productDetail.launch_payload_mass.kg}`}</p>
                  </Col>

                  <Col>
                    {" "}
                    <h4 className={`${styles.pairPadding}`}>Return Payload</h4>
                    <p>{`${productDetail.return_payload_mass.kg}`}</p>
                  </Col>
                </Row>
              </div>
            </Fragment>
          ) : null}

          <p>{productDetail.description}</p>

          <a href={productDetail.wikipedia} target="_blank" rel="noreferrer">
            Learn more on Wikipedia
          </a>
        </div>
      ) : null}
    </Container>
  );
}

export default Detail;
