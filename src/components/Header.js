import React, {Component} from "react";
import {Button, Form, FormControl, Container, Navbar, Nav} from "react-bootstrap";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import "../styles/header.css"

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md"  variant="dark" className="navbar">
                    <Container>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> All news </Nav.Link>
                                <Nav.Link href="/players"> Players </Nav.Link>
                                <Nav.Link href="/stadium"> Stadium </Nav.Link>
                                <Nav.Link href="/catalog"> Catalog </Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="search"
                                    className="mr-sm-2"
                                />
                                <Button variant="primary">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/catalog" component={Catalog}/>
                    </Switch>
                </Router>

            </>
        )

    }
}