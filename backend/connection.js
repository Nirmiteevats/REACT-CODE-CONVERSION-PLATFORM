const mongoose = require("mongoose");
const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const url = "mongodb+srv://nirmitee16_db_user:xNwKlZzzFozLqYpf@cluster0.lpywj1d.mongodb.net/react_code_conversion?appName=Cluster0";

mongoose.connect(url)
    .then((result) => {
        console.log("Database connected");
    }).catch((err) => {
        console.log(err);
    });
