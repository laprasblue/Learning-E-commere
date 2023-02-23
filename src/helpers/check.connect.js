const mongoose = require('mongoose');
const os = require('os');
const process = require('process');
const _SECONDS = 5000;

// count connections
const countConnect = () => {
    const numConnections = mongoose.connections.length;
    console.log(`Number of connections::${numConnections}`);
};

// Check overload server
const checkOverload = () => {
    setInterval(() => {
        const numConnections = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        const maxConnections = numCores * 5;

        console.log(`Active connection::${numConnections}`);
        console.log(`Memory usage::${memoryUsage / 1024 / 1025} MB`);
        if (numConnections > maxConnections) {
            console.log(`Connection overload detected!`);
        }
    }, _SECONDS); // check every 5s
};
