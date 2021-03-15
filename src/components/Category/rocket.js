import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Card from "../Card";

function Category() {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://api.spacexdata.com/v4/rockets")
      .then((response) => {
        const value = response.data;
        setData(value);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(data);

  return (
    <Fragment>
      {data ? (
        <Container>
          <div className={"d-flex flex-wrap justify-content-around flex-row"}>
            {data.map((product) => (
              <Fragment>
                <Card product={product} />
              </Fragment>
            ))}
          </div>
        </Container>
      ) : null}
    </Fragment>
  );
}

export default Category;
