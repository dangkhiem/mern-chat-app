import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormLogin } from "../schemes";
import ValidationMessage from "../components/ValidationMessage.js";

function Login() {
    const { register, handleSubmit, errors } = useFormLogin();
    const onLogin = (data) => {
        console.log(data);
    };

    return (
        <Row className="mx-0">
            <Col md={5} className="login__bg"></Col>
            <Col
                md={7}
                className="d-flex align-items-center flex-direction-cloumn"
            >
                <Form
                    className="mx-auto"
                    style={{ width: "80%", maxWidth: 500 }}
                    onSubmit={handleSubmit(onLogin)}
                >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            defaultValue=""
                            {...register("email")}
                        />
                        <ValidationMessage msgValue={errors.email} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            defaultValue=""
                            {...register("password")}
                        />
                        <ValidationMessage msgValue={errors.password} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <div className="py-4">
                        <p className="text-center">
                            Don't have an account ?{" "}
                            <Link to="/signup">Signup</Link>
                        </p>
                    </div>
                </Form>
            </Col>
        </Row>
    );
}

export default Login;
