import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Carousel from "react-bootstrap/Carousel";
// import data from "../data";
// import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getProducts as listProducts } from "../Redux/Actions/productActions";
import ProductL from "./ProductL";
import AddProduct from "./AddProduct";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

const Home = () => {
  // const [products, setPoducts] = useState([]);
  const dispatch = useDispatch();

  // const { products, loading, error } = getProducts;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.getProductReducer.products);
  // const product = useSelector((state) => state.getProductReducer.product);
  const error = useSelector((state) => state.getProductReducer.error);
  const loading = useSelector((state) => state.getProductReducer.loading);

  return (
    <div>
      <br />
      {loading == false && <AddProduct />}

      {/* <Link to={`/AddProduct`}>
        <Button variant="outline-dark">Add Product</Button>
      </Link> */}
      {/* <div className="Carousel">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block fluid"
              src="/images/product1.jpg"
              alt="product 1 "
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="/images/product2.jpg"
              alt="product 2"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/product3.jpg"
              alt="product 3 "
            />
            <Carousel.Caption>
              <h3>Third product</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
     */}
      <Container className="HomeProducts">
        <Row>
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
            products &&
            products.map((product) => (
              <Col className="product" key={product._id} sm={12} md={6} lg={4}>
                <ProductL
                  product={product}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                  _id={product._id}
                />
              </Col>
            ))
          )}
        </Row>
      </Container>
      {/* {console.log(products)}
      {products &&
        products.map((product) => <h2 key={product._id}>{product.name}</h2>)} */}
    </div>
  );
};
export default Home;
