import { useState } from "react";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import { getUserByPassword } from "../API";
import ModuleControlEmployee from "../admin/ModuleControlEmployee";
import ModuleAdmin from "../admin/ModuleAdmin";
import ModuleEmployee from "../employee/ModuleEmployee";
import { User } from "../objects/description";

function ModuleLogin () {
    const [id, setID] = useState("");
    const [user, setUser] = useState<User>();
    const logIN = () => {
        if (id !== "") {
            const result = getUserByPassword(id);
            result.then(res => {
                setUser(res as User);
            }).catch(() => {
                console.log("Error in fetch on authorization");
            })
            // alert(user.name);
        } else {
            alert("Введите свой личный номер");
        }
    }
    if (user) {
        if (user.role === 1) {
            return <ModuleEmployee employee={user}/>;
        } else if (user.role === 2) {
            return <ModuleAdmin admin={user}/>;
        }
    }
    return (
        <div style={{position: "absolute", marginTop: "20%", marginLeft: "40%"}}>
            <Alert >
                {/*<Form.Group style={{ width: 300, display: "flex", flexDirection: "row"}}>*/}
                <Alert.Heading>Личный номер</Alert.Heading>
                    {/*<Form.Label style={{}}>Личный номер</Form.Label>*/}
                <div style={{ width: 380, display: "flex", flexDirection: "row"}}>
                    <Form.Control style={{marginBottom: 5,fontSize: 20}} type="text" placeholder="Введите ваш личный номер" onChange={(name) => setID(name.target.value)}/>
                    <Button style={{marginLeft: 10, fontSize: 20}} variant="info" onClick={logIN}>Войти</Button>
                </div>

            </Alert>
        </div>
    );
}

export default ModuleLogin;