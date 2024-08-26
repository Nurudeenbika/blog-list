const { test, describe } = require('node:test')
const assert = require('node:assert')


const { totalLikes } = require('../utils/list_helper')


describe('totalLikes', () => {
  const blogs = [
    {
      title: 'Blog 1',
      author: 'Author',
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

  test('when list is empty, return 0', () => {
    const result = totalLikes([])
    assert.strictEqual(result, 0)
  })

  test('when list has only one blog, equals the likes of the blog', () => {
    const result = totalLikes([blogs[0]])
    assert.strictEqual(result, 5)
  })

  test('when list has multiple blogs, it calculates the total likes', () => {
    const result = totalLikes(blogs)
    assert.strictEqual(result, 30)
  })
})