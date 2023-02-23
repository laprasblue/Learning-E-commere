const mongoose = require('mongoose');

const connectString = `mongodb://localhost:27017/e-commerce`;

class Database {
    constructor() {
        this.connect();
    }
    connect(type = 'mongodb') {
        mongoose.set('strictQuery', true);
        if (1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }
        mongoose
            .connect(connectString)
            .then(() => console.log(`Connected mongodb success`))
            .catch((err) => console.log(`Error connect!`));
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

module.exports = Database.getInstance();
