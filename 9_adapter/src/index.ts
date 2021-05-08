import PayonnerAdapter from './adapters/PayonnerAdapter'
import IPayonnerPayment from './payonner/IPayonnerPayment'
import Payonner from './payonner/Payonner'
import IPayPalPayment from './paypal/IPayPalPayment'
import PayPal from './paypal/PayPal'
import MercadoPagoAdapter from './adapters/MercadoPagoAdapter'
import MercadoPago from './mercadopago/MercadoPago'

const paypal: IPayPalPayment = new PayPal()
const payonner: IPayPalPayment = new PayonnerAdapter(new Payonner())
const mercadopago: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago())

paypal.paypalPayment()
paypal.paypalReceive()
payonner.paypalPayment()
payonner.paypalReceive()
mercadopago.paypalPayment()
mercadopago.paypalReceive()