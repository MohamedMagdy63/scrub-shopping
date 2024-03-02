const { gql } = require("@apollo/client");

const MakeOrder= gql`
mutation MakeOrder($username: String!, $email: String!, $phone: String!, $address: String!, $payway: String!, $productOrder: [ID!]!, $orderNumber: Float, $size: [String!]!, $amount: [Float!]!, $discountCode: ID, $commentQ: String, $otherPhone: String) {
    makeOrder(username: $username, email: $email, phone: $phone, address: $address, payway: $payway, productOrder: $productOrder, orderNumber: $orderNumber, size: $size, amount: $amount, discountCode: $discountCode, commentQ: $commentQ, otherPhone: $otherPhone) {
      username
      email
      phone
      address
      size
      payway
      amount
    }
}
`

export {MakeOrder}