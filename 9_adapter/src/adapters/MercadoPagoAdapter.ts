import IPayPalPayment from '../paypal/IPayPalPayment'
import Token from '../utils/Token'
import MercadoPago from '../mercadopago/MercadoPago'

export default class MercadoPagoAdapter implements IPayPalPayment {
    constructor(
        private _mercadopago: MercadoPago
    ) {
        console.log('Adaptando o Mercado Pago utilizando os métodos e padrões do PayPal.')
    }

    authToken(): Token {
        return this._mercadopago.authToken()
    }

    paypalPayment(): void {
        return this._mercadopago.enviarPagamentos()
    }

    paypalReceive(): void {
        return this._mercadopago.receberPagamentos()
    }
}