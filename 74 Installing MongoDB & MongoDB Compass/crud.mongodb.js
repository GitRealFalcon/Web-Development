use("crudDB");

db.createCollection("Courses");

// db.Courses.insertMany([
//     {
//       "brand": "POCO",
//       "model": "X5 5G",
//       "price": "15000",
//       "OS": "Hyper OS",
//       "camera": "50MP",
//       "ram": "8GB",
//       "memory": "256GB"
//     },
//     {
//       "brand": "Samsung",
//       "model": "Galaxy A54 5G",
//       "price": "25000",
//       "OS": "One UI",
//       "camera": "64MP",
//       "ram": "8GB",
//       "memory": "128GB"
//     },
//     {
//       "brand": "Apple",
//       "model": "iPhone 14",
//       "price": "79999",
//       "OS": "iOS",
//       "camera": "12MP",
//       "ram": "6GB",
//       "memory": "128GB"
//     },
//     {
//       "brand": "Realme",
//       "model": "Narzo 50 Pro 5G",
//       "price": "21999",
//       "OS": "Realme UI",
//       "camera": "48MP",
//       "ram": "6GB",
//       "memory": "128GB"
//     },
//     {
//       "brand": "Xiaomi",
//       "model": "Redmi Note 12 5G",
//       "price": "17999",
//       "OS": "MIUI",
//       "camera": "48MP",
//       "ram": "4GB",
//       "memory": "64GB"
//     },
//     {
//       "brand": "Oppo",
//       "model": "F19 Pro+ 5G",
//       "price": "24990",
//       "OS": "ColorOS",
//       "camera": "48MP",
//       "ram": "8GB",
//       "memory": "128GB"
//     },
//     {
//       "brand": "Vivo",
//       "model": "V21e",
//       "price": "22990",
//       "OS": "Funtouch OS",
//       "camera": "44MP",
//       "ram": "8GB",
//       "memory": "128GB"
//     },
//     {
//       "brand": "Motorola",
//       "model": "Edge 20",
//       "price": "29999",
//       "OS": "My UX",
//       "camera": "108MP",
//       "ram": "8GB",
//       "memory": "128GB"
//     },
//     {
//       "brand": "OnePlus",
//       "model": "Nord 2 5G",
//       "price": "29999",
//       "OS": "OxygenOS",
//       "camera": "50MP",
//       "ram": "12GB",
//       "memory": "256GB"
//     },
//     {
//       "brand": "Asus",
//       "model": "ZenFone 8",
//       "price": "42999",
//       "OS": "ZenUI",
//       "camera": "64MP",
//       "ram": "8GB",
//       "memory": "128GB"
//     }
//   ]
//   )

// let a = db.Courses.find({price: "15000"});
// console.log(a.toArray());

// let b = db.Courses.findOne({brand : "POCO"})

// console.log(b);

// db.Courses.updateMany({brand : "POCO"}, {$set:{price: "15000"}})

// db.Courses.deleteMany({brand : "POCO"})

let c = db.Courses.find({price : {$gt : "25000"}})

console.log(c.toArray(),c.count());
