const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Express 1

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// Express 2:

// // Bước 1

// app.get("/api/v1/todos", (req, res) => {
//   fs.readFile(`${__dirname}/dev-data/todos.json`, (err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).json(JSON.parse(data));
//     }
//   });
// });

// // Bước 2

// app.get("/api/v1/todos/:id", (req, res) => {
//   fs.readFile("./dev-data/todos.json", (err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       let id = req.params.id;
//       let readFileId = JSON.parse(data);
//       let todoId = readFileId.find((e) => id == e.id);
//       res.status(200).json(todoId);
//     }
//   });
// });

// // Bước 3

// app.post("/api/v1/todos", (req, res) => {
//   let createTodo = req.body;
//   fs.readFile(`${__dirname}/dev-data/todos.json`, (err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       let readFileId = JSON.parse(data);
//       let todos = readFileId.find((e) => {
//         return createTodo.title == e.title;
//       });
//       if (!todos) {
//         let newTodo = {
//           ...req.body,
//           userId: Number(req.body.userId),
//           id: Number(req.body.id),
//         };
//         readFileId.push(newTodo);
//         fs.writeFile(
//           `${__dirname}/dev-data/todos.json`,
//           JSON.stringify(readFileId),
//           (err) => {
//             if (err) {
//               throw err;
//             } else {
//               res.status(200).json({ message: "Create Successfully" });
//             }
//           }
//         );
//       } else {
//         res.status(200).json({ message: "Todo already exists" });
//       }
//     }
//   });
// });

// // Bước 4 :

// app.put("/api/v1/todos/:id", (req, res) => {
//   let updateTodo = req.body;
//   let idTdo = req.params.id;
//   fs.readFile(`${__dirname}/dev-data/todos.json`, (err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       let readFileId = JSON.parse(data);
//       let todos = readFileId.find((e) => {
//         return e.id == idTdo;
//       });
//       if (todos) {
//         let todoId = readFileId.indexOf(todos);
//         readFileId[todoId] = updateTodo;

//         fs.writeFile(
//           `${__dirname}/dev-data/todos.json`,
//           JSON.stringify(readFileId),
//           (err) => {
//             if (err) {
//               res.status(500).json(err);
//             } else {
//               res.status(200).json({ message: "Update Successfully" });
//             }
//           }
//         );
//       } else {
//         res.status(200).json({ message: "Todo not found" });
//       }
//     }
//   });
// });

// // Bước 5 :'

// app.delete("/api/v1/todos/:id", (req, res) => {
//   fs.readFile(`${__dirname}/dev-data/todos.json`, (err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       let deleteTodo = req.body;
//       let idTdo = req.params.id;
//       let readFileId = JSON.parse(data);
//       let todos = readFileId.find((e) => {
//         return e.id == idTdo;
//       });
//       if (todos) {
//         let todoId = readFileId.indexOf(todos);
//         readFileId.splice(todoId, 1);
//         fs.writeFile(
//           `${__dirname}/dev-data/todos.json`,
//           JSON.stringify(readFileId),
//           (err) => {
//             if (err) {
//               res.status(500).send(err);
//             } else {
//               res.status(200).json({ message: "Delete Successfully" });
//             }
//           }
//         );
//       } else {
//         res.status(200).json({ message: "Todo not found" });
//       }
//     }
//   });
// });

// Express 3 :

// Express 4 :

app.get("/api/v1/todos", (req, res) => {
  fs.readFile(`${__dirname}/public/index.html`, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json("/public/index.html");
    }
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port http://127.0.0.1:3000`);
});
