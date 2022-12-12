import { useState } from "react";
import alert from "bootstrap/js/src/alert";

export const GLOBAL_URL = "http://127.0.0.1:3001";
// export const GLOBAL_URL = "http://172.20.10.2:3001";
// export const [success, setSuccess] = useState(false);

// export const getSchemes = async () => {
//     return await fetch(GLOBAL_URL + "/getSchemes").then(res => res.json())
//         .then(res => )
// }

export const updateUser = async (user) => {
    fetch(GLOBAL_URL + "/updateUser", {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).catch((error) => console.log(error));
}

export const sendMessage = async (message) => {
    fetch(GLOBAL_URL + "/sendMessage", {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    }).catch((error) => console.log(error));
}

export const getUserByPassword = async (id) => {
    return await fetch(GLOBAL_URL + "/login/" + id).then(res => res.json())
        .catch((error) => alert(error));
}

export const getNotificationsByID = async (id) => {
    return await fetch(GLOBAL_URL + "/getNotificationsByID/" + id).then(res => res.json())
        .then(res => res.notifications).catch((error) => alert(error));
}

export const getCargoListID = async () => {
    return await fetch(GLOBAL_URL + "/getCargoListID").then(res => res.json())
        .then(res => res.list).catch((error) => alert(error));
}

export const getCargoByID = async (id) => {
    return fetch(GLOBAL_URL + "/getCargoByID/" + id).then(response => response.json())
        .catch((error) => alert(error));
}

export const removeCargoByID = async (id) => {
    fetch(GLOBAL_URL + "/removeCargoByID/" + id).catch((error) => console.log(error));
}

export const getSchemes = async () => {
    return await fetch(GLOBAL_URL + "/getSchemes").then(res => res.json())
        .then(res => res.schemes).catch((error) => alert(error));
}

export const getCities = async () => {
    return await fetch(GLOBAL_URL + "/getCities").then(res => res.json())
        .then(res => res.cities).catch((error) => alert(error));
}

export const getBaggageById = (id) => {
    return fetch(GLOBAL_URL + "/getStateBaggageById/" + id).then(response => response.json())
        .catch((error) => alert(error));
}

export const addCity = (name) => {
    fetch(GLOBAL_URL + "/addCity/" + name).catch((error) => console.log(error));
}

export const removeCity = (name) => {
    fetch(GLOBAL_URL + "/removeCity/" + name).catch((error) => console.log(error));
}

export const removeScheme = (name) => {
    fetch(GLOBAL_URL + "/removeScheme/" + name).catch((error) => console.log(error));
}

export const getUrlForQR = (data) => {
    return fetch(GLOBAL_URL + "/getURL", {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json()).then((url) => url.res)
        .catch((error) => console.log(error));
}