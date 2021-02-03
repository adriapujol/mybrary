const express = require("express");
const book = require("../models/book");
const router = express.Router();
const Book = require('../models/book');

router.get("/", async (req, res) => {
  let books = []
  try {
    books = await Book.find().sort({ createdAt: 'desc' }).limit(10).exec();
  } catch {
    books = [];
  }
  res.render("index", { books: books });
});

router.get("/home", (req, res) => {
  res.render("home");
});

module.exports = router;
