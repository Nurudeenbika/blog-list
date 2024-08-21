const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

let blogs = [
    {
        "id": "1",
        "title": "Intro to HTML",
        author: "Hassan Nurudeen",
        url: "nurubika.com/intro-to-html",
        likes: 2000
     }, 
   {
      "id": "2",
      "title": "Intro to Js",
      author: "Hassan Osikpemhi",
      url: "nurubika.com/intro-to-Js",
      likes: 1000
   }, 
   {
      "id": "3",
      "title": "Intro to React",
      author: "Bika Nurudeen",
      url: "nurubika.com/intro-to-react",
      likes: 3000
   } 
]

app.get('/', (request, response) => {
  response.send('<h1>Helllo World!</h1')
})

app.get('/api/blogs', (request, response) => {
  response.json(blogs)
})

app.get('/api/blogs/:id', (request, response) => {
    const id = request.params.id
    const blog = blogs.find(blog => blog.id === id)
    if (blog) {
      response.json(blog)
    } else {
        response.status(404).end()
    } 
})

app.post('/api/blogs', (request, response) => {
    const blog = request.body
    console.log(blog)
    response.json(blog)
})

app.delete('/api/blogs/:id', (request, response) => {
    const id = request.params.id
    blogs = blogs.filter(blog => blog.id !== id)

    response.status(204).end()
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }

  app.use(express.json())
  app.use(requestLogger)

const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})  