import { useEffect, useState } from "react";
import { Button, Col, Container, Form, FormSelect, Nav, Navbar, Row, Tab, } from "react-bootstrap";
import ModuleControlSchemes from "./ModuleControlSchemes";
import ModuleControlConnection from "./ModuleControlConnection";
import ModuleControlEmployee from "./ModuleControlEmployee";
import { User } from "../objects/description";
import ModuleProfile from "../base/ModuleProfile";
import ModuleInfo from "../base/ModuleInfo";
import ModuleContacts from "../base/ModuleContacts";
import ModuleHome from "./ModuleHome";
import Loading from "../ui/Loading";

function ModuleAdmin(props: {admin: User}) {
    const [admin, setAdmin] = useState(props.admin);
    const [statePage, setStatePage] = useState("");
    const toStatePage = (choice: string) => {
        setStatePage(choice);
    }
    const isPage = () => {
        switch (statePage) {
            case "home": return <ModuleHome personal_number={admin.personal_number}/>;
            case "profile": return <ModuleProfile user={admin}/>;
            case "info": return <ModuleInfo/>;
            case "contacts": return <ModuleContacts emailUser={admin.email}/>;
            default: return <ModuleHome  personal_number={admin.personal_number}/>;
        }
    }
    if (admin) {
        return (
            <div>
                <Navbar style={{height: 90}} bg={"primary"} variant={"dark"}>
                    <Navbar.Brand style={{fontSize: 25, marginLeft: 100}} href={"#employee"}>Аэропорт Минск</Navbar.Brand>
                    <Container>
                        <Nav className="me-lg-auto" style={{fontSize: 25}}>
                            <Nav.Link  href={"#employee"} onClick={() => toStatePage("home")}>Управление</Nav.Link>
                            <Nav.Link  href={"#profile"} onClick={() => toStatePage("profile")}>Профиль</Nav.Link>
                            <Nav.Link  href={"#info"} onClick={() => toStatePage("info")}>Информация</Nav.Link>
                            <Nav.Link  href={"#contacts"} onClick={() => toStatePage("contacts")}>Обратная связь</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                {

                    isPage()


                }
            </div>

        );
    } else {
        return <Loading/>;
    }
}

export default ModuleAdmin;