const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const app = express(); 
const port = process.env.PORT || 5000;

// return result as json format
app.use(express.json());

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

const environment = {
  apiKey: "AIzaSyDwm3byAy_1Q-Cui3vFQp9yGcxLkNagjAI",
  authURL: "https://identitytoolkit.googleapis.com/v1/",
  databaseURL: "https://test-react-fullstack-default-rtdb.firebaseio.com/"
};

// USER
app.get("/user/account", async (req, res) => {
  res.send();
});

// Login
app.post("/user/account/login", async (req, res) => {
  const { email, password } = req.body;
  // const { authorization } = req.headers;
  const data = {
    email: email,
    password: password,
    returnSecureToken: false,
  };
  const apiResponse = await fetch(
    `${environment.authURL}accounts:signInWithPassword?key=${environment.apiKey}`,
    {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      body: JSON.stringify(data),
    }
  );
  const apiResponseJson = await apiResponse.json();
  res.send({...apiResponseJson});
});

// Add New Account
app.post("/user/account", async (req, res) => {
  const { email, password } = req.body;
  // const { authorization } = req.headers;
  const data = {
    email: email,
    password: password,
    returnSecureToken: false,
  };
  const apiResponse = await fetch(
    `${environment.authURL}accounts:signUp?key=${environment.apiKey}`,
    {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      body: JSON.stringify(data),
    }
  );
  const apiResponseJson = await apiResponse.json();
  res.send({...apiResponseJson});
});

// Edit Account
app.put("/user/account/:id", async (req, res) => {
  const { email, password } = req.body;
  const { id } = req.params;
  // const { authorization } = req.headers;
  const data = {
    idToken: id,
    email: email,
    password: password,
    returnSecureToken: false,
  };
  const apiResponse = await fetch(
    `${environment.authURL}accounts:signUp?key=${environment.apiKey}`,
    {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      body: JSON.stringify(data),
    }
  );
  const apiResponseJson = await apiResponse.json();
  res.send({...apiResponseJson});
});

// Delete Account
app.delete("/user/account/:id", async (req, res) => {
  const { id } = req.params;
  // const { authorization } = req.headers;
  const data = {
    idToken: id,
  };
  const apiResponse = await fetch(
    `${environment.authURL}accounts:delete?key=${environment.apiKey}`,
    {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      body: JSON.stringify(data),
    }
  );
  const apiResponseJson = await apiResponse.json();
  res.send({...apiResponseJson});
});

// Product
app.get("/products", async (req, res) => {
  // const { authorization } = req.headers;
  const apiResponse = await fetch(
    `${environment.databaseURL}products.json`,
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
    }
  );
  const apiResponseJson = await apiResponse.json();
  const values = Object.values(apiResponseJson);
  const keys = Object.keys(apiResponseJson);
  const products = values.map((element, index) => {
    return {...element, id: keys[index]};
  });
  res.send(products);
});

// Add New Product
app.post("/product", async (req, res) => {
  const { image, title, description } = req.body;
  // const { authorization } = req.headers;
  const data = {
    image: image,
    title: title,
    description: description,
  };
  const apiResponse = await fetch(
    `${environment.databaseURL}products.json`,
    {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      body: JSON.stringify(data),
    }
  );
  const apiResponseJson = await apiResponse.json();
  res.send({
    apiResponseJson: apiResponseJson,
    data
  });
});

// Edit Product
app.put("/product/:id", async (req, res) => {
  const { id } = req.params;
  const { image, title, description } = req.body;
  // const { authorization } = req.headers;
  const data = {
    image: image,
    title: title,
    description: description,
  };
  const apiResponse = await fetch(
    `${environment.databaseURL}products/${id}.json`,
    {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      body: JSON.stringify(data),
    }
  );
  const apiResponseJson = await apiResponse.json();
  res.send({...apiResponseJson});
});

// Delete Product
app.delete("/product/:id", async (req, res) => {
  const { id } = req.params;
  // const { authorization } = req.headers;
  const apiResponse = await fetch(
    `${environment.databaseURL}products/${id}.json`,
    {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
    }
  );
  const apiResponseJson = await apiResponse.json();
  res.send({...apiResponseJson});
});
