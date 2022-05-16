import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { current } from "../Redux/Actions/authActions";
import { Link } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  });
  const user = useSelector((state) => state.authReducer.user);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Link to="/" className="HomeBtn">
            <Button variant="dark"> Home</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Profile;
