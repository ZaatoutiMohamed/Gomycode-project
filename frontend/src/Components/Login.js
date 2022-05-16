import { Form, Button, Col, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../Redux/Actions/authActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }, navigate));
  };
  return (
    <div>
      <Container>
        <Card className="loginCard" style={{ width: "25rem" }}>
          {" "}
          <Col md={{ span: 6, offset: 3 }}>
            <h2
              style={{
                textDecoration: "underline overline",
                textAlign: "center",
              }}
            >
              Login
            </h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ marginTop: "20px" }}>
                  <strong>Email address:</strong>
                </Form.Label>
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <strong>Password:</strong>
                </Form.Label>
                <Form.Control
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Link to="/Register"> Sign Up</Link>
              <br></br>
              <br></br>
              <Button
                variant="primary"
                size="lg"
                active
                style={{
                  marginBottom: "20px",
                }}
                onClick={(e) => {
                  handleLogin(e);
                }}
                type="submit"
              >
                Login
              </Button>
            </Form>
          </Col>
        </Card>
      </Container>
    </div>
  );
};
export default Login;
