import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Header from "../Header";
import Card from "../Card";

function Dragon() {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://api.spacexdata.com/v4/dragons")
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
    <Container fluid className={"p-0 bg-dark min-vh-100"}>
      <Header />
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
    </Container>
  );
}

export default Dragon;
