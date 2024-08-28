const _ = require('lodash')

const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  return blogs.reduce((favorite, blog) => {
    return blog.likes > favorite.likes ? blog : favorite
  })

}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const blogCounts = _.countBy(blogs, 'author')

  const authorsWithBlogs = _.map(blogCounts, (blogs, author) => ({ author, blogs }))

  const topAuthor = _.maxBy(authorsWithBlogs, 'blogs')

  return topAuthor
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const likesByAuthor = _.groupBy(blogs, 'author')

  const totalNoLikes = _.map(likesByAuthor, (authorBlogs, author) => ({
    author,
    likes: _.sumBy(authorBlogs, 'likes')
  }))

  const topAuthor = _.maxBy(totalNoLikes, 'likes')

  return topAuthor

}


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}