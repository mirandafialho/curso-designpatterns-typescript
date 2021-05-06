import IVehicleMotorcycle from './IVehicleMotorcycle'

export default class Motorcycle implements IVehicleMotorcycle {
    constructor(
        color: string,
        year: number,
        engine: number
    ) {
        this.configMotorcycle(color, year, engine)
    }
    
    configMotorcycle(color: string, year: number, engine: number): void {
        console.log(`Uma moto da cor ${color}, do ano ${year} e com motor de ${engine}.`)
        this.start()
    }

    start(): void {
        console.log('Ligando os motores.')
    }
}