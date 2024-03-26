const { gql } = require("@apollo/client");

const MakeOrder= gql`
mutation MakeOrder($username: String!, $email: String!, $phone: String!, $address: String!, $size: [String!]!, $amount: [Float!]!, $payway: String!, $productOrder: [ID!]!, $orderNumber: Upload, $discountCode: ID, $otherPhone: String, $commentQ: String) {
  makeOrder(username: $username, email: $email, phone: $phone, address: $address, size: $size, amount: $amount, payway: $payway, productOrder: $productOrder, orderNumber: $orderNumber, discountCode: $discountCode, otherPhone: $otherPhone, commentQ: $commentQ) {
    id
    amount
    orderNumber
  }
}
`

export {MakeOrder}