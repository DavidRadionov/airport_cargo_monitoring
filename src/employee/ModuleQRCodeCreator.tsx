import { useEffect, useState } from "react";
import { getCities, getUrlForQR } from "../API";
import { Alert, Button, Container, Form, FormSelect } from "react-bootstrap";
import QRCode from "react-qr-code";
import Loading from "../ui/Loading";
import Select from "react-select";

function ModuleQRCodeCreator() {
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [mail, setMail] = useState("");
    const [startPont, setStartPont] = useState("");
    const [endPont, setEndPoint] = useState("")
    const [cities, setCities] = useState([]);
    const options = cities.map((city) => {
        return {
            "value": city,
            "label": city
        };

    })
    useEffect(() => {
        const result: any = getCities();
        console.log(result);
        result.then((cities: any) => {
            setCities(cities);
        })
    }, []);

    const printDiv = function (divName: string) {
        const printContents = document.getElementById(divName)!.innerHTML;
        const originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }

    const getURL = async function () {
        if (startPont !== endPont && startPont !== "" && endPont !== "" && name !== "" && number !== "") {
            let data = {
                "name": name,
                "phone": number,
                "email": mail,
                "startPoint": startPont,
                "endPoint": endPont
            };
            const url: any = await getUrlForQR(data);
            setUrl(url);
        } else {
            if (startPont === endPont) {
                alert("Город отправления и город прибытия равны");
            } else {
                alert("Какое-то из полей пусто");
            }
        }
    }

    if (cities.length === 0) {
        return <Loading/>;
    } else {
        return (
            <div style={{display: "flex", flexDirection: "row"}}>
                {/*<Container style={{*/}
                {/*    width: 800,*/}
                {/*    height: 500,*/}
                {/*    borderRadius: "25px 25px 25px 25px",*/}
                {/*    border: "2px solid blue",*/}
                {/*    display: "flex",*/}
                {/*    flexDirection: "row",*/}
                {/*}}>*/}
                    <Alert style={{ marginBottom: 10, marginLeft: 20, width: 400}}>
                        <Form.Group>
                            <Form.Label style={{fontSize: 20}}>Имя *</Form.Label>
                            <Form.Control style={{marginBottom: 5}} type="text" placeholder="Введите ваше имя" onChange={(name) => setName(name.target.value)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label style={{fontSize: 20}}>Номер телефона *</Form.Label>
                            <Form.Control style={{marginBottom: 5}} type="tel" placeholder="Введите ваш телефон" onChange={(name) => setNumber(name.target.value)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label style={{fontSize: 20}} >Адрес эл. почты</Form.Label>
                            <Form.Control style={{marginBottom: 5}} type="email" placeholder="Введите ваш email" onChange={(name) => setMail(name.target.value)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label style={{fontSize: 20}} >Откуда *</Form.Label>
                            <Select options={options} onChange={(event: any) => setStartPont(event.value)}></Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{fontSize: 20, marginTop: 5}} >Куда *</Form.Label>
                            <Select options={options} onChange={(event: any) => setEndPoint(event.value)}></Select>
                        </Form.Group>
                        <Form.Group style={{marginTop: 15, marginBottom: 10, display: "flex", flexDirection: "row"}}>
                            <Button style={{fontSize: 17}} onClick={getURL}>Создать QR code</Button>
                            <Button style={{marginLeft: 10}} onClick={() => setUrl("")}>Очистить QR code</Button>
                        </Form.Group>
                    </Alert>
                    <Alert style={{width: 400, height: 500, marginLeft: 25}}>
                        {(url !== "") ?
                            <div>
                                <div id={"printableArea"}>
                                    <QRCode
                                        style={{
                                            marginTop: 60,
                                            display: "block",
                                            marginLeft: "auto",
                                            marginRight: "auto"
                                        }}
                                        value={url} size={300} bgColor={"blue"} fgColor={"white"}/>
                                </div>
                                <div>
                                    <Button onClick={() => printDiv("printableArea")} style={{
                                        marginTop: 20,
                                        display: "block",
                                        marginLeft: "auto",
                                        marginRight: "auto"
                                    }}>Напечатать</Button>
                                </div>
                            </div>
                            : <p style={{marginLeft: 50, marginTop: 20, fontSize: 20}}>Здесь будет ваш QR code</p>
                        }
                    </Alert>
                {/*</Container>*/}
            </div>
        );
    }
}

export default ModuleQRCodeCreator;