import Transport from './Transport'
import IVehicle from './vehicle/interfaces/IVehicle'
import Motorcycle from './vehicle/Motorcycle'

export default class MotorcycleTransport extends Transport {
    protected create(): IVehicle {
        return new Motorcycle()
    }
}