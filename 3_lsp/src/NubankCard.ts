import IPaymentInstrument from './IPaymentInstrument';

export default abstract class NubankCard implements IPaymentInstrument {
    validate(): void {
        console.log('Validação Básica')
    }
    collectPayment(): void {
        console.log('Pagamento Realizado')
    }

}