import * as chalk from 'chalk'
import Middleware from './Middleware'

export default class CheckWeakPasswordMiddleware extends Middleware {
    public check(email: string, password: string): boolean {
        if (password.length <= 6) {
            console.log(chalk.yellow('A senha é fraca. Orientamos colocar uma senha mais segura.'))
            return false
        }

        return this.checkNext(email, password)
    }
}