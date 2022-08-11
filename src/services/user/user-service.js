export class UserService {
  getUsers = async () => {
    const response = await fetch("/user/account", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      headers: {
        // Authorization: "Bearer abcdxyz",
        "Content-Type": "application/json",
      },
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  login = async (data) => {
    const response = await fetch("/user/account/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      headers: {
        // Authorization: "Bearer abcdxyz",
        "Content-Type": "application/json",
      },
      body: data,
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  addUser = async (data) => {
    const response = await fetch("/user/account", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      headers: {
        // Authorization: "Bearer abcdxyz",
        "Content-Type": "application/json",
      },
      body: data,
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  modifyUser = async (userId, data) => {
    const response = await fetch(`/user/account/${userId}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      headers: {
        // Authorization: "Bearer abcdxyz",
        "Content-Type": "application/json",
      },
      body: data,
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  removeUser = async (userId) => {
    console.log(userId)
    const response = await fetch(`/user/account/${userId}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      headers: {
        // Authorization: "Bearer abcdxyz",
        "Content-Type": "application/json",
      },
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
}
