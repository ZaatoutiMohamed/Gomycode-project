import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";
import { addnewProduct } from "../Redux/Actions/productActions";
import Rating from "@mui/material/Rating";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [image, setImage] = useState("");
  return (
    <div>
      <Button
        className="textAlign:Center"
        variant="outline-success"
        onClick={handleShow}
      >
        Add New Product
      </Button>
      <br />
      <br />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                <strong>Description</strong>
              </Form.Label>
              <Form.Control
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
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Enter price"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <strong>
                  <strong>Rating</strong>Rating
                </strong>
              </Form.Label>
              <br />
              <Rating
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
                addnewProduct({
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

export default AddProduct;
