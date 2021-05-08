import * as chalk from 'chalk'
import Middleware from '../middlewares/Middleware'

export default class Server {
    private _middleware: Middleware

    setMiddleware(middleware: Middleware): void {
        this._middleware = middleware
    }

    login(email: string, password: string): boolean {
        if (this._middleware.check(email, password)) {
            console.log(chalk.green('Usuário autorizado com sucesso.'))
            return true
        }

        return false
    }
}