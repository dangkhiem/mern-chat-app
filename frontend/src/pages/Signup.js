import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import botImage from "../assets/bot.jpg";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState([]);

    // image upload state
    const [image, setImage] = useState(null);
    const [uploadImage, setUploadImage] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const validateImg = (e) => {
        const file = e.target.files[0];
        if (file.size > 1048576) {
            return alert("Max file size is 1mb");
        }
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const handleSignup = (e) => {
        e.preventDefault();
        console.log({
            name,
            email,
            password,
            imagePreview,
        });
        return;
    };

    return (
        <Row className="mx-0">
            <Col
                md={7}
                className="d-flex align-items-center flex-direction-cloumn"
            >
                <Form
                    className="mx-auto"
                    style={{ width: "80%", maxWidth: 500 }}
                    onSubmit={handleSignup}
                >
                    <h1 className="text-center">Create account</h1>
                    <div className="signup-profile-pic__container">
                        <img
                            src={imagePreview || botImage}
                            className="signup-profile-pic"
                            alt=""
                        />
                        <label
                            htmlFor="image-upload"
                            className="image-upload-label"
                        >
                            <i className="fas fa-plus-circle add-picture-icon"></i>
                        </label>
                        <input
                            type="file"
                            id="image-upload"
                            hidden
                            accept="image/png, image/jpeg"
                            name="image"
                            onChange={validateImg}
                        />
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Your Name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Create account
                    </Button>
                    <div className="py-4">
                        <p className="text-center">
                            Already have an account ?{" "}
                            <Link to="/login">Login</Link>
                        </p>
                    </div>
                </Form>
            </Col>
            <Col md={5} className="signup__bg"></Col>
        </Row>
    );
}

export default Signup;
