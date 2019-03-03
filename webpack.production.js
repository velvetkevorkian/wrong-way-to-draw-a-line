const resolve = require('path').resolve
const config = require('@velvetkevorkian/sketch-boilerplate-p5').config
const title = 'Chapter 3: The wrong way to draw a line'
const slug = 'wrong-way-to-draw-a-line'
const path = resolve(__dirname)

module.exports = config(title, slug, path, 'production')
