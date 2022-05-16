import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { editProduct } from "../Redux/Actions/productActions";

const UpdateProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [rating, setRating] = useState(product.rating);
  const [countInStock, setCountInStock] = useState(product.countInStock);
  const [image, setImage] = useState(product.image);
  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="AddButton">
        Update Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              textDecoration: "underline overline",
              textAlign: "center",
            }}
          >
            Add New Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <strong>Name</strong>
              </Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <strong>Description</strong>
              </Form.Label>
              <Form.Control
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Enter description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <strong>Price</strong>
              </Form.Label>
              <Form.Control
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Enter price"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <strong>Rating</strong>
              </Form.Label>
              <br />
              <Rating
                value={rating}
                precision={0.5}
                name="simple-controlled"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <strong>Count In Stock</strong>
              </Form.Label>
              <Form.Control
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
                type="number"
                placeholder="Enter count in stock"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <strong>Image</strong>
              </Form.Label>
              <Form.Control
                value={image}
                onChange={(e) => setImage(e.target.value)}
                type="text"
                placeholder="Enter image"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                editProduct(product._id, {
                  name,
                  description,
                  price,
                  rating,
                  countInStock,
                  image,
                })
              );
              handleClose();
            }}
          >
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateProduct;
