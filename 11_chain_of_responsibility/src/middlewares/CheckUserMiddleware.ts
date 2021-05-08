import * as chalk from 'chalk'
import Database from '../servers/Database'
import Middleware from './Middleware'

export default class CheckUserMiddleware extends Middleware {
    public check(email: string, password: string): boolean {
        if (email.indexOf('@') === -1) {
            console.log(chalk.red('E-mail inválido'))
            return false
        }

        if (!Database.filter(
            item => item.email === email 
            && 
            item.password === password
        ).length) {
            console.log(chalk.red('E-mail e/ou senha inválidos.'))
            return false
        }
        
        return this.checkNext(email, password)
    }
}