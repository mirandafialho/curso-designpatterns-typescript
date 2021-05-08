import Token from '../utils/Token'
import IMercadoPago from './IMercadoPago'

export default class MercadoPago implements IMercadoPago {
    private _token: Token

    authToken(): Token {
        return new Token()
    }

    enviarPagamentos(): void {
        this._token = this.authToken()
        console.log('TOKEN: ' + this._token.getToken())
        console.log('Enviando pagamentos via Mercado Pago.')   
    }

    receberPagamentos(): void {
        console.log('Recebendo pagamentos via Mercado Pago.')
    }
    
}