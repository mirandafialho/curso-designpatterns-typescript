import Token from '../utils/Token'

export default interface IMercadoPago {
    authToken(): Token
    enviarPagamentos(): void
    receberPagamentos(): void
}