require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Blog = require('./models/blog')

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>Helllo World!</h1')
})

app.get('/api/blogs', (request, response) => {
  Blog.find({}).then(blogs => {
    response.json(blogs)
  })  
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
   const blog = new Blog(request.body)

   blog.save().then(result => {
    response.status(201).json(result)
   })
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

  app.use(unknownEndpoint)
  app.use(express.json())
  app.use(requestLogger)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})  