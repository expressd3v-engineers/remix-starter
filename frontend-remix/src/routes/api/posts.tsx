import {LoaderFunction} from "remix";

export const loader: LoaderFunction = async () => {
    const users = {
        "coord": {"lon": -122.08, "lat": 37.39},
        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
        "base": "stations",
        "main": {
            "temp": 278.97,
            "feels_like": 276.88,
            "temp_min": 276.05,
            "temp_max": 282.75,
            "pressure": 1021,
            "humidity": 75
        },
        "visibility": 10000,
        "wind": {"speed": 2.68, "deg": 230, "gust": 4.02},
        "clouds": {"all": 0},
        "dt": 1646554645,
        "sys": {"type": 2, "id": 2017352, "country": "US", "sunrise": 1646577152, "sunset": 1646618811},
        "timezone": -28800,
        "id": 5375480,
        "name": "Mountain View",
        "cod": 200
    };
    const body = JSON.stringify(users);
    return new Response(body, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};