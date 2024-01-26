const [ categories, tags ] = require('../../server/config/seeds');
console.log(categories)
module.exports = [
    //start of childrens hoodies
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
  
      //end of childrens hoodies
  
]