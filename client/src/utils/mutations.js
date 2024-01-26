import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $firstName: String
    $lastName: String
    $email: String
    $password: String
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      firstName
      lastName
      email
    }
  }`;

  export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $productId: ID!
    $quantity: Int
    $description: String
    $price: Float
  ) {
    updateProduct(
      productId: $productId
      quantity: $quantity
      description: $description
      price: $price
    ) {
      _id
      name
      description
      price
      quantity
      image
    }
  }`;

  export const LOGOUT = gql`
  mutation logout {
    logout {
      token
      user {
        _id
      }
    }
  }`;

  export const ADD_TO_CART = gql`
  mutation addToCart($productId: ID!, $quantity: Int!) {
    addToCart(productId: $productId, quantity: $quantity) {
      Cart {
        _id
        products {
          _id
          name
          description
          price
          quantity
          image
        }
        addedOn
        quantity
      }
    }
  }`;

  export const ADD_TO_WISHLIST = gql`
  mutation addToWishlist($productId: ID!, $quantity: Int!) {
    addToWishlist(productId: $productId, quantity: $quantity) {
      Wishlist {
        _id
        products {
          _id
          name
          description
          price
          quantity
          image
        }
        addedOn
        quantity
      }
    }
  }`;

  export const REMOVE_FROM_CART = gql`
  mutation removeFromCart($productId: ID!) {
    removeFromCart(productId: $productId) {
      Cart {
        _id
        products {
          _id
          name
          description
          price
          quantity
          image
        }
        addedOn
        quantity
      }
    }
  }`;

  export const REMOVE_FROM_WISHLIST = gql`
  mutation removeFromWishlist($productId: ID!) {
    removeFromWishlist(productId: $productId) {
      Wishlist {
        _id
        products {
          _id
          name
          description
          price
          quantity
          image
        }
        addedOn
        quantity
      }
    }
  }`;

  export const CLEAR_CART = gql`
  mutation clearCart {
    clearCart {
      Cart {
        _id
        products {
          _id
          name
          description
          price
          quantity
          image
        }
        addedOn
        quantity
      }
    }
  }`;

  export const CLEAR_WISHLIST = gql`
  mutation clearWishlist {
    clearWishlist {
      Wishlist {
        _id
        products {
          _id
          name
          description
          price
          quantity
          image
        }
        addedOn
        quantity
      }
    }
  }`;
