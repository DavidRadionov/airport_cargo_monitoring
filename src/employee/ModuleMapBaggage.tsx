import { Alert, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import Select from "react-select";
import { getCargoByID, getCargoListID, removeCargoByID } from "../API";

class Point {
    name: string = "";
    numb = 0;
}

class Way {
    pointsClient: Point[] = [];
    pointsScheme: Point[] = [];
    hours = 0;
    minutes = 0;
    seconds = 0;
    positionClient: Point = new Point();
    positionScheme: Point = new Point();
    id = 0;
    schemeName = "";
    status = {
        message: "",
        code: 200,
    };
    name = "";
    email = "";
    phone?: string;
}

function ModuleMapBaggage() {
    const [idShow, setIDShow] = useState("");
    const [idRemove, setIDRemove] = useState("");
    const [cargoListID, setCargoListID] = useState([]);
    const [cargo, setCargo] = useState<Way| null>();


    const update = () => {
        let result: any = getCargoListID();
        result.then((list: any) => {
            console.log(list);
            setCargoListID(list);
        })
    }

    useEffect(() => {
       update();
    },[]);

    const remove = () => {
        if (idRemove !== "") {
            removeCargoByID(idRemove);
            update();
            if (idRemove === idShow) {
                setIDShow("");
                setCargo(null);
            }

        } else {
            alert("Выберите id груза для удаления");
        }
    }

    const show = () => {
        if (idShow !== "") {
            const cargo = getCargoByID(idShow);
            cargo.then((result: any) => setCargo(result));
        } else {
            alert("Выберите id груза для показа");
        }
    }

    const options = cargoListID.map((cargo) => {
        return {
            "value": cargo,
            "label": cargo
        };
    })
    return (
        <div>
            <Alert style={{display: "flex", flexDirection: "row"}}>
                <Alert style={{width: 500, }}>
                    <Alert.Heading style={{fontSize: 20}}>ID груза</Alert.Heading>
                    <div style={{flex: 1, display: "flex", flexDirection: "row"}}>
                        <Select options={options} placeholder="Введите ID груза"
                                onChange={(id: any) => setIDShow(id.value)}></Select>
                        <Button onClick={show} style={{marginLeft: 10}}>Показать груз</Button>
                    </div>
                </Alert>
                <Alert style={{width: 500, }}>
                    <Alert.Heading style={{fontSize: 20}}>ID груза</Alert.Heading>
                    <div style={{flex: 1, display: "flex", flexDirection: "row"}}>
                        <Select options={options} placeholder="Введите ID груза"
                                onChange={(id: any) => setIDRemove(id.value)}></Select>
                        <Button onClick={remove} style={{marginLeft: 10}}>Удалить груз</Button>
                    </div>
                </Alert>
                <Alert>
                    <Button style={{marginTop: 12}} onClick={update}>Обновить</Button>
                </Alert>
            </Alert>
            {(cargo)?
                <Alert style={{fontSize: 20, marginTop: 100, borderRadius: "20px 0 0 20px"}}>
                    <div style={{marginLeft: 15, display: "flex", flexDirection: "column", }}>
                        <text style={{marginTop: 15}}>ID груза: {cargo?.id}</text>
                        <text style={{marginTop: 5}}>Имя клиента: {cargo?.name}</text>
                        <text style={{marginTop: 5}}>Статус: {cargo?.status.message}</text>
                        <text style={{marginTop: 5}}>Email клиента: <a  href={"mailto:" + cargo?.email}>{cargo?.email}</a></text>
                        <text style={{marginTop: 5}}>Номер клиента: <a  href={"tel:" + cargo?.phone}>{cargo?.phone}</a></text>
                        <text style={{marginTop: 5}}>Маршурт груза по городам: {cargo?.pointsClient[0].name} --- {cargo?.pointsClient[1].name} --- {cargo?.pointsClient[2].name}</text>
                        <text style={{marginTop: 5}}>Текущая позиция: {cargo?.positionClient.name}</text>
                        <text style={{marginTop: 5}}>Схема маршрута: {cargo?.schemeName}</text>
                        <text style={{marginTop: 5}}>Маршрут схемы: {cargo?.pointsScheme.map(point => {
                            return (
                                (point.numb === 1)? <text>{point?.name}</text>:  <text>---{point?.name}</text>
                            );
                        })}
                        </text>
                        <text style={{marginTop: 5}}>Текущая позиция на схеме: название - {cargo?.positionScheme.name}, позиция - {cargo?.positionScheme.numb}</text>
                        <text style={{marginBottom: 15, marginTop: 5}}>Ожидаемое время прибытия груза: {cargo?.hours}:{cargo?.minutes}:{cargo?.seconds}</text>
                    </div>

                </Alert> :
                <div></div>}

        </div>


    );
}

export default ModuleMapBaggage;