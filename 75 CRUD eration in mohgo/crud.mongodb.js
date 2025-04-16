use("crudDB");
db.createCollection("courses");
// db.courses.insertOne({
//     name:"Mongo_DB",
//     price:400,
//     assignments:12,
//     project:45
// })

// db.courses.insertMany([
//     {
//       "name": "Mongo_DB",
//       "price": 400,
//       "assignments": 12,
//       "project": 45
//     },
//     {
//       "name": "React",
//       "price": 300,
//       "assignments": 15,
//       "project": 50
//     },
//     {
//       "name": "Node.js",
//       "price": 350,
//       "assignments": 10,
//       "project": 40
//     },
//     {
//       "name": "Python",
//       "price": 500,
//       "assignments": 20,
//       "project": 60
//     },
//     {
//       "name": "Django",
//       "price": 450,
//       "assignments": 18,
//       "project": 55
//     },
//     {
//       "name": "JavaScript",
//       "price": 400,
//       "assignments": 16,
//       "project": 48
//     },
//     {
//       "name": "Ruby on Rails",
//       "price": 350,
//       "assignments": 14,
//       "project": 43
//     },
//     {
//       "name": "Java",
//       "price": 450,
//       "assignments": 22,
//       "project": 65
//     },
//     {
//       "name": "C++",
//       "price": 400,
//       "assignments": 19,
//       "project": 58
//     },
//     {
//       "name": "PHP",
//       "price": 350,
//       "assignments": 13,
//       "project": 42
//     },
//     {
//       "name": "Go",
//       "price": 400,
//       "assignments": 17,
//       "project": 50
//     }
//   ]
//   )

// db.courses.find({price:400}).toArray();
// db.courses.findOne({price:400})
// db.courses.updateMany({price:450},{$set:{price:400}, $currentDate:{ lastModified: true }});
db.courses.updateMany({price:{$gt:350}},{$set:{price:1000},$currentDate:{lastModified:true}})

