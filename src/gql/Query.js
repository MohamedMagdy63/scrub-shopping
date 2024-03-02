const { gql } = require("@apollo/client");

const GetProducts = gql`
query Query {
    productsFeed {
      id
      gender
      color
      image
      price
      status
    }
}
`
const GetProductByType = gql`
query Query($gender: String!) {
    productType(gender: $gender) {
      id
      color
      gender
      image
      price
      status
    }
}
`
const GetProductByID = gql`
query Query($productId: ID!) {
    product(id: $productId) {
      id
      gender
      color
      image
      price
      status
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