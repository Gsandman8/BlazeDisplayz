const mongoose = require('mongoose');
const db = require('./connection');

const { User, Product, Category, Tag } = require('../models');
const cleanDB = require('./cleanDB');



async function seed() {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  // Insert categories
  const categories = await Category.insertMany([
    { name: 'Men' },
    { name: 'Women' },
    { name: 'Children' },
    { name: 'New Arrivals' },
  ]);

  console.log('Categories seeded');

  // Insert tags
  const tags = await Tag.insertMany([
    { name: 'Shirt', tagGroup: 'Clothing' },
    { name: 'Pants', tagGroup: 'Clothing' },
    { name: 'Shoes', tagGroup: 'Clothing' },
    { name: 'Dresses', tagGroup: 'Clothing' },
    { name: 'Jackets', tagGroup: 'Clothing' },
    { name: 'Accessories', tagGroup: 'Clothing' },
    { name: 'Hats', tagGroup: 'Clothing' },
    { name: 'XS', tagGroup: 'Size'},
    { name: 'Small', tagGroup: 'Size' },
    { name: 'Medium', tagGroup: 'Size' },
    { name: 'Large', tagGroup: 'Size' },
    { name: 'XL', tagGroup: 'Size' },
  ]);

  console.log('Tags seeded');

  // Combine and insert products
  const categoryFiles = [
    'mensHoodies',
     'mensPants',
     'mensShoes',
     'mensShirts',
     'womensHoodies',
     'womensPants',
     'womensShoes',
     'womensTops',
     'childrensHoodies',
     'childrensPants',
     'childrensShoes',
     'childrensShirts'
    ];
  // for (const categoryFile of categoryFiles) {
  //   const products = require(`../../seed/categories/${categoryFile}`)({
  //       categories,
  //       tags
  //   });
  //   const categoryId = categories.find((cat) => cat.name.toLowerCase() === 'men').id;

  //   const productsWithCategory = products.map(product => ({
  //     ...product,
  //     category: categoryId,
  //   }));

  //   await Product.insertMany(productsWithCategory);
  //   console.log(`${categoryFile} products seeded`);
  // }
  for (const categoryFile of categoryFiles) {
    const products = require(`../../seed/categories/${categoryFile}`)({
      categories,
      tags
    });
  
    for (const product of products) {
      // Use the product's category name to find the corresponding categoryId
      const categoryName = product.category.toLowerCase();
      const categoryId = categories.find((cat) => cat.name.toLowerCase() === categoryName)._id;
  
      const productWithCategory = {
        ...product,
        category: categoryId,
      };
  
      await Product.create(productWithCategory);
    }
  
    console.log(`${categoryFile} products seeded`);
  }


  process.exit();
}

seed();