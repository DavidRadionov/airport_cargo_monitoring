import React, { useEffect, useState } from "react";
import '../App.css';
import { Layer, Line, Stage, Text } from "react-konva";
import { useParams } from "react-router-dom";
import Loading from "../ui/Loading";
import { getBaggageById, GLOBAL_URL } from "../API";

class Point {
    name: string = "";
    numb = 0;
}

class Way {
    points: Point[] = [];
    hours = 0;
    minutes = 0;
    seconds = 0;
    position: Point = new Point();
    id = 0;
    status = {
        message: "",
        code: 200,
    };
    name?: string;
}
function ModuleClient() {
    const params = useParams();
    const [way, setWay] = useState<Way>();
    const [hours, setHour] = useState(0);
    const [minutes, setMinute] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // Third Attempts
    useEffect(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            return;
        }

        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            if (minutes === 0) {
                if (hours > 0) {
                    setHour(hours - 1)
                    setMinute(59)
                }
            } else {
                setMinute(minutes - 1);
                setSeconds(59);
            }
        }
    }, [seconds]);


    const getCargo = async function () {
        const result = await getBaggageById(params.id);
        console.log(result);
        setWay(result as Way);
        setHour((result as Way).hours);
        setMinute((result as Way).minutes);
        setSeconds((result as Way).seconds);

    }

    useEffect( () => {
        // getCargo();
        const result = getBaggageById(params.id);
        result.then((result) => {
            setWay(result as Way);
            setHour((result as Way).hours);
            setMinute((result as Way).minutes);
            setSeconds((result as Way).seconds);
            // alert(result);
        }).catch(() => {
            console.log("Error in fetch on self baggage");
        })

    }, [])
    if (way) {

        return (

            <div className="App" style={{height:"100%"}}>

                <div style={{width: "100%", height: 150, position: "relative", backgroundColor: "#5986E6"}}>
                    <text style={{color: "white", position: "absolute", top: "40%", marginLeft: "45%", fontSize: 40}}>LOGO</text>
                </div>
                <div style={{marginTop: 50, width: "98%", marginLeft: 10, height:110, backgroundColor: "#5986E6", borderRadius: "50px 0 0 50px"}}>
                    <div>
                        <text style={{marginLeft: 30, color: "white", fontSize: 35}}>Имя: {way?.name}</text>
                    </div>
                    <div>
                        <text style={{marginLeft: 30, color: "white", fontSize: 35}}>ID багажа: {way?.id}</text>
                        <text style={{marginLeft: 80, color: "white", fontSize: 35}}>Статус: {way?.status?.message}</text>
                    </div>
                </div>

                <div style={{display: "flex", flexDirection:"row"}}>
                    <div style={{marginTop: 400, borderColor: "#5986E6", width: 70}}>
                        <Stage
                            className="konva-container"
                            width={400}
                            height={500}
                            style={{justifyItems: "center"}}

                        >

                            {way?.points?.map(point => {
                                if (point.numb + 1 < way?.points.length) {
                                    return (
                                        <Layer width={200}>
                                            <Line
                                                x={50}
                                                y={20}
                                                stroke={(point.numb < way?.position.numb) ? "green" : "gray"}
                                                lineJoin="round"
                                                dash={[5, 1]}
                                                points={[0, 30 + 150 * point.numb, 0, 150 + 150 * point.numb]}
                                                strokeWidth={5}
                                                drawBorder={true}
                                            />
                                            <Text
                                                fontSize={35}
                                                strokeWidth={2}
                                                stroke={((point.numb <= way?.position.numb && way?.status.code === 200) || (point.numb < way?.position.numb && way?.status.code !== 200)) ? "green" : (way?.status.code !== 200 && point.numb === way?.position.numb)? "red": "black"}
                                                x={40} y={14 + 150 * point.numb}
                                                // width={200}
                                                text={point.name}/>
                                        </Layer>

                                    );
                                }
                                return (
                                    <Layer>
                                        <Text
                                            fontSize={35}
                                            strokeWidth={2}
                                            stroke={ (point.numb <= way?.position.numb) ? "green" : "black"}
                                            x={45} y={15 + 150 * point.numb}
                                            text={point.name}/>
                                    </Layer>
                                );
                            })}


                        </Stage>
                    </div>
                    <div style={{ width: 550, height: 100, marginTop: 50,  marginLeft: 250, backgroundColor:"#5986E6",  borderRadius: "50px"}}>
                        <Stage

                            className="konva-container"
                            width={550}
                            height={300}
                            style={{justifyItems: "center", marginTop: 10, }}

                        >
                            <Layer>
                                <Text
                                    x={20}
                                    width={500}
                                    fontSize={35}
                                    align='center'
                                    fill='white'
                                    text={"Ожидаемое время прибытия"}/>
                                <Text
                                    y={40}
                                    fill='white'
                                    fontSize={40}
                                    width={500}
                                    align='center'
                                    text={hours?.toString() + ":" + minutes?.toString() + ":" + seconds?.toString()}
                                />
                            </Layer>
                        </Stage>
                    </div>
                </div>

                <div style={{position: "absolute", width: "100%", height: 50, bottom: 0, backgroundColor:"#5986E6", color: "white"}}>
                    <text style={{fontSize: 25, marginLeft: 10}}>Контакты для связи: +375-(33)-333-33-33</text>
                </div>
            </div>

        );
    }
    return <Loading/>;
}

export default ModuleClient;