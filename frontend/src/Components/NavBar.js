import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Actions/authActions";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <Navbar bg="dark" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/">
            Come & Buy
          </Navbar.Brand>
          <Nav className="ml-auto">
            {token && user ? (
              <>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav>
                  <Nav.Link as={Link} to="/Profile">
                    Profile
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Cart">
                    <i className="fa-solid fa-cart-shopping"></i> Cart
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      dispatch(logout());
                      navigate("/");
                    }}
                  >
                    Logout
                  </Nav.Link>
                </Nav>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/">
                  <i className="fa-solid fa-house"></i> Home
                </Nav.Link>

                <Nav.Link as={Link} to="/Login">
                  <i className="fa-regular fa-user"></i> Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
