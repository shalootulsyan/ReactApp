import { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Header() {
  const { handleSignOut } = useAuth();
  const history = useHistory();

  async function handleSubmit() {
    try {
      await handleSignOut();
      history.push("/login");
    } catch {
      console("failed to logout");
    }
  }

  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Brand href="/">SpaceX</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link
                to={{ pathname: "/rocket" }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Rocket
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to={{ pathname: "/dragons" }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Dragons
              </Link>
            </Nav.Link>
          </Nav>

          <button
            className="m-2"
            style={{
              outline: "none",
              border: "none",
              color: "inherit",
              backgroundColor: "inherit",
              padding: 0,
            }}
            onClick={() => handleSubmit()}
          >
            Sign Out
          </button>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

export default Header;
