import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { getUserByPassword } from "../API";
import ModuleAdmin from "../admin/ModuleAdmin";
import ModuleEmployee from "../employee/ModuleEmployee";
import { User } from "../objects/description";

function ModuleLogin () {
    const [id, setID] = useState("");
    const [user, setUser] = useState<User>();
    const [error, setError] = useState("");

    const onKey = (event: any) => {
        console.log(event.target.value);
        if (event.key === 'Enter') {
            logIN();
        }
    }

    const logIN = () => {
        if (id !== "") {
            const result = getUserByPassword(id);
            result.then(res => {
                console.log(res);
                if (res.error) {
                    setError(res.error);
                } else {
                    setUser(res as User);
                }
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
            <Alert.Heading>{error}</Alert.Heading>
            <Alert>
                {/*<Form.Group style={{ width: 300, display: "flex", flexDirection: "row"}}>*/}
                <Alert.Heading>Личный номер</Alert.Heading>
                    {/*<Form.Label style={{}}>Личный номер</Form.Label>*/}
                <div style={{ width: 380, display: "flex", flexDirection: "row"}}>
                    <Form.Control onKeyDown={(event) => onKey(event)} style={{marginBottom: 5,fontSize: 20}} type="text" placeholder="Введите ваш личный номер" onChange={(name) => setID(name.target.value)}/>
                    <Button style={{marginLeft: 10, fontSize: 20}} variant="info" onClick={logIN}>Войти</Button>
                </div>

            </Alert>
        </div>
    );
}

export default ModuleLogin;