import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rate from "./Rate";

const ProductL = ({
  name,
  image,
  description,
  rating,
  countInStock,
  price,
  _id,
}) => {
  console.log(_id);
  return (
    <Card style={{ width: "19rem" }}>
      <Link to={`/product/${_id}`}>
        <Card.Img
          variant="top"
          width="160px"
          height="235px"
          src={image}
          alt={name}
        ></Card.Img>
      </Link>
      <Card.Body style={{ margin: "2px" }}>
        <Link to={`/product/${_id}`} style={{ textDecoration: "none" }}>
          <Card.Title as="div" className="product-title">
            {name}
          </Card.Title>
        </Link>
        <Card.Text>
          <Rate rating={rating} />
        </Card.Text>
        <Card.Text className="product-price">{price} DT</Card.Text>
      </Card.Body>
      <Link
        to={`/product/${_id}`}
        className="product-Btn"
        style={{ textDecoration: "none" }}
      >
        <Button variant="dark">Show description</Button>
      </Link>
    </Card>
  );
};
export default ProductL;
