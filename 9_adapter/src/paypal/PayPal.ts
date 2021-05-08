import Token from '../utils/Token'
import IPayPalPayment from './IPayPalPayment'

export default class PayPal implements IPayPalPayment {
    private _token: Token
    
    authToken(): Token {
        return new Token()
    }

    paypalPayment(): void {
        this._token = this.authToken()
        console.log('TOKEN: ' + this._token.getToken())
        console.log('Enviando pagamentos via PayPal.')
    }

    paypalReceive(): void {
        console.log('Recebendo pagamentos via PayPal.')
    }
    
}