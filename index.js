const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const session = require('express-session');
const bcrypt = require("bcrypt");
// Require env
require('dotenv').config();


// Connection Database require
require("./config/connection");

// Require nodemaliler
const { sendVerificationEmail } = require("./models/nodemailer");

//Require Model
const { User, Request, Booking, Register } = require("./models/user");


const port = process.env.port || 1000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// link views all section 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

// link css js and img also
app.use(express.static(path.join(__dirname, "./public")));

// link boostrap 5
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));


// Session middleware
app.use(
    session({
        secret: "your_secret_key",
        resave: false,
        saveUninitialized: true,
    })
);



app.get("/", (req, res) => {
    res.render("index")
});

// Home Section
app.get("/index", (req, res) => {
    res.render("index")
})

// About Section
app.get("/about", (req, res) => {
    res.render("about")
})

// Services Section
app.get("/services", (req, res) => {
    res.render("services")
})

// Gallery Section
app.get("/gallery", (req, res) => {
    res.render("gallery")
})

// Error Section
app.get("/error", (req, res) => {
    res.render("error")
})

// Blog Section
app.get("/blog", (req, res) => {
    res.render("blog")
})

// Contact Section
app.get("/contact", (req, res) => {
    res.render("contact")
})

// login Section
app.get("/login", (req, res) => {
    res.render("login")
});
// Verify section
app.get("/verify", (req, res) => {
    res.render("verify")
});

// SupportTeam section
app.post("/supportteam", async (req, res) => {

    const { username, email, subject, yourname, yournumber, message } = req.body;

    // Check all field are required
    if (!username || !email || !subject || !yourname || !yournumber || !message) {
        return res.status(4001).send("All field are required")
    }

    // Create a NewUser data
    try {
        const NewUser = new User({
            username,
            email,
            subject,
            yourname,
            yournumber,
            message
        })
        // Save to database
        await NewUser.save();
        res.send("Your message has been received. Our support team will contact you soon!");
    } catch (error) {
        console.error("Error saving support form data:", error)
        res.status(500).send("Something went wrong. Please try again later.");

    }

});

// Requested section
app.post("/requestForm", async (req, res) => {

    const { name, email, number, messages } = req.body;

    // Check all field are required
    if (!name || !email || !number || !messages) {
        return res.status(4001).send("All field are required")
    }
    // new database 
    try {
        const newRequest = new Request({
            name,
            email,
            number,
            messages
        })
        await newRequest.save();
        res.send("Your message has been received. Our support team will contact you soon!")
    } catch (error) {
        console.error("Error saving support form data:", error)
        res.status(500).send("Something went wrong. Please try again later.");
    }
});

// Booking Schema
app.post("/bookingForm", async (req, res) => {

    const { fullname, email, phonenumber, deviceType, plan, issue, bookingDate } = req.body;

    // Check all field are required
    if (!fullname || !email || !phonenumber || !deviceType || !plan || !issue || !bookingDate) {
        return res.status(404).send("Please all field are required")
    }
    try {
        const newBooking = new Booking({
            fullname,
            email,
            phonenumber,
            deviceType,
            plan,
            issue,
            bookingDate
        });
        await newBooking.save();
        res.send("Your message has been received. Our support team will contact you soon!");
    } catch (error) {
        console.error("Error Data store in database form data:", error)
        return res.status(5001).send("Something Is Wrong Store Data In DataBase!")
    }
})

// Register Route
app.post("/registerMain", async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.send("All fields are required");
    }
    // Check the email if already used
    const existing = await Register.findOne({ email });
    if (existing) return res.send("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    const newUser = new Register({
        username,
        email,
        password: hashedPassword,
        verificationCode: code,
    });

    await newUser.save();
    await sendVerificationEmail(newUser.email, code);

    req.session.email = email;
    res.redirect("/verify");
});

// Render verify form
app.get('/verify', (req, res) => {
    // You can get the email from session or query or temp storage
    const userEmail = req.session.email || req.query.email; // example

    if (!userEmail) {
        return res.send('Email not available for verification.');
    }

    res.render('verify', { email: userEmail });
});


// Handle verification

app.post('/verify', async (req, res) => {
    const { code } = req.body;
    const user = await Register.findOne({ email: req.session.email });

    if (user && user.verificationCode === code) {
        user.isVerified = true;
        user.verificationCode = null;
        await user.save();
        return res.send('Email Verified!');
    } else {
        return res.send('Invalid verification code');
    }
});


// Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await Register.findOne({ email });

    if (!user) return res.send("User not found");
    if (!user.isVerified) return res.send("Please verify your email first");

    //Compare Password
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.send("Incorrect password");

    res.redirect("/index");
});




app.listen(port, () => {
    console.log(`Server Is Running Port Numebr ${port}`)

});
