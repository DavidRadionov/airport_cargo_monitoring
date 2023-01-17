import { Alert, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { User } from "../objects/description";
import { updateUser } from "../API";

function ModuleProfile (props: {user: User, left: number, top: number, mod: string}) {
    const [name, setName] = useState(props.user.name);
    const [phone, setPhone] = useState(props.user.phone);
    const [email, setEmail] = useState(props.user.email);
    const [personal_number, setPersonalNumber] = useState(props.user.personal_number);

    const update = function () {
        alert(name + ":" + phone + ":" + email);
        if (name !== "" && phone !== "" && email !== "") {
            props.user.name = name;
            props.user.phone = phone;
            props.user.email = email;
            if (props.mod === "pro") {
                props.user.personal_number = personal_number;
            }
            updateUser(props.user);
        }
    };

    return (
        <div>
            <Alert style={{width: 700, fontSize: 20, marginLeft: (props.left !== 0)? props.left: 0, marginTop: (props.top !== 0)? props.top: 100}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <Alert>
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarXFXlU3auvYEOOyKAnggkGZ2WJBQcv41qg&usqp=CAU"}/>
                    </Alert>
                    <Alert style={{width: 400}}>

                        <Form.Group style={{display: "flex", flexDirection: "row"}}>
                            <Form.Label>Имя: </Form.Label>
                            <Form.Control className={"some_input"} style={{marginLeft: 10}} placeholder={name} onChange={(event: any) => setName(event.target.value)}/>
                        </Form.Group>
                        <Form.Group style={{display: "flex", flexDirection: "row", marginTop: 5}}>
                            <Form.Label >Номер телефона: </Form.Label>
                            <Form.Control className={"some_input"} style={{marginLeft: 10, flex: 1}} placeholder={phone} onChange={(event: any) => setPhone(event.target.value)}/>
                        </Form.Group>
                        <Form.Group style={{display: "flex", flexDirection: "row", marginTop: 5}}>
                            <Form.Label>Почта: </Form.Label>
                            <Form.Control className={"some_input"} style={{marginLeft: 10}} placeholder={email} onChange={(event: any) => setEmail(event.target.value)}/>
                        </Form.Group>
                        <Form.Group style={{display: "flex", flexDirection: "row", marginTop: 5}}>
                            <Form.Label>Роль: {(props.user.role === 2)? "Админ": "Сотрудник"} </Form.Label>
                        </Form.Group>
                        <Form.Group style={{marginTop: 5}}>
                            {(props.mod === "light")?  <Form.Label style={{marginTop: 20, marginBottom: 5}}>Личный номер: {props.user.personal_number}</Form.Label>:
                                <div style={{display: "flex", flexDirection: "row",}}>
                                    <Form.Label>Личный номер: </Form.Label>
                                    <Form.Control className={"some_input"} style={{marginLeft: 10}} placeholder={personal_number} onChange={(event: any) => setPersonalNumber(event.target.value)}/>
                                </div>
                            }
                        </Form.Group>
                    </Alert>
                </div>


             <Button onClick={update}>Обновить</Button>
            </Alert>
        </div>
    )
}

export default ModuleProfile;