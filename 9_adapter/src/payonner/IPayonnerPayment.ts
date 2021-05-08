import Token from '../utils/Token'

export default interface IPayonnerPayment {
    authToken(): Token
    sendPayment(): void
    receivedPayment(): void
}