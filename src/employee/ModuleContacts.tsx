import { Alert, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Message } from "../objects/description";
import { sendMessage } from "../API";

function ModuleContacts(props: {emailUser: string}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("");
    const [codeError, setCodeError] = useState(0);

    const send = function () {
        if (name !== "" && email !== "" && message !== "" && codeError !== 0) {
            let messageObject = new Message();
            messageObject.name = name;
            messageObject.email = props.emailUser;
            messageObject.message = message;
            messageObject.codeError = codeError;
            messageObject.recipientEmail = email;
            sendMessage(messageObject);
            alert("Сообщение отправлено");
        }
    }

    return (
        <div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div>
                    <Alert style={{width: 900, marginLeft: 350, marginTop: 100}}>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <Form.Group style={{flex: 1}} className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{fontSize: 20}}>Имя *</Form.Label>
                                <Form.Control onChange={(event: any ) => setName(event.target.value)} type="email" placeholder="Введите ваше имя" />
                            </Form.Group>

                            <Form.Group style={{flex: 1, marginLeft: 50}} className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{fontSize: 20}}>Адрес эл. почты *</Form.Label>
                                <Form.Control onChange={(event: any ) => setEmail(event.target.value)} type="email" placeholder="Введите email администратора" />
                            </Form.Group>
                        </div>

                        <div style={{display: "flex", flexDirection: "row"}}>
                        <Form.Group style={{flex: 1}} className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{fontSize: 20}}>Сообщение *</Form.Label>
                            <Form.Control onChange={(event: any) => setMessage(event.target.value)} style={{height: 170, marginTop: 10}} as="textarea" placeholder="Сообщение" />
                        </Form.Group>
                        <Form.Group  style={{flex: 1, marginLeft: 50}}>
                            <div className="mb-3">
                                <Form.Label style={{fontSize: 20}}>Уровень проблемы *</Form.Label>
                                <div style={{marginLeft: 10, flex: 1, marginTop: 30, marginBottom: 10}}>
                                    <Form.Check
                                        onClick={() => setCodeError(1)}
                                        label="Информация"
                                        name="group1"
                                        type={"radio"}
                                    />
                                    <Form.Check
                                        onClick={() => setCodeError(2)}
                                        label="Предупреждение"
                                        name="group1"
                                        type={"radio"}
                                    />
                                    <Form.Check
                                        onClick={() => setCodeError(3)}
                                        label="Опасность"
                                        name="group1"
                                        type={"radio"}
                                    />
                                </div>

                            </div>
                            <Button onClick={send} style={{fontSize: 20, marginTop: 10}} variant="primary" type="button">
                                Отправить сообщение
                            </Button>
                        </Form.Group>
                        </div>
                    </Alert>
                </div>
            </div>
            <Alert style={{marginLeft: 100, marginTop: 180}}>
                <p style={{fontSize: 20}}>Горячая линия в случае особой необходимости и особо критичных проблем:</p>
                <div style={{marginLeft: 5, fontSize: 20}}>
                    <div className="phone"><a href="tel:+375 29 299 29 29">+375 29 299 29 29</a> <a style={{marginLeft:40}} href="tel:+375 29 444 44 44">+375 29 444 44 44</a></div>
                    <div className="phone"><a href="tel:+375 33 333 33 33">+375 33 333 33 33</a> <a style={{marginLeft:40}} href="tel:+375 29 555 55 55">+375 29 555 55 55</a></div>
                </div>
            </Alert>
        </div>
    )
}

export default ModuleContacts;