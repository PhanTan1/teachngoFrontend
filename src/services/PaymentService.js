import { client } from "./Client"

class PaymentServices {
  async makePayment() {
    const response = await client.post('payements').then(res => {
      const { data } = res

      return data
    })

    return response;
  }
}

export default new PaymentServices();