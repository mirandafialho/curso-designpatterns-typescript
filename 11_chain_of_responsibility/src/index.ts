import * as readline from 'readline'
import Server from './servers/Server'
import CheckUserMiddleware from './middlewares/CheckUserMiddleware'
import CheckPermissionMiddleware from './middlewares/CheckPermissionMiddleware'
import CheckWeakPasswordMiddleware from './middlewares/CheckWeakPasswordMiddleware'

declare var process
const server = new Server()

function setPromptQuestions() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question('Digite o seu e-mail: ', email => {
        rl.question('Digite a sua senha: ', password => {
            server.login(email, password)
            rl.close()
        })
    })

    rl.on('close', setPromptQuestions)
}

const middUser = new CheckUserMiddleware()
const middPermission = new CheckPermissionMiddleware()
const middWeakPassword = new CheckWeakPasswordMiddleware()

middUser.linkWith(middPermission)
middUser.linkWith(middWeakPassword)

server.setMiddleware(middUser)

setPromptQuestions()