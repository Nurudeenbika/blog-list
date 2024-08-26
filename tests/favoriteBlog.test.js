const { test, describe } = require('node:test')
const assert = require('node:assert')


const { favoriteBlog } = require('../utils/list_helper')

describe('favoriteBlog', () => {
  const blogs = [
    {
      title: 'Blog 1',
      author: 'Author 1',
      likes: 5
    },
    {
      title: 'Blog 2',
      author: 'Author 2',
      likes: 10
    },
    {
      title: 'Blog 3',
      author: 'Author 3',
      likes: 15
    }
  ]

  test('when list is empty, returns null', () => {
    const result = favoriteBlog([])
    assert.deepStrictEqual(result, null)
  })

  test('when list has only one blog, equals the likes of the blog', () => {
    const result = favoriteBlog([blogs[0]])
    assert.deepStrictEqual(result, blogs[0])
  })

  test('when list has multiple blogs, return the one with the most likes', () => {
    const result = favoriteBlog(blogs)
    assert.deepStrictEqual(result, {
      title: 'Blog 3',
      author: 'Author 3',
      likes: 15
    })
  })
})