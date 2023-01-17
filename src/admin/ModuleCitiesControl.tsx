import { useEffect, useState } from "react";
import { addCity, getCities, removeCity } from "../API";
import { text } from "stream/consumers";
import { Button, Form, FormSelect } from "react-bootstrap";

function ModuleCitiesControl() {
    const [cityByRemove, setCityByRemove] = useState("");
    const [cityByAdd, setCityByAdd] = useState("");
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);

    const actionAddCity = () => {
        const citiesPrototype: string[] = cities;
        if (cityByAdd !== "" && !citiesPrototype.includes(cityByAdd)) {
            addCity(cityByAdd);
            initialCity();
        } else {
            alert("Поле для добавления пусто или такой город уже существует");
        }

    }

    const viewCities = () => {
        let menu: any = document.querySelector(".list-cities");
        menu.classList.toggle("list-cities-active");
    }

    const actionRemoveCity = () => {
        if (cityByRemove !== "") {
            removeCity(cityByRemove);
            initialCity();
        } else {
            alert("Заполните поле город для удаления");
        }

    }

    const initialCity = () => {
        const result: any = getCities();
        setLoading(true);
        result.then((cities: any) => {
            setCities(cities);
            setLoading(false);
        })
    }
    useEffect(() => {
        initialCity();
    }, []);
    return (
        <div>
            <Form style={{marginLeft: 20, width: 400}}>
                <Form.Group>
                    <Form.Label>Добавить новый город</Form.Label>
                    <div style={{flexDirection: "row", display: "flex"}}>
                        <Form.Control onChange={(event) => setCityByAdd(event.target.value)}></Form.Control>
                        <Button style={{marginLeft: 5}} onClick={actionAddCity}>Добавить</Button>
                    </div>
                </Form.Group>
                <Form.Group style={{marginTop: 5}}>
                    <Form.Label>Удалить город</Form.Label>
                    <div style={{flexDirection: "row", display: "flex"}}>
                        <FormSelect onChange={(event) => setCityByRemove(event.target.value)}>
                            <option></option>
                            {cities?.map(city => {
                                return <option value={city}>{city}</option>
                            })}
                        </FormSelect>
                        <Button style={{marginLeft: 5}} onClick={actionRemoveCity}>Удалить</Button>
                    </div>
                </Form.Group>
            </Form>
            <div style={{marginTop: 50, marginLeft: 20}}>
                <button onClick={viewCities} style={{
                    textAlign: "center",
                    width: 300,
                    cursor: "pointer",
                    backgroundColor: "#5f91fd",
                    color: "white",
                    border: 0
                }}>Список всех городов
                </button>
                <ul className="list-cities" style={{
                    marginTop: 5,
                    display: "none",
                    position: "relative",
                    overflowY: "scroll",
                    maxHeight: 500,
                    width: 300,
                    backgroundColor: "#5986E6",
                }}>
                    {cities?.map(city => {
                        return <li style={{
                            listStyleType: "none",
                            color: "white",
                            marginTop: 5,
                            marginBottom: 5,
                            marginLeft: -25,
                            marginRight: 5,
                            backgroundColor: "#5f91fd"
                        }}>
                            <text style={{marginLeft: 10}}>{city}</text>
                        </li>;
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ModuleCitiesControl;