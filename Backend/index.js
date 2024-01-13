const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");

require("dotenv").config()

// Create App
const app = express();

// MiddleWare
app.use(cors())
app.use(express.json())

// Routes
function getData(data) {
    console.log("data", data);
    return data;
}
app.get("/api", async (req, res) => {
    try {
        const fs = require("fs");
        var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');

        var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;
        var Apikey = defaultClient.authentications['Apikey'];
        Apikey.apiKey = "2f6a6134-8321-4531-bc6f-208ee71bd3e8"

        var api = new CloudmersiveConvertApiClient.ConvertDataApi()

        var inputFile = fs.readFileSync("./files/Hello.docx");

        // Process the file and send the response
        // var callback = function (error, data, response) {
        //     console.log("Hello")
        //     console.log("data", data)
        //     console.log("response", response)
        //     return;
        //     if (error) {
        //         console.error(error);
        //         res.status(500).send("Internal Server Error");
        //     } else {
        //         console.log('API called successfully. Returned data: ' + data);
        //         res.json("Hello Nomi The Sexy Bitch!");
        //         console.log(response);
        //     }
        // };
        // console.log(callback);
        // console.log("Before API call");
        var data = api.convertDataCsvToJson(Buffer.from(inputFile.buffer));
        getData(data);
        // console.log("data", data)
        // console.log("After API call");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error: " + error.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
