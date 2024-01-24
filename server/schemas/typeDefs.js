const typeDefs = `
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    wishlist: Wishlist
    cart: Cart
  }

  type Cart {
    _id: ID
    products: [Product]
    addedOn: [String]
    quantity: [Int] 
  }

  type Wishlist {
    _id: ID
    products: [Product]
    addedOn: [String]
    quantity: [Int]
  }

  type Tag {
    _id: ID
    name: String
    tagGroup: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input ProductInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    image: String
    price: Float
    quantity: Int
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String,, tag: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    cart(_id: ID!): Cart
    wishlist(_id: ID!): Wishlist
    checkout(products: [ProductInput]): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    logout: String
    addToCart(product: ID!, quantity: Int): Cart
    addToWishlist(product: ID!, quantity: Int): Wishlist
    removeFromCart(product: ID!): Cart
    removeFromWishlist(product: ID!): Wishlist
    clearCart: Cart
    clearWishlist: Wishlist
  }
`;

module.exports = typeDefs;
