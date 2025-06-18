const mongoose = require("mongoose");
const dB = "mongodb+srv://dhirendrabam12345:dhirendra123@support-team.abbcx8e.mongodb.net/?retryWrites=true&w=majority&appName=support-team";
mongoose.connect(dB).then(() => {
    console.log("Database Connection Sucussfully");   
}).catch((error) => {
    console.log(`Database Connection Error`); 
});