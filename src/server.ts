import {Server} from 'http';
import app from './app';

let server: Server;

const pushStartServer = async() => {
   server = app.listen(3000, () => {
        console.log('Server is running');
    })
}

pushStartServer();