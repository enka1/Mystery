import { config } from 'dotenv'

const activateEnvironmentVariables = () => {
    config()
}

export { activateEnvironmentVariables }