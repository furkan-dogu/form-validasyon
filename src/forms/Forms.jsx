
import { Button, Form } from "react-bootstrap";
import "./form.css";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Cards from '../card/Cards';

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

  const { username, email, firstname, lastname, image, password } = data;

  const handleData = (e) => {
    setData({...data, [e.target.id]:e.target.value})
  }


  const handleFormSubmit = (e) => {
    e.preventDefault()

    if(password.length < 8) {
        alert("Şifre en az 8 haneli olmalı")
    }

    const emailParts = email.split("@")
    const emailPartsDoc = emailParts[1].split(".")
    if((emailPartsDoc.length > 3) || (emailPartsDoc.length <= 1)) {
        alert("Lütfen geçerli bir mail adresi yazınız.")
    }

    if(username.trim().length < 3 || firstname.trim().length < 3 || lastname.trim().length < 3) {
        alert("isim en az 3 karakter oluşturmalı")
    }

    setShowCards(true);
  }

  return (
    <div className="container mt-4 p-5">
      <Form onSubmit={handleFormSubmit}>
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

        <Form.Group  className="mt-3">
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

        <Form.Group  className="mt-3">
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

        <Form.Group  className="mt-3">
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

        <Form.Group  className="mt-3"> 
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
            <Button variant="outline-secondary" id="button-addon2" onClick={() => setShowPassword(!showPassword)}>
              Show/Hidden
            </Button>
          </div>
        </InputGroup>
        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>

        <div className="d-flex justify-content-center">
            {showCards && <Cards veri={data} />}
        </div>
      
      
    </div>
  );
};

export default Forms;
