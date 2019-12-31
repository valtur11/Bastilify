const db = require('../../models/db')

async function newCategory (req, res, next) {
  try {
    const r = await (function () {
      const doc = new db.Category({ code: req.body.code, params: {} })
      req.body.specs.forEach(val => doc.params.set(val[0], val[1]))
      doc.save()
      return doc
    })()
    res.json(r)
  } catch (err) {
    return next(err)
  }
}

module.exports = newCategory
