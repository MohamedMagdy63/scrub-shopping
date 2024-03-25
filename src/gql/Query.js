const { gql } = require("@apollo/client");

const GetProducts = gql`
query Product {
  productsFeed {
    id
    price
    status
    color {
      color
      colorName
      id
    }
    gender
    amounts
    createdAt
    updatedAt
    image
  }
}
`
const GetProductByType = gql`
query Product($gender: String!) {
  productType(gender: $gender) {
    id
    amounts
    gender
    image
    price
    status
    color {
      id
      color
      colorName
    }
    updatedAt
    createdAt
  }
}
`
const GetProductByID = gql`
query Product($productId: ID!) {
  product(id: $productId) {
    id
    gender
    amounts
    image
    price
    status
    color {
      id
      color
      colorName
    }
  }
}
`
const CheckPromoCode = gql`
query Query($code: String!) {
  checkPromocode(code: $code) {
    id
    code
    expire
    expired
    discount
  }
}
`
export {GetProducts,GetProductByType,GetProductByID,CheckPromoCode}