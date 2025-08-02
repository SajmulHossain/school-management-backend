import {Server} from 'http';
import app from './app';

let server: Server;

const pushStartServer = async() => {
   server = app.listen(3000, () => {
        console.log('Server is running');
    })
}


pushStartServer();

process.on("SIGINT", () => {
    console.log("SIGINT detected. Server is going down...");

    if(server) {
        server.close(() => {
            process.exit(1);
        })
    }

    process.exit(1);
})

process.on("SIGTERM", () => {
    console.log("SIGTERM detected. Server is going down...");

    if(server) {
        server.close(() => {
            process.exit(1);
        })
    }

    process.exit(1);
})

process.on("unhandledRejection", () => {
    console.log('UnhandleRejection detected. Server is going down...');

    if(server) {
        server.close(() => {
            process.exit(1);
        })
    }

    process.exit(1);    
})

process.on("uncaughtException", () => {
    console.log("uncaughtException detected. Server is going down...");

    if(server) {
        server.close(() => {
            process.exit(1);
        })
    }

    process.exit(1);    
})

process.on("", () => {
    console.log("uncaughtException detected. Server is going down...");

    if(server) {
        server.close(() => {
            process.exit(1);
        })
    }

    process.exit(1);    
})

