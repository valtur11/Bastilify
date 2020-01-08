const db = require('../../models/db')

// r is result

async function getCategories (req, res, next) {
  try {
    const r = await (async function () {
      const foundCategories = await db.Category.find({})
      return foundCategories
    })()
    res.json(r)
  } catch (err) {
    return next(err)
  }
}

async function newCategory (req, res, next) {
  try {
    const r = await (function () {
      const doc = new db.Category({ title: req.body.title, params: {} })
      req.body.specs.forEach(val => doc.params.set(val[0], val[1]))
      doc.save()
      return doc
    })()
    res.json(r)
  } catch (err) {
    return next(err)
  }
}

async function deleteCategory (req, res, next) {
  try {
    const r = await (async function () {
      console.log(req.params._id)
      // doesn't findById
      const foundCategory = await db.Category.findById(req.params._id)
      await foundCategory.remove()
      return foundCategory
    })()
    res.json(r)
  } catch (err) {
    return next(err)
  }
}

module.exports = { getCategories, newCategory, deleteCategory }
