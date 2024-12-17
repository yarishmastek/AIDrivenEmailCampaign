// Example Node.js/Express endpoint
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;
const cors = require("cors");

app.use(cors());

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        phone: "+1-123-456-7890",
        address: {
            street: "123 Elm Street",
            city: "New York",
            state: "NY",
            zipcode: "10001",
            country: "USA",
        },
        dateOfBirth: "1990-05-15T00:00:00.000Z",
        isActive: true,
        preferences: { newsletter: true, theme: "Dark" },
    },
];

app.get("/api/users", (req, res) => {
    res.json(users);
});

// app.listen(5000, () => console.log("Server running on http://localhost:5000"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
