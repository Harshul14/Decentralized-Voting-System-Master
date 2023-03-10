import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import {Routes,Route} from 'react-router-dom';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import '../css/LoginForm.css';
import Home from "./authentication/Home";
import ProtectedRoute from "./authentication/ProtectedRoute";
import {UserAuthContextProvider} from './authentication/UserAuthContext';
import UserDashboard from "./UserDashboard";
// import "bootstrap/dist/css/bootstrap.min.css";
import '../css/LoginForm.css';

function LoginForm(props){
    return(
        <div className="login_form">
        <Container >
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/user/dashboard"
                element={
                  <ProtectedRoute>
                    <UserDashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login title={props.title} />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
    </div>
    );
}

export default LoginForm;