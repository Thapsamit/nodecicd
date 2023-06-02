const express = require("express");
const app = express();
const port = 3000; // Replace with your desired port number

// Middleware to parse JSON bodies
app.use(express.json());

console.log("I am automatic deploed by github action workflow ci/cd");
// Sample data
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

// GET /user
app.get("/users", (req, res) => {
  res.json(users);
});

// POST /users
app.post("/users", (req, res) => {
  const { id, name } = req.body;
  const newUser = { id, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// GET /users/:id
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
