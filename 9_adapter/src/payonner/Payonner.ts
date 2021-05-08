import Token from '../utils/Token'
import IPayonnerPayment from './IPayonnerPayment'

export default class Payonner implements IPayonnerPayment {
    private _token: Token

    authToken(): Token {
        return new Token()
    }

    sendPayment(): void {
        this._token = this.authToken()
        console.log('TOKEN: ' + this._token.getToken())
        console.log('Enviando pagamentos via Payonner.')    
    }

    receivedPayment(): void {
        console.log('Recebendo pagamentos via Payonner.')
    }
    
}