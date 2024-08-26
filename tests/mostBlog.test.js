const { test, describe } = require('node:test')
const assert = require('node:assert')

const { mostBlogs } = require('../utils/list_helper')

describe('mostBlogs', () => {
  const blogs = [
    {
      title: 'Blog 1',
      author: 'Robert C. Martin',
      likes: 5
    },
    {
      title: 'Blog 2',
      author: 'Edsger W. Dijkstra',
      likes: 10
    },
    {
      title: 'Blog 3',
      author: 'Robert C. Martin',
      likes: 15
    },
    {
      title: 'Blog 4',
      author: 'Edsger W. Dijkstra',
      likes: 8
    },
    {
      title: 'Blog 5',
      author: 'Robert C. Martin',
      likes: 12
    }
  ]

  test('when list is empty, returns null', () => {
    const result = mostBlogs([])
    assert.strictEqual(result, null)
  })

  test('when list has multiple blogs, return the author with most blogs', () => {
    const result = mostBlogs(blogs)
    assert.deepStrictEqual(result, {
      author: 'Robert C. Martin',
      blogs: 3
    })
  })

  test('when list has only one blog, return that author', () => {
    const result = mostBlogs([blogs[1]])
    assert.deepStrictEqual(result, {
      author: 'Edsger W. Dijkstra',
      blogs: 1
    })
  })

})