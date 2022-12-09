import { Col, Nav, Row, Tab } from "react-bootstrap";
import ModuleQRCodeCreator from "./ModuleQRCodeCreator";
import ModuleMapBaggage from "./ModuleMapBaggage";
import ModuleNotifications from "./ModuleNotifications";

function ModuleHome (props: {personal_number: string}) {
    return (
        <div style={{
            marginTop: 100,
            marginLeft: 100,
            marginRight: 100,
            maxHeight: "100%",
            maxWidth: "100%"
        }}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav style={{fontSize: 20}} variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Создать QR код</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Грузы</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Уведомления</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content style={{marginLeft: 100}}>
                            <Tab.Pane eventKey="first" >
                                <ModuleQRCodeCreator/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <ModuleMapBaggage/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <ModuleNotifications personal_number={props.personal_number}/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default ModuleHome;