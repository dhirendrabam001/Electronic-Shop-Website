const mongoose = require("mongoose");

const userScheme = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    subject: {
        type: String,
        required: true
    },
    yourname: {
        type: String,
        required: true
    },
    yournumber: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }

});

// Free Request scheme
const requestScheme = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    messages: {
        type: String,
        required: true
    }

});

// Booking Scheme
const bookScheme = new mongoose.Schema ({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    deviceType: {
        type: String,
        required: true
    },
    plan: {
        type: String,
        required: true
    },
    issue: {
        type: String,
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    createdAt: { type: Date, default: Date.now }

});

// Register schema
const registersSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: { type: Boolean, default: false },
    verificationCode: String

});


// Create Models
const User = mongoose.model("User", userScheme);
const Request = mongoose.model("Request", requestScheme);
const Booking = mongoose.model("Booking", bookScheme);
const Register = mongoose.model("Register", registersSchema);

// Exports Model
module.exports = {
    User,
    Request,
    Booking,
    Register
};

