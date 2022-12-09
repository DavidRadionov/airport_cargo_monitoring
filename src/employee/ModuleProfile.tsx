import { Alert, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { EditText, EditTextarea } from 'react-edit-text';
import { User } from "../objects/description";
import { updateUser } from "../API";

function ModuleProfile (props: {user: User}) {
    const [name, setName] = useState(props.user.name);
    const [phone, setPhone] = useState(props.user.phone);
    const [email, setEmail] = useState(props.user.email);

    const update = function () {
        alert(name + ":" + phone + ":" + email);
        if (name !== "" && phone !== "" && email !== "") {
            props.user.name = name;
            props.user.phone = phone;
            props.user.phone = phone;
            updateUser(props.user);
        }
    };



    return (
        <div>

            <Alert style={{width: 700, fontSize: 20, marginLeft: 350, marginTop: 100}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <Alert>
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarXFXlU3auvYEOOyKAnggkGZ2WJBQcv41qg&usqp=CAU"}/>
                    </Alert>
                    <Alert>
                        {/*<EditText showEditButton onChange={() => alert("1")} placeholder={"dasdasdas"}/>*/}
                        <Form.Group style={{display: "flex", flexDirection: "row"}}>
                            <Form.Label>Имя: </Form.Label>
                            <Form.Control className={"some_input"} style={{marginLeft: 10}} placeholder={props.user.name} onChange={(event: any) => setName(event.target.value)}/>
                        </Form.Group>
                        <Form.Group style={{display: "flex", flexDirection: "row", marginTop: 5}}>
                            <Form.Label >Номер телефона: </Form.Label>
                            <Form.Control  className={"some_input"} style={{marginLeft: 10, flex: 1}}  type="tel" placeholder={props.user.phone} onChange={(event: any) => setPhone(event.target.value)}/>
                        </Form.Group>
                        <Form.Group style={{display: "flex", flexDirection: "row", marginTop: 5}}>
                            <Form.Label>Почта: </Form.Label>
                            <Form.Control className={"some_input"} style={{marginLeft: 10}}  type="email" placeholder={props.user.email} onChange={(event: any) => setEmail(event.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{marginTop: 10, marginBottom: 5}}>Личный номер: {props.user.personal_number}</Form.Label>
                        </Form.Group>
                    </Alert>
                </div>


             <Button onClick={update}>Обновить</Button>
            </Alert>
        </div>
    )
}

export default ModuleProfile;