const connection = require('../config/db');

const addCategory = (req, res) => {
  const { CategoryName } = req.body;

  if (!CategoryName) {
    return res.status(400).json({ error: 'CategoryName is required' });
  }

  connection.query(
    'INSERT INTO categories (CategoryName) VALUES (?)',
    [CategoryName],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json({ message: 'Category added successfully', id: results.insertId });
      }
    }
  );
};

const getCategories = (req, res) => {
  connection.query('SELECT * FROM categories', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(results);
    }
  });
};

module.exports = { getCategories, addCategory };
