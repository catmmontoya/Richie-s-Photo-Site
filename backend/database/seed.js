import { Item, User, Admin, db } from "./model.js";

await db.sync({
  force: true,
});

let items = [
  {
    picture: "images/tapestry1.jpg",
    itemName: "Funfetti Tapestry",
    price: 60.0,
  },
  {
    picture: "/images/tapestry2.jpg",
    itemName: "Pastels Tapestry",
    price: 50.0,
  },
  {
    picture: "/images/tapestry3.jpg",
    itemName: "Pink Woman Tapestry",
    price: 100.0,
  },
];

for (const item of items) {
  await Item.create(item);
}

let admins = [
  {
    username: "richie",
    email: "rj@gmail.com",
    password: "unicorn",
  },
];

for (const admin of admins) {
  await Admin.create(admin);
}

let users = [
  {
    userEmail: "fay@gmail.com",
  },
];

for (const user of users) {
  await User.create(user);
}

// let orders = []

// for (const order of orders) {
//   await Order.create(order);
// }

await db.close();
