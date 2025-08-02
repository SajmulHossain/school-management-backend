/* eslint-disable no-console */
import {Server} from 'http';
import app from './app';

let server: Server;

const pushStartServer = async() => {
   try {
    server = app.listen(3000, () => {
      console.log("Server is running");
    });
   } catch (error) {
    console.log(error);
   }
}


pushStartServer();

const stopEngine = (signal: string, error?: unknown) => {
    console.log(`${signal} detected. Server is shutting down...`);


}

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

