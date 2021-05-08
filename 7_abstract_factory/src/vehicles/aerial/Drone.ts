import IAircraft from './interfaces/IAircraft'

export default class Drone implements IAircraft {
    startRoute(): void {
        this.checkWind()
        this.getCargo()
        console.log('Iniciando a decolagem e trajeto...')
    }
    getCargo(): void {
        console.log('Carga acoplada. Estamos prontos!')
    }
    checkWind(): void {
        console.log('Sem vento. Vento OK!')
    }
}