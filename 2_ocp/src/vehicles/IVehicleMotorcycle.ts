export default interface IVehicleMotorcycle {
    start(): void
    configure(
        color: string,
        year: number,
        engine: number
    ): void
}