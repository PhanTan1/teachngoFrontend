import { client } from "./Client"

class PaymentServices {
  async makePayment(values) {
    const response = await client.post('payements',
      values
    ).then(res => {
      const { data } = res

      return data
    })

    return response;
  }
}

export default new PaymentServices();