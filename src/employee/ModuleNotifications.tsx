import { useEffect, useState } from "react";
import { getNotificationsByID } from "../API";
import { Alert, Button } from "react-bootstrap";
import { Notification } from "../objects/description";

function ModuleNotifications(props: {personal_number: string}) {

    const [notifications, setNotifications] = useState<Notification[]>();

    const update = () => {
        const result: any = getNotificationsByID(props.personal_number);
        result.then((notifications: any) => {
            setNotifications(notifications);
        })
    }

    const getVariantMessage = (code: number) => {
        if (code === 1) {
            return "info";
        } else if (code === 2) {
            return "warning";
        }
        return "danger";
    }

    useEffect(() => {
        update()
    }, [])
    // border: "2px solid blue",
    return (
        <div style={{textAlign: "justify"}}>
            <div style={{ display: "flex", flexDirection: "row"}}>
                <Alert style={{display: "flex", width: 900, flexDirection: "column", backgroundColor: "#F7FAFF"}} variant={'light'}>
                    <Alert.Heading>Цвета и их обозначения</Alert.Heading>
                    <div style={{display: "flex", flexDirection: "row"}} >
                        <Alert style={{flex: 1}} variant={"info"}>Информация</Alert>
                        <Alert style={{marginLeft: 5, flex: 1}} variant={"warning"}>Предупреждение</Alert>
                        <Alert style={{marginLeft: 5, flex: 1}}  variant={"danger"}>Опасность</Alert>
                        <Button variant="info" style={{marginLeft: 100, marginRight: 15, marginBottom: 20}} onClick={update}>Обновить
                            уведомления</Button>
                    </div>

                </Alert>

            </div>

            <Alert variant={"light"} style={{backgroundColor: "#F7FAFF", height: 600, maxHeight: 700, maxWidth: 900, overflowY: "scroll"}}>
                {notifications?.map(notification => {
                    return (
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            borderRadius: "20px",
                            margin: 15,
                            marginBottom: 20,
                            color: "white",
                            fontSize: 20,
                        }}>
                            <Alert variant={getVariantMessage(notification.codeError)}>
                                <div style={{fontSize: 20, margin: 10, marginBottom: -10}}>
                                    <text>От кого: {notification.name}</text>
                                    <text style={{marginLeft: 20}}>Почта: <a style={{color: "black"}}
                                                                             href={"mailto:" + notification.email}>{notification.email}</a>
                                    </text>
                                </div>
                                {/*<text style={{margin: 10}}>Уровень проблемы: {notification.levelError}</text>*/}
                                <div style={{
                                    margin: 10,
                                    display: "flex",
                                    flexDirection: "column",
                                    textAlign: "justify",
                                }}>
                                    <text>Сообщение: {notification.message}</text>

                                </div>
                            </Alert>

                        </div>
                    )
                })}
            </Alert>
        </div>

    );
}

export default ModuleNotifications;