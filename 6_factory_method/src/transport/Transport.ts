import IVehicle from './vehicle/interfaces/IVehicle'

export default abstract class Transport {
    start(): void {
        const vehicle = this.create()
        vehicle.startRoute()
    }

    protected abstract create(): IVehicle
}