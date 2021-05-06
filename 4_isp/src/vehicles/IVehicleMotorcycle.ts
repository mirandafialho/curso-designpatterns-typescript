import IVehicle from './IVehicle'

export default interface IVehicleMotorcycle extends IVehicle {
    configMotorcycle(
        color: string,
        year: number,
        engine: number
    ): void
}