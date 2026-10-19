let products = [
  { id: 1, name: "javascript", price: 250000 },
  { id: 2, name: "pyton", price: 300000 },
  { id: 3, name: "c++", price: 500000 },
  { id: 4, name: "java", price: 400000 },
];

let userorders = [
  { id: 1, name: "javascript", price: 250000 },
  { id: 2, name: "pyton", price: 300000 },
  { id: 3, name: "c++", price: 500000 },
];

let productname = prompt("please enter the course you are looking for");

let sum = 0;

let choosencours = products.find(function (product) {
  return product.name == productname;
});

if (choosencours) {
  choosencours = {
    id: userorders.length + 1,
    name: choosencours.name,
    price: choosencours.price,
  };

  userorders.push(choosencours);

  console.log(userorders);

  userorders.forEach(function (order) {
    sum += order.price;
  });

  alert("total price is " + sum);
} else {
  alert("the name is invalid");
}
