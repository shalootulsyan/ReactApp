import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Category from "../components/Category/rocket";
import Header from "../components/Header";

function Home() {
  return (
    <Container fluid className={"p-0 bg-dark"}>
      <Header />

      <Category />
    </Container>
  );
}

export default Home;
