import mongoose from 'mongoose'

const connectToMongoDB = () => {
    let url = "mongodb://localhost:27101/"
    mongoose.connect(url, { useNewUrlParser: true })
}

const dropCollection = (collectionName) => {
    mongoose.connection.dropCollection(collectionName).catch(err => null)
}

const closeConnectToMongoDB = () => {
    mongoose.connection.close()
}

export { connectToMongoDB, dropCollection, closeConnectToMongoDB }