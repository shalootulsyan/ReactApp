import { useState } from "react";
import "../App.css";
import { Form, Button, Container } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import Navs from "./nav";
import { useAuth } from "../contexts/AuthContext";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [redirectFlag, setRedirectFlag] = useState();
  const { handleLogin } = useAuth();
  const { currentUser } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(email, password);
      clearInput();
      history.push("/home");
    } catch {
      console.log("failed to login");
    }
  };

  const clearInput = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100vh",
      }}
    >
      <Container
        style={{
          maxWidth: "30rem",
          boxShadow: "rgba(0, 0, 0, 0.4) 1px 4px 6px 1px",
          minHeight: "25rem",
        }}
        className="bg-light d-flex flex-column justify-content-start align-items-center background py-5"
      >
        <Navs />
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group controlId="Email" className="m-3">
            <Form.Control
              type="email"
              placeholder="Email"
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="Password" className="m-3">
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="m-3"
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
