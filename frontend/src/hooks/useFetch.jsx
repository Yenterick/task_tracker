import { useState, useEffect } from "react";


function useFetch (url, method, body = NaN) {
    set [ data, setData ] = useState(NaN);

    switch(method.toUpperCase()) {
        case "GET":
            useEffect(fetch(url, {method: "GET"})
                        .then((response) => { response.json() })
                        .then((result) => { () => setData(result) })
                        .catch((error) => {`${error} - Couldn't get a valid response from the API`})
                    , [])
            break;
        case "POST":
            useEffect( async () => setData(await fetch(url, {method: "POST", body: JSON.stringify(body)})));
            break;
        case "PUT":
            useEffect(fetch(url, {method: "GET"}), []);
            break;
        case "DELETE":
            useEffect(fetch(url, {method: "GET"}), []);
            break;
    }
}

export default useFetch;

