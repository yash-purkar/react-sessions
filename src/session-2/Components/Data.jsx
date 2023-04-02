export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/employees") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            employees: [
              { id: "E1", name: "Arpit Jain", workExperience: 6 },
              { id: "E2", name: "Monica Jaiswal", workExperience: 4 },
              { id: "E3", name: "Priya Shetty", workExperience: 9 },
              { id: "E4", name: "Aman Sen", workExperience: 1 },
              { id: "E5", name: "Nayan Sethi", workExperience: 4 },
              { id: "E6", name: "Tanvi Jani", workExperience: 5 },
              { id: "E7", name: "Bhargav Jain", workExperience: 6 }
            ]
          }
        });
      } else {
        reject({
          status: 404,
          message: "Employee list not found."
        });
      }
    }, 2000);
  });
};

export const fakeFetch2 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/products") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            products: [
              { id: "P1", name: "Hat", price: 30, quantity: 10 },
              { id: "P2", name: "Bottle", price: 50, quantity: 4 },
              { id: "P3", name: "Tiffin", price: 100, quantity: 3 },
              { id: "P4", name: "Pencil", price: 10, quantity: 6 }
            ]
          }
        });
      } else {
        reject({
          status: 404,
          message: "Products list not found."
        });
      }
    }, 2000);
  });
};


export const fakeFetch3 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/transactions") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            transactions: [
              {
                id: "T1",
                amount: 10000,
                date: "20-03-2023",
                gateway: "Stripe"
              },
              {
                id: "T2",
                amount: 500,
                date: "31-03-2023",
                gateway: "GPay"
              },
              {
                id: "T3",
                amount: 20000,
                date: "36-03-2023",
                gateway: "Paytm"
              },
              {
                id: "T4",
                amount: 1200,
                date: "12-03-2023",
                gateway: "Stripe"
              }
            ]
          }
        });
      } else {
        reject({
          status: 404,
          message: "Transactions not found."
        });
      }
    }, 2000);
  });
};

export const fakeFetch4 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/wishlist") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            wishlist: [
              { name: "Colors", price: 100, quantity: 4 },
              { name: "Laptop", price: 5000, quantity: 1 },
              { name: "TV", price: 2000, quantity: 2 }
            ]
          }
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found."
        });
      }
    }, 2000);
  });
};
