import ILandVehicle from './interfaces/ILandVehicle'

export default class Scooter implements ILandVehicle {
    startRoute(): void {
        this.getCargo()
        console.log('Iniciando a entrega com patinete...')
    }
    getCargo(): void {
        console.log('Pegamos a encomenda!')
    }
}