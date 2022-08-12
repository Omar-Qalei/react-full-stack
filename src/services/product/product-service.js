export class ProductService {
    getProducts = async () => {
      const response = await fetch("/products", {
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
    addProduct = async (data) => {
      console.log(data);
      const response = await fetch("/product", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache",
        headers: {
          // Authorization: "Bearer abcdxyz",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message);
      }
      return body;
    };
    modifyProduct = async (productId, data) => {
      console.log('modifyProduct', productId)
      const response = await fetch(`/product/${productId}`, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache",
        headers: {
          // Authorization: "Bearer abcdxyz",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message);
      }
      return body;
    };
    removeProduct = async (productId) => {
      console.log(productId)
      const response = await fetch(`/product/${productId}`, {
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
  