import { Button, Col, Form, FormSelect, Nav, Row, Tab } from "react-bootstrap";
import { useEffect, useState } from "react";
import { addCity, getCities, getSchemes, removeCity } from "../API";
import Loading from "../ui/Loading";
import { text } from "stream/consumers";
import ModuleControlCities from "./ModuleControlCities";


class schemeForm {
    name: string = "";
    points: string[] = []
}

function ModuleControlSchemes() {

    const [nameSchemeForm, setNameSchemeForm] = useState("");
    const [listPointsSchemeForm, setListPointsSchemeForm] = useState();
    const [schemeByRemove, setSchemeByRemove] = useState("");
    const [schemeByEdit, setSchemeByEdit] = useState("");
    const [schemes, setSchemes] = useState<schemeForm[]>();
    const [loading, setLoading] = useState(true);

    const viewCreateSchemeForm = () => {

    }

    const viewEditSchemeForm = () => {

    }

    const addPointToScheme = () => {

    }

    const createScheme = () => {

    }

    const actionRemoveScheme = (scheme: string) => {
        removeCity(scheme);
    }

    const actionEditScheme = (scheme: string) => {
        console.log(scheme);
    }

    const addScheme = () => {

    }

    const initialSchemes = () => {
        const result: any = getSchemes();
        result.then((schemes: any) => {
            setSchemes((schemes as schemeForm[]));
        })
        setLoading(false);
    }

    useEffect(() => {
        initialSchemes();
    }, []);


    const viewSchemes = () => {
        let menu: any = document.querySelector(".list-schemes");
        menu.classList.toggle("list-schemes-active");
    }


    if (loading) {
        return <Loading/>;
    } else {
        return (
            <div style={{marginLeft: 20, marginTop: 50, width: "100%", height: "100%", display: "flex"}}>
                <div style={{width: "30%", height: "100%"}}>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        {/*<ModuleControlCities/>*/}
                                        {/*<Sonnet />*/}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        {/*<Sonnet />*/}
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>


                <div style={{ marginLeft: 50, right: 0}}>
                    <button onClick={viewSchemes} style={{
                        textAlign: "center",
                        width: 500,
                        cursor: "pointer",
                        backgroundColor: "#5f91fd",
                        color: "white",
                        border: 0
                    }}>Список всех схем
                    </button>
                    <ul className="list-schemes" style={{
                        marginTop: 5,
                        display: "none",
                        position: "relative",
                        overflowY: "scroll",
                        maxHeight: 700,
                        width: 500,
                        backgroundColor: "#5986E6",
                    }}>
                        {schemes?.map(scheme => {

                            return <div style={{display: "flex"}}>
                                <li style={{
                                    listStyleType: "none",
                                    color: "white",
                                    width: "75%",
                                    marginTop: 5,
                                    marginBottom: 5,
                                    marginLeft: -25,
                                    marginRight: 5,
                                    backgroundColor: "#5f91fd"
                                }}>
                                    <text style={{marginLeft: "auto", marginRight: "auto"}}>{scheme?.name}</text>

                                </li>
                                <Button onClick={() => actionRemoveScheme(scheme?.name)} variant={"light"}>удалить</Button>
                                <Button style={{marginLeft: 2, right: 0}} variant={"light"} onClick={() => actionEditScheme(scheme?.name)}>изменить</Button>
                            </div>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ModuleControlSchemes;

// <Form.Group>
//     <Form.Label>Удалить схему</Form.Label>
//     <div style={{flexDirection: "row", display: "flex"}}>
//         <FormSelect onChange={(event) => setSchemeByRemove(event.target.value)}>
//             <option></option>
//             {schemes?.map(element => {
//                 return <option value={element}>{element}</option>
//             })}
//         </FormSelect>
//         <Button style={{marginLeft: 5}} onClick={removeScheme}>Удалить</Button>
//     </div>
// </Form.Group>

// <Form.Group style={{marginTop: 5}}>
//     <Form.Label>Изменить схему</Form.Label>
//     <div style={{flexDirection: "row", display: "flex"}}>
//         <FormSelect onChange={(event) => setSchemeByEdit(event.target.value)}>
//             <option></option>
//             {schemes?.map(element => {
//                 return <option value={element}>{element}</option>
//             })}
//         </FormSelect>
//         <Button style={{marginLeft: 5}} onClick={viewEditSchemeForm}>Изменить</Button>
//     </div>
// </Form.Group>

// <Form.Group>
//     <Form.Label>Название схемы</Form.Label>
//     <div style={{flexDirection: "row", display: "flex"}}>
//         <Form.Control></Form.Control>
//         <Button style={{marginLeft: 5, flex: 1}} onClick={viewCreateSchemeForm}>Создать</Button>
//     </div>
// </Form.Group>

/*
      <Form style={{marginLeft: 20, width: 300}}>
                    <button onClick={viewCreateSchemeForm} style={{
                        textAlign: "center",
                        width: 300,
                        cursor: "pointer",
                        backgroundColor: "#5f91fd",
                        color: "white",
                        border: 0
                    }}>Окно для создания
                    </button>

                    <Form.Group style={{
                        marginTop: 20, borderRadius: "10px 10px 10px 10px",
                        border: "2px solid blue"
                    }}>
                        <div style={{margin: 10}}>
                            <div style={{textAlign: "center"}}>
                                <Form.Label>Схема</Form.Label>
                                <div>
                                    <text>Название схемы</text>
                                    <Form.Control style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}
                                                  onChange={(event) => setNameSchemeForm(event.target.value)}></Form.Control>
                                </div>
                            </div>

                            <div style={{marginTop: 5, marginLeft: 30}}>
                                <text>Новая точка</text>
                                <div style={{display: "flex"}}>
                                    <Form.Control></Form.Control>
                                    <Button style={{marginLeft: 10, marginRight: 30}}>Добавить</Button>
                                </div>
                            </div>

                            <div style={{marginTop: 20}}>
                                <text>Список точек схемы</text>

                            </div>
                            <Button style={{marginLeft: "auto"}} onClick={createScheme}>Создать схему</Button>
                        </div>


                    </Form.Group>
                </Form>

                <Form style={{marginLeft: 20, width: 300}}>


                    <Form.Group style={{
                        marginTop: 50, borderRadius: "10px 10px 10px 10px",
                        border: "2px solid blue"
                    }}>
                        <div style={{margin: 10}}>
                            <div style={{textAlign: "center"}}>
                                <Form.Label>Схема</Form.Label>
                                <div>
                                    <text>Название схемы</text>
                                    <Form.Control style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}
                                                  onChange={(event) => setNameSchemeForm(event.target.value)}></Form.Control>
                                </div>
                            </div>

                            <div style={{marginTop: 5, marginLeft: 30}}>
                                <text>Новая точка</text>
                                <div style={{display: "flex"}}>
                                    <Form.Control></Form.Control>
                                    <Button style={{marginLeft: 10, marginRight: 30}}>Добавить</Button>
                                </div>
                            </div>

                            <div style={{marginTop: 20}}>
                                <text>Список точек схемы</text>
                            </div>
                            <div style={{width: "100%"}}>
                                <Button style={{marginLeft: "auto", marginRight: "auto"}} onClick={createScheme}>Сохранить изменения</Button>
                            </div>

                        </div>


                    </Form.Group>
                </Form>
 */

