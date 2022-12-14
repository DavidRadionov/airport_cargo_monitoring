import { Button, Col, Container, Nav, Navbar, Row, Tab } from "react-bootstrap";
import ModuleQRCodeCreator from "./ModuleQRCodeCreator";
import ModuleMapBaggage from "./ModuleMapBaggage";
import { useState } from "react";
import ModuleControlSchemes from "../admin/ModuleControlSchemes";
import ModuleControlConnection from "../admin/ModuleControlConnection";
import ModuleControlEmployee from "../admin/ModuleControlEmployee";
import ModuleProfile from "../base/ModuleProfile";
import { text } from "stream/consumers";
import ModuleHome from "./ModuleHome";
import ModuleInfo from "../base/ModuleInfo";
import ModuleContacts from "../base/ModuleContacts";
import { User } from "../objects/description";
import Loading from "../ui/Loading";

function ModuleEmployee(props: {employee: User}) {
    const [statePage, setStatePage] = useState("");
    const [user, setUser] = useState<User>(props.employee);
    const toStatePage = (choice: string) => {
        setStatePage(choice);
    }
    const isPage = () => {
        switch (statePage) {
            case "home": return <ModuleHome personal_number={props.employee.personal_number}/>;
            case "profile": return <ModuleProfile user={user}/>;
            case "info": return <ModuleInfo/>;
            case "contacts": return <ModuleContacts emailUser={user.email}/>;
            default: return <ModuleHome  personal_number={props.employee.personal_number}/>;
        }
    }
    if (user) {
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

export default ModuleEmployee;