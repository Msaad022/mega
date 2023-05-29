function fakeDataSync (){
    let d = new Date();
        d.getHours();
        d.getMinutes();
        d.getSeconds();
    let latitude= `12.${(Math.random()).toString().split('.')[1]}`
    let longitude= `77.${(Math.random()).toString().split('.')[1]}`

    return {

        "value": true,
        "data": [
        {
            "since": "2023-05-05",
            "times": [
            {
                "id": 1,
                "heart_beats_rate": (Math.random() * 100),
                "temperature_rate": (Math.random() * 70),
                "latitude": Number(latitude),
                "longitude": Number(longitude),
                "time": `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
            }
            ]
        }
        ],
        "code": 200
    }
}

fakeDataSync()
