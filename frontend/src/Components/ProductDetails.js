import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getProductDetails,
  deleteProduct,
} from "../Redux/Actions/productActions";
import { addToCart } from "../Redux/Actions/cartActions";
import Rate from "./Rate";
import { Dropdown } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import UpdateProduct from "./UpdateProduct";

import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ProductDetails = (match, history) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);
  const handleShow = () => {
    setShowMore(!showMore);
  };
  // const products = useSelector(
  //   (state) => state.getProductDetailsReducer.products
  // );

  // const produit = products.find((el) => el._id === params.id);
  // const productDetails = useSelector((state) => state.getProductDetails);
  // const { Loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, match, id]);
  //   useEffect(() => {
  //   if (product && { id } !== product._id) {
  //     dispatch(getProductDetails({ id }));
  //   }
  // }, [dispatch, product, match]);
  // const product = useSelector(
  //   (state) => state.getProductDetailsReducer.product
  // );
  const product = useSelector(
    (state) => state.getProductDetailsReducer.product
  );
  // useEffect(() => {
  //   dispatch(getProductDetails(id));
  // }, [product]);
  const error = useSelector((state) => state.getProductDetailsReducer.error);
  const loading = useSelector(
    (state) => state.getProductDetailsReducer.loading
  );

  const handleAddToCart = () => {
    dispatch(addToCart(quantity, product._id));
  };
  return (
    <div>
      {loading ? (
        <div>
          <h2>
            {" "}
            <Spinner animation="border" role="status"></Spinner> Loading...
          </h2>
        </div>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        product && (
          <Container>
            <Link to="/" className="btn btn-light my-3">
              <i className="fa-solid fa-circle-chevron-left"></i> Back
            </Link>
            <Row>
              <Col md={6}>
                <ListGroup>
                  <ListGroup.Item>
                    <Image className="detailsIMG" src={product.image} />
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item
                    action
                    variant="dark"
                    style={{ textAlign: "center" }}
                  >
                    <h3>{product.name}</h3>
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup>
                  <ListGroup.Item>
                    <Rate rating={product.rating} />
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup>
                  <ListGroup.Item style={{ textAlign: "center" }}>
                    <h3>{`${product.price} DT`}</h3>
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup>
                  <ListGroup.Item>
                    <h6>
                      {showMore
                        ? product.description
                        : `${product.description.substring(0, 100)}`}
                      <a className="btn" onClick={handleShow}>
                        {showMore ? "Show less" : "Show more"}
                      </a>
                    </h6>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>{product.price} DT</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          <strong>
                            {product.countInStock > 0
                              ? `${product.countInStock} In Stock`
                              : "out of Stock"}{" "}
                          </strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className="AddButton"
                        >
                          Quantity
                        </Dropdown.Toggle>

                        <Dropdown.Menu
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((el) => (
                            <Dropdown.Item key={el + 1} value={el + 1}>
                              {el + 1}
                            </Dropdown.Item>
                          ))}
                          {/* 
                          <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                          <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                          <Dropdown.Item href="#/action-5">5</Dropdown.Item> */}
                        </Dropdown.Menu>
                      </Dropdown>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to="/cart">
                        <Button
                          variant="dark"
                          className="AddButton"
                          disabled={product.countInStock === 0}
                          onClick={handleAddToCart}
                        >
                          Add To Cart
                        </Button>
                      </Link>
                    </ListGroup.Item>
                    {product && (
                      <ListGroup.Item>
                        <UpdateProduct product={product} />
                      </ListGroup.Item>
                    )}
                  </ListGroup>
                  <ListGroup.Item>
                    <Link to="/">
                      <Button
                        className="AddButton"
                        variant="danger"
                        onClick={() => dispatch(deleteProduct(product._id))}
                      >
                        Delete Product
                      </Button>
                    </Link>
                  </ListGroup.Item>
                </Card>
              </Col>
            </Row>
          </Container>
        )
      )}
    </div>
  );
};
export default ProductDetails;
