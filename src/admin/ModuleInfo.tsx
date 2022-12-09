import Marquee from "react-fast-marquee";
function ModuleInfo () {
    return (
        <div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{width: 600, marginTop: 40, marginLeft: 200, display: "flex", flexDirection: "column"}}>
                    <text style={{fontSize: 25}}>Информация о приложении</text>
                    <text style={{textAlign: "justify", marginTop: 10, fontSize: 20}}>
                        Эта часть приложения (для сотрудников аэропорта) предоставляет возможность отслеживать местоположение груза
                        на территории аэропорта, автоматизирует процессы предоставления дополнительной информации
                        о местоположении личного груза для клиентов аэропорта. Так же автоматизирует процессы связи между клиент-сотрудник, админ-сотрудник.</text>
                    {/*<text style={{textAlign: "justify", marginTop: 10, fontSize: 20}}>*/}
                    {/*    Этот продукт создан в качестве курсовой работы, цель курсовой работы показать полученные знания за время обучения в университете.*/}
                    {/*</text>*/}
                    <div style={{marginTop: 40}}>
                        <text style={{fontSize: 20,  verticalAlign: "center"}}>Подпись
                            разработчика</text>
                        <img style={{marginLeft: 10}} src="https://devby.io/storage/images/59/38/59/11/derived/05ff293929e38a14973ba4cf1c59269d.jpg" width={100} height={100} alt={"Подпись"}/>
                    </div>
                    {/*<text>Продукт уникален в своем роде.</text>*/}
                </div>
                <div style={{display: "flex", flexDirection: "column", marginLeft: 200, marginTop: 40}}>
                    <text style={{fontSize: 25}}>Контакты разработчика</text>
                    <text style={{fontSize: 20, marginTop: 10}}>GitHub: <a href={"https://github.com/DavidRadionov"}>https://github.com/DavidRadionov</a></text>
                    <text style={{fontSize: 20, marginTop: 5}}>Номер телефона: <a href="tel:+375 33 329 75 13">+375 33 329 75 13</a></text>
                    <text style={{fontSize: 20, marginTop: 5}}>Электронная почта: <a href="mailto:radionov.dava@gmail.com">radionov.dava@gmail.com</a></text>
                    <text style={{fontSize: 20, marginTop: 5}}>Telegram: <a href="https://t.me/studentdava">@studentdava</a></text>
                    <text style={{fontSize: 20,  marginTop: 5}}>Имя: Радионов Давид Юрьевич</text>

                    {/*<Marquee style={{marginTop: 20}} speed={80}>*/}
                    {/*    Давид Радионов не дизайнер, но он очень старался сделать красиво*/}
                    {/*</Marquee>*/}
                </div>
            </div>
            <Marquee style={{marginTop: 100}} speed={150}>
                <img style={{marginLeft: 400}} width="200" height="222" src={"https://img.freepik.com/premium-vector/a-commercial-plane-on-a-white-back_33070-1512.jpg"}></img>
                {/*<img style={{marginLeft: 400}} width="200" height="222" src={"https://img.freepik.com/premium-vector/a-commercial-plane-on-a-white-back_33070-1512.jpg"}></img>*/}
                {/*<img style={{marginLeft: 400}}  width="200" height="222" src={"https://img.freepik.com/premium-vector/a-commercial-plane-on-a-white-back_33070-1512.jpg"}></img>*/}
            </Marquee>
        </div>

    )
}
export default ModuleInfo;