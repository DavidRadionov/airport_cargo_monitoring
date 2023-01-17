import { Button, Col, Form, FormSelect, Nav, Row, Tab } from "react-bootstrap";
import { useEffect, useState } from "react";
import { addCity, addScheme, getCities, getSchemes, removeCity, removeScheme } from "../API";
import Loading from "../ui/Loading";
import { text } from "stream/consumers";
import ModuleCitiesControl from "./ModuleCitiesControl";


class schemeForm {
    name: string = "";
    // points: string[] = []
}

function ModuleControlSchemes() {

    // const [nameSchemeForm, setNameSchemeForm] = useState("");
    // const [listPointsSchemeForm, setListPointsSchemeForm] = useState();
    // const [schemeByRemove, setSchemeByRemove] = useState("");
    // const [schemeByEdit, setSchemeByEdit] = useState("");
    const [schemes, setSchemes] = useState([]);
    const [schemeByAdd, setSchemeByAdd] = useState("");
    const [schemeByRemove, setSchemeByRemove] = useState("");
    const [loading, setLoading] = useState(true);


    // const viewCreateSchemeForm = () => {
    //
    // }
    //
    // const viewEditSchemeForm = () => {
    //
    // }
    //
    // const addPointToScheme = () => {
    //
    // }
    //
    // const createScheme = () => {
    //
    // }


    const actionAddScheme = () => {
        if (schemeByAdd !== "") {
            addScheme(schemeByAdd);
            update();
        }
    }

    const actionRemoveSchemeByName = () => {
        if (schemeByRemove !== "") {
            removeScheme(schemeByRemove);
            update();
        }
    }

    const update = () => {
        const result: any = getSchemes();
        result.then((schemes: any) => {
            setSchemes(schemes);
        })
        setLoading(false);
    }

    const initialSchemes = () => {
        update();
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
            <div>
                <Form style={{marginLeft: 50, width: 400}}>
                    <Form.Group>
                        <Form.Label>Добавить новую схему</Form.Label>
                        <div style={{flexDirection: "row", display: "flex"}}>
                            <Form.Control onChange={(event) => setSchemeByAdd(event.target.value)}></Form.Control>
                            <Button style={{marginLeft: 5}} onClick={actionAddScheme}>Добавить</Button>
                        </div>
                    </Form.Group>
                    <Form.Group style={{marginTop: 5}}>
                        <Form.Label>Удалить схему</Form.Label>
                        <div style={{flexDirection: "row", display: "flex"}}>
                            <FormSelect onChange={(event) => setSchemeByRemove(event.target.value)}>
                                <option></option>
                                {schemes?.map(scheme => {
                                    return <option value={scheme}>{scheme}</option>
                                })}
                            </FormSelect>
                            <Button style={{marginLeft: 5}} onClick={actionRemoveSchemeByName}>Удалить</Button>
                        </div>
                    </Form.Group>
                </Form>
                <div style={{marginLeft: 60, marginTop: 50, width: "100%", height: "100%", display: "flex"}}>
                    <div >
                        <button onClick={viewSchemes} style={{
                            textAlign: "center",
                            width: 300,
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
                            width: 300,
                            backgroundColor: "#5986E6",
                        }}>
                            {schemes?.map(scheme => {

                                return <div style={{display: "flex"}}>
                                    <li style={{
                                        listStyleType: "none",
                                        color: "white",
                                        marginTop: 5,
                                        width: 300,
                                        marginRight: 5,
                                        marginBottom: 5,
                                        marginLeft: -25,
                                        backgroundColor: "#5f91fd"
                                    }}>
                                        <text style={{marginLeft: "auto", marginRight: "auto"}}>{scheme}</text>
                                    </li>
                                </div>
                            })}
                        </ul>
                    </div>
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

