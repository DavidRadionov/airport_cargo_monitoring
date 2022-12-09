import Marquee from "react-fast-marquee";
import { GLOBAL_URL } from "../API";
import { Alert } from "react-bootstrap";
function ModuleInfo () {
    // CFF4FC
    return (
        <div style={{ height: "100%"}}>
            <div style={{display: "flex", flexDirection: "row", height: "100%"}}>
                <Alert  style={{width: 600, marginTop: 150, marginLeft: 200, display: "flex", flexDirection: "column"}}>
                    <text style={{fontSize: 25}}>Информация о приложении</text>
                    <text style={{textAlign: "justify", marginTop: 10, fontSize: 20}}>
                        Эта часть приложения (для сотрудников аэропорта) предоставляет возможность отслеживать местоположение груза
                        на территории аэропорта, автоматизирует процессы предоставления дополнительной информации
                        о местоположении личного груза для клиентов аэропорта. Так же автоматизирует процессы связи между клиент-сотрудник, админ-сотрудник.</text>
                    <div style={{marginTop: 40}}>
                        <text style={{fontSize: 20,  verticalAlign: "center"}}>Подпись
                            разработчика</text>
                        <img id={"img"} style={{marginLeft: 10}} src={GLOBAL_URL + "/images/podpis.png"} width={100} height={100} alt={"Подпись"}/>
                    </div>
                </Alert>
                <Alert variant={"info"} style={{display: "flex", flexDirection: "column", width: 600, marginLeft: 200, marginTop: 140}}>
                    <text style={{fontSize: 25}}>Контакты разработчика</text>
                    <text style={{fontSize: 20, marginTop: 10}}>GitHub: <a href={"https://github.com/DavidRadionov"}>https://github.com/DavidRadionov</a></text>
                    <text style={{fontSize: 20, marginTop: 5}}>Номер телефона: <a href="tel:+375 33 329 75 13">+375 33 329 75 13</a></text>
                    <text style={{fontSize: 20, marginTop: 5}}>Электронная почта: <a href="mailto:radionov.dava@gmail.com">radionov.dava@gmail.com</a></text>
                    <text style={{fontSize: 20, marginTop: 5}}>Telegram: <a href="https://t.me/studentdava">@studentdava</a></text>
                    <text style={{fontSize: 20,  marginTop: 5}}>Имя: Радионов Давид Юрьевич</text>
                </Alert>
            </div>
            {/*<Marquee style={{marginTop: 100}} speed={150}>*/}
            {/*    <img style={{marginLeft: 400}} width="200" height="222" src={"https://img.freepik.com/premium-vector/a-commercial-plane-on-a-white-back_33070-1512.jpg"}></img>*/}
            {/*</Marquee>*/}
        </div>
    );
}
export default ModuleInfo;