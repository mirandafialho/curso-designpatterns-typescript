import IVehicle from './IVehicle'

export default interface IVehicleCar extends IVehicle {
    configCar(
        color: string,
        year: number,
        engine: number,
        seats: number
    ): void
}