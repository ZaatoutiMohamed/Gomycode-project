import { Form, Button, Col, Card, Container } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../Redux/Actions/authActions";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }, navigate));
  };

  return (
    <div>
      <div>
        <Container>
          <Card className="registerCard" style={{ width: "30rem" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <h2
                style={{
                  textDecoration: "underline overline",
                  textAlign: "center",
                }}
              >
                Sign Up
              </h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    <strong>Name</strong>
                  </Form.Label>
                  <Form.Control
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    <strong>Email address</strong>
                  </Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    <strong>Password</strong>
                  </Form.Label>
                  <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  onClick={(e) => handleRegister(e)}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Card>
        </Container>
      </div>
    </div>
  );
};
export default Register;
