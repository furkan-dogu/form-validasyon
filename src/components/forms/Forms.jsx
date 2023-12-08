import { Button, Container, Form } from "react-bootstrap";
import "./form.css";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Cards from "../card/Cards";

const Forms = () => {
  const [data, setData] = useState({
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    image: "",
    password: "",
  });

  const [showCards, setShowCards] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [kosul, setKosul] = useState(false);

  const [clickButton, setClickButton] = useState(false);

  const { username, email, firstname, lastname, image, password } = data;

  const handleData = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleFormStart = () => {
    if (
      password.length < 8 ||
      username.trim().length < 3 ||
      firstname.trim().length < 3 ||
      lastname.trim().length < 3
    ) {
      setKosul(true);
    } else {
      setKosul(false);
    }
  };

  const handleStop = () => {
    setTimeout(() => {
      setKosul(false);
    }, 100);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setShowCards(true);

    setTimeout(() => {
      setClickButton(false);
    }, 500);

    setClickButton(true);
  };

  return (
    <Container className="mt-4 w-75">
      <Form onSubmit={handleFormSubmit} className="container">
        <Form.Group className="mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            value={email}
            id="email"
            onChange={handleData}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            required
            value={username}
            id="username"
            onChange={handleData}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            required
            value={firstname}
            id="firstname"
            onChange={handleData}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            required
            value={lastname}
            id="lastname"
            onChange={handleData}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter Image url"
            required
            value={image}
            id="image"
            onChange={handleData}
          />
        </Form.Group>

        <InputGroup className="d-flex flex-column mt-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <div className="d-flex ">
            <Form.Control
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              placeholder="Password"
              aria-label="password"
              aria-describedby="basic-addon2"
              onChange={handleData}
              required
            />
            <Button
              className="w-25 d-flex justify-content-center"
              variant={showPassword ? "outline-success" : "outline-danger"}
              id="button-addon2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hidden" : "Show"}
            </Button>
          </div>
        </InputGroup>
        <Form.Group
          className="d-flex justify-content-center"
          onMouseLeave={handleStop}
        >
          <Button
            className={`btn mt-3 ${kosul ? "animate" : ""}`}
            variant="primary"
            type="submit"
            onMouseMove={handleFormStart}
            disabled={kosul}
          >
            {clickButton ? "Loading..." : "Submit"}
          </Button>
        </Form.Group>
      </Form>

      <div className="d-flex justify-content-center">
        {showCards && <Cards veri={data} />}
      </div>
    </Container>
  );
};

export default Forms;
