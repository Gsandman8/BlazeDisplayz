const db = require('./connection');
const { User, Product, Category, Tag, } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Men' },
    { name: 'Women' },
    { name: 'Children' },
    { name: 'New Arrivals' },
  ]);

  console.log('categories seeded');

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


  const products = await Product.insertMany([
    //new products hoodies
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

//end of hoodies
//start of mens pants

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
//end of mens pants

//start of mens shirts

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
//end of mens shirts

//start of mens shoes
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
    //end of mens shoes
    //start of womens hoodies

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

    //end of womens hoodies

    //start of womens pants
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

    //end of womans pants

    //start of womens shoes
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



    //end of womens shoes

    //start of woemens tops

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



    //end of womens tops



    {
      name: 'Tin of Cookies',
      description:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 69.99,
      quantity: 50
    },
    
    
    {
      name: 'Canned Coffee',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Toilet Paper',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'toilet-paper.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Handmade Soap',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Camera',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
