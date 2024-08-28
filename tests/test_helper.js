const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'Intro to CSS',
    author: 'Hassan O. Nurudeen',
    url: 'nurubika.com/intro-to-css',
    likes: 3500
  },
  {
    title: 'Intro to HTML',
    author: 'Hassan B. Nurudeen',
    url: 'nurubika.com/intro-to-html',
    likes: 4000
  }
]

const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon' })
  await blog.save()
  await blog.deleteOne()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs, nonExistingId, blogsInDb
}