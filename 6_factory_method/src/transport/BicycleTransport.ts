import Transport from './Transport'
import IVehicle from './vehicle/interfaces/IVehicle'
import Bicycle from './vehicle/Bicycle'

export default class MotorcycleTransport extends Transport {
    protected create(): IVehicle {
        return new Bicycle()
    }
}