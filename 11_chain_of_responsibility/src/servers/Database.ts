import PermissionType from './PermissionType'

interface DatabaseItem {
    email: string
    password: string
    permission: PermissionType
}

const Database: DatabaseItem[] = [
    {
        email: 'master@hcode.com.br',
        password: '1234567',
        permission: PermissionType.ADMIN
    },
    {
        email: 'user@hcode.com.br',
        password: 'u53rp@ss',
        permission: PermissionType.USER
    }
]

export default Database