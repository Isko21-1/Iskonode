// const fs =require('fs')

// fs.writeFile('daulet.txt', 'Hello my name is Daulet and I love coding' , (error) =>{
//     if (error){
//         console.log(error);
//     }
//     console.log("Файл ууспешно создан");
    
// })

// fs.readFile('daulet.txt', 'utf-8', (err, data)=>{
//     if(err){
//         throw new Error('Ошибка при чтений файла')
//     }
//     console.log('файл іші: ', data);
// })

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

// const books = [
//   { id: 1, title: 'Абай жолы', author: 'М. Әуезов', year: 1942 },
//   { id: 2, title: 'Менің атым Қожа', author: 'Б. Соқпақбаев', year: 1957 },
//   { id: 3, title: 'Алтын сақа', author: 'Ертегі', year: 1970 },
//   { id: 4, title: 'Батырлар жыры', author: 'Халық шығармашылығы', year: 1950 }
// ];


// app.get('/', (req, res) => {
//     res.send('Hello world its  my first backend application')
// });

// app.get('/api/books', (req, res) => {
//     const { sort } = req.query;
//     let result = [...books];
//     if (sort === 'asc'){
//         result.sort((a, b) => a.year - b.year);
//     }
//     else if (sort === 'desc') {
//          result.sort((a, b) => b.year - a.year);
//     }

//     res.json(result);

// });

// app.get('/api/books/search', (req, res) => {
//     const { title } = req.query;

//     if (!title) {
//         res.json(books)
//     }

//     const filtered = books.filter(u =>
//         u.title.toLowerCase().includes(title.toLowerCase())
//     )

//     res.json(filtered)

// });

// app.get('/api/books/:year', (req, res) => {
//     const { year } = req.params
//     const title = books.find(u =>
//         u.year === parseInt(year)
//     );
//     if (!title) {
//         res.status(404).json({error: 'Пайдаланушы табылмады'})
//     }

//     res.json(title)
// })

// const users = []

// app.post('/api/register', (req, res) => {
//     const { username, password } = req.body

//     if (!username && !password){
//         return res.status(401).json({error: "fwefpl"})
//     }

//     const existingUser = users.find(u =>
//         u.username === username
//     )

//     if (existingUser){
//         return res.status(409).json({error: "gfrkjmrgf"})
//     }

//     const newUser={
//         id: users.length + 1,
//         username: username,
//         password: password
//     }

//     users.push(newUser)
    
//     res.status(201).json({message: "gfrkjmrgfvrverf", user: newUser})
// })

// app.post('/api/login', (req, res) => {
//     const { username, password } =req.body

//     const user = users.find(u =>
//         u.username === username && u.password === password
//     )

//     if (!user) {
//         return res.status(404).json({error: 'ekkfmekofme'})
//     }

//     res.status(200).json({messsage: 'riegergi', user: user})
// })

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

const students = [
  { id: 1, name: "Aruzhan", grade: "A", age: 16 },
  { id: 2, name: "Dias", grade: "B", age: 17 },
  { id: 3, name: "Miras", grade: "A", age: 15 }
]


app.get('/api/students', (req, res) => {
    const { sort } = req.query;
    let result = [...students];
    if (sort === 'asc'){
        result.sort((a, b) => a.age - b.age);
    }
    else if (sort === 'desc')   {
         result.sort((a, b) => b.age - a.age);
    }

    res.json(result);
});


app.get('/api/students/search', (req, res) => {
    const { name } = req.query;

    if (!name) {
        res.json(students)
    }

    const filtered = students.filter(u =>
        u.name.toLowerCase().includes(name.toLowerCase())
    )

    res.json(filtered)

});

app.get('/api/students/:id', (req, res) => {
    const { id } = req.params
    const name = students.find(u =>
        u.id === parseInt(id)
    );
    if (!name) {
        res.status(404).json({error: 'Пайдаланушы табылмады'})
    }

    res.json(name)
})

app.post('/api/students', (req, res) => {
    const { name, grade, age } = req.body

    if (!name && !grade && !age){
        return res.status(401).json({error: "sigma"})
    }

    const existingUser = students.find(u =>
        u.name === name
    )

    if (existingUser){
        return res.status(409).json({error: "sigma2"})
    }

    const newStudent={
        id: students.length + 1,
        name: name,
        grade: grade,
        age: age
    }

    students.push(newStudent)
    
    res.status(201).json({message: "SIGMA3", name: newStudent})
})

console.log(students);