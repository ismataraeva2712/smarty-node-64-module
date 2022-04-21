const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('hello from my smarty node.its my personal nodemon')
});
const users = [
    { id: 1, name: 'labana', email: 'labana@gmail.com', phone: '01788888999' },
    { id: 2, name: 'sabana', email: 'sabana@gmail.com', phone: '01788888999' },
    { id: 3, name: 'nabana', email: 'nabana@gmail.com', phone: '01788888999' },
    { id: 4, name: 'saluk', email: 'saluk@gmail.com', phone: '01788888999' },
    { id: 5, name: 'jabana', email: 'jabana@gmail.com', phone: '01788888999' },
    { id: 6, name: 'habana', email: 'habana@gmail.com', phone: '01788888999' },
    { id: 7, name: 'pabana', email: 'pabana@gmail.com', phone: '01788888999' },

]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase()
        const matched = users.filter(u => u.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    }

});
app.get('/user/:id', (req, res) => {
    console.log(req.params)
    id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    res.send(user)

})
app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body
    user.id = users.length + 1
    users.push(user)
    res.send(user)
})
app.listen(port, () => {
    console.log('listening to port ', port)
})