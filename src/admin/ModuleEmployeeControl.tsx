import { Alert, Button } from "react-bootstrap";
import { getUsers } from "../API";
import { useEffect, useState } from "react";
import { User } from "../objects/description";
import ModuleProfile from "../base/ModuleProfile";

function ModuleEmployeeControl() {

    const [users, setUsers] = useState<User[]>()

    const update = () => {
        const result = getUsers();
        result.then(list => {
            setUsers(list as User[]);
        });
    }

    const addUser = () => {
        const user = new User();
        const usersProto = users?.map(user => {
            return user
        });
        user.target = "create";
        user.role = 1;
        usersProto?.push(user);

        setUsers(usersProto)
    }

    useEffect(() => {
        update();
    }, [])

    return (
        <div>
            <Alert style={{display: "flex", flexDirection: "row", marginTop: -50, width: 740, maxHeight: 700, overflowY: "scroll"}}>
                <Button onClick={addUser}>Добавить юзера</Button>
                <Button style={{flex: 1, marginLeft: 20}} onClick={update}>Обновить</Button>
            </Alert>
            <Alert variant={"info"} style={{display: "flex", flexDirection: "column", width: 740, maxHeight: 700, overflowY: "scroll"}}>
                {users?.map(user => {
                    return (
                        <ModuleProfile mod={"pro"} user={user} left={0} top={10}/>
                    );
                })}
            </Alert>
        </div>

    );

}

export default ModuleEmployeeControl;