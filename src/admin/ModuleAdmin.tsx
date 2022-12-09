import { useEffect, useState } from "react";
import { Button, Col, Container, Form, FormSelect, Nav, Navbar, Row, Tab, } from "react-bootstrap";
import ModuleControlSchemes from "./ModuleControlSchemes";
import ModuleControlConnection from "./ModuleControlConnection";
import ModuleControlEmployee from "./ModuleControlEmployee";
import { User } from "../objects/description";

function ModuleAdmin(props: {admin: User}) {

    const [statePage, setStatePage] = useState("");

    const toStatePage = (choice: string) => {
        setStatePage(choice);
    }

    const isPage = () => {
        switch (statePage) {
            case "schemes": return <ModuleControlSchemes/>;
            case "connections": return <ModuleControlConnection/>;
            case "employee": return <ModuleControlEmployee/>;
            default: return <ModuleControlSchemes/>;
        }
    }

    return (
        <div>
            <Navbar bg={"primary"} variant={"dark"}>
                <Container>
                    <Nav className="me-lg-auto">
                        <Nav.Link className="navLinkAdmin" href={"#schemes"} onClick={() => toStatePage("schemes")}>Схемы</Nav.Link>
                        <Nav.Link className="navLinkAdmin" href={"#connections"} onClick={() => toStatePage("connections")}>Связи</Nav.Link>
                        <Nav.Link className="navLinkAdmin" href={"#employee"} onClick={() => toStatePage("employee")}>Сотрудники</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {
                isPage()
            }
        </div>
    );
}

export default ModuleAdmin;