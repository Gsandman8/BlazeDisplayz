const mongoose = require('mongoose');
const { Product, Category, Tag } = require('../models');
const cleanDB = require('./cleanDB');

const db = require('./connection');


db.once('open', async () => {
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
console.log(categories);
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
console.log(tags);
  console.log('Tags seeded');

  const products = await Product.insertMany([ 
    {
      name: 'Tie Dye',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensHoodies/product1.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Broccolini',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensHoodies/product2.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Play Dough',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensHoodies/product3.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'The Sixth',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensHoodies/product4.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Grom',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensHoodies/product5.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Tiger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensHoodies/product6.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Prince',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensPants/product1.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Cheeto',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensPants/product2.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Patchwork',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensPants/product3.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Business',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensPants/product4.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Crayons',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensPants/product5.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Elmo',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensPants/product6.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Snow Cone',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensPants/product7.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Transformer',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensPants/product8.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'The Goat',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensPants/product9.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'The Pocket',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensPants/product10.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'The Scout',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensPants/product11.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Explorer',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensPants/product12.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Jams',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShirts/product1.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Graphic Design',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensPants/product2.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Bear',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShirts/product3.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Streets',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensPants/product4.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Space',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShirts/product5.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Alien',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShirts/product6.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Lens',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShirts/product7.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Camera',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShirts/product8.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Yello Camera',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShirts/product9.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Skull',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShirts/product10.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Purple Camera',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShirts/product11.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Trucks',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShirts/product12.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Grinder',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShirts/product13.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Second Skull',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShirts/product14.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Character',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShirts/product15.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Little Red',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShoes/product1.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Crayola',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShoes/product2.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Gradient',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShoes/product3.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Blue Laced',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShoes/product1.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Little Patriot',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShoes/product5.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Tractor',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShoes/product6.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Density',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShoes/product7.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'The Josh',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShoes/product8.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Paint Can',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShoes/product9.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'The City',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShoes/product10.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Blue Tips',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShoes/product11.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Runner',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShoes/product12.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Submarine',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShoes/product13.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Grade School',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/childrensShoes/product14.png',
      category: categories[2]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Galaxy Hoodie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensHoodies/product1.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    //new products
    {
      name: 'Grey Hoodie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensHoodies/product2.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Gas Mask Hoodie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensHoodies/product3.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Cityscape Hoodie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensHoodies/product4.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Serpent Hoodie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensHoodies/product5.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Rain Hoodie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensHoodies/product6.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Pac Hoodie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensHoodies/product7.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Crest Hoodie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensHoodies/product8.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Simple Hoodie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensHoodies/product9.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Splat Hoodie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensHoodies/product10.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Melt Hoodie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensHoodies/product11.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Original Hoodie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensHoodies/product12.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Teal Graphic Hoodie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensHoodies/product13.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'The Daily Hoodie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensHoodies/product14.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Anvil Hoodie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensHoodies/product15.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Stencil Hoodie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensHoodies/product16.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Shark Hoodie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensHoodies/product17.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Olive Jogger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensPants/product1.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Gray Jogger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensPants/product2.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Cargo Jogger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensPants/product4.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Denim Jogger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensPants/product5.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Super-Denim Jogger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensPants/product6.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'High Supply Jogger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensPants/product7.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Tagger Jogger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensPants/product8.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Leather Jogger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensPants/product9.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Graffiti Jogger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensPants/product10.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Grind Jogger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensPants/product11.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Delivery Jogger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensPants/product13.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Lopro Jogger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensPants/product14.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Half-Zip Jogger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensPants/product15.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Kilo Jogger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensPants/product16.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Patch King Jogger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensPants/product17.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'Flow Jogger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensPants/product18.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[1]._id]
    },
    {
      name: 'City Boys Up',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShirts/product1.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Active Shooter',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShirts/product2.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Signature',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShirts/product3.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Motion',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShirts/product4.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Villain',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShirts/product5.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Sus',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShirts/product6.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Eazy',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShirts/product7.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'The Machine',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShirts/product8.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Mechanical',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShirts/product9.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'The Button Up',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShirts/product10.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Street King',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShirts/product11.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Speed Racer',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShirts/product12.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'The Boys',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShirts/product13.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Shield',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShirts/product14.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'The Wax',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShirts/product15.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Wellness',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShirts/product16.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[0]._id]
    },
    {
      name: 'Rough Ride',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShoes/product1.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Rottweiler',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShoes/product2.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'High Rollers',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShoes/product3.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Donverse',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShoes/product4.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Straight Laced',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShoes/product6.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'The UPS',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShoes/product7.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Coffee Cake',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShoes/product8.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Tobacco',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShoes/product9.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Saddle Bags',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShoes/product10.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'The Musician',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShoes/product11.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'The Patriot',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShoes/product12.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'The Rain Maker',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShoes/product13.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Trust Issues',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShoes/product14.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Dragon Flyer',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShoes/product15.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Lock Specialist',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/mensShoes/product16.png',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[2]._id]
    },
    {
      name: 'Purple Haze',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product1.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Woulda',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product2.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Icing',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product3.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Track Star',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product4.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'The Invasion',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product5.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'ShortCake',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product6.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Dice Game',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product7.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'The Hook',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product8.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Not Hooman',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product9.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'The Daily',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product10.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'The Giant',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product11.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'The Rover',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product12.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'The Potion',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product13.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Chowder',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product14.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'The Bully',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product15.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'The Cuff',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product16.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Presidential Cafe',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product17.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
    {
      name: 'Kill Bill',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/products/categories/womensHoodies/product18.png',
      category: categories[1]._id,
      price: 69.99,
      quantity: 50,
      tags: [tags[4]._id]
    },
      {
        name: 'Money Trees',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensPants/product1.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[1]._id]
      },
      {
        name: 'The Rider',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensPants/product2.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[1]._id]
      },
      {
        name: 'Hammer',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensPants/product3.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[1]._id]
      },
      {
        name: 'Eye of the Tiger',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensPants/product4.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[1]._id]
      },
      {
        name: 'Light Wash Jeans',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensPants/product5.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[1]._id]
      },
      {
        name: 'Postcard Sweats',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensPants/product6.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[1]._id]
      },
      {
        name: 'The Lamars',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensPants/product7.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[1]._id]
      },
      {
        name: 'Nonstops',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensPants/product8.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[1]._id]
      },
      {
        name: 'Took and Lefts',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensPants/product9.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[1]._id]
      },
      {
        name: 'Hard Hitter',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensPants/product10.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[1]._id]
      },
      {
        name: 'The Gothic',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensPants/product11.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[1]._id]
      },
      {
        name: 'The Play',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensPants/product12.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[1]._id]
      },
      {
        name: 'Buckingham',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensPants/product13.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[1]._id]
      },
      {
        name: 'The Civilian',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensPants/product14.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[1]._id]
      },
      {
        name: 'The Block',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensPants/product15.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[1]._id]
      },
      {
        name: 'The Paddock',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensPants/product16.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[1]._id]
      },
      {
        name: 'The Connection',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product1.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
  
      {
        name: 'The Boogie',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product2.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'The Havanna',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product3.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Neon Nights',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product4.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Cotton Candy',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product5.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'The Set',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product6.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'The Spark',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product7.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'The Universe',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product8.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Get Fly',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product9.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Autumn',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product10.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'The Knock',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product11.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Pop Lock',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product12.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'The Bently',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product13.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Somethin New',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product14.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'The Mami',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product15.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Triple Double',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product16.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'No Play',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensTops/product1.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Hand Out',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product2.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Shutter Fly',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product3.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Airplane Mode',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product4.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Weaponized',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product6.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Show Time',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product7.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Night Rider',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product8.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Necessary',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product9.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'No Bammer',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product10.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Chewy',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product11.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'The Dash',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product12.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'The Move',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product13.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Bugatting',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product14.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Old English',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product15.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Iceberg Slim',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product16.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
      {
        name: 'Fake ID',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: '/products/categories/womensShoes/product17.png',
        category: categories[1]._id,
        price: 69.99,
        quantity: 50,
        tags: [tags[2]._id]
      },
  ]);
  console.log(products);
  console.log('products seeded');
  process.exit();
});


