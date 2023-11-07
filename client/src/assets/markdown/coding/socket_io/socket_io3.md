# 3. Database change promulgation

In this example, a front end makes an API call to effect database changes (create, update or delete). The back end promulgate this change to all clients so they can refresh their view to reflect these database changes in real time.

## 3.1 The back end

### 3.1.1 app.mts

app.mts

```typescript

import express, { Express, Request, Response }  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import chalk from "chalk";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { Server } from "socket.io";
import { createServer } from "node:http";

import { connectToMongoDB } from "./tools/mongodb-connection.mjs";
import { router as MongoDB_Router } from './routes/mongodb/routes.mjs';
// import {router as lanidRoutes} from'./routes/hr/lanid.routes.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

dotenv.config({path: path.resolve(__dirname, '../.env')});

const PORT = process.env.PORT ? process.env.PORT : 5202;

const MongoDB_Connection_String = process.env.DEV_MONGODB;

try {
    if (MongoDB_Connection_String) {
        await connectToMongoDB( MongoDB_Connection_String);
    }
} catch(e) {
    console.log(chalk.bold.red(`💩 MongoDB connection failure!`, e)); 
}

// Note: type can be inferred. Type annotation below are optional. 
const app: Express = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api/mongodb', MongoDB_Router);
// app.use('/api/hr', lanidRoutes);

// 🅰️ serve angular app
app.use(express.static(path.join(__dirname, '..', 'angular')));
app.all('/*', (req, res, next) => {
    res.sendFile('index.html', {root: path.join(__dirname, '..', 'angular')});
});

const server = createServer(app);

// ⚽ socket.io: server-side code 
const io = new Server(server);
app.set('socket_io', io);  // name io so it can be consumed in controllers

io.on('connection', (socket) => {
    console.log(chalk.bold.green('👨 A user has connected to Websocket server!'));

    socket.on('disconnect', () => {
        console.log(chalk.bold.green('👋 A user disconnected from Websocket server!'));
    });
});


server.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
});

```

### 3.1.2 controller file

```typescript
// A user cancels a reservation. This operation requires socket.io for broadcasting, so all clients are notified of this change.
const cancelReservationByID = async (req, res) => {
    const io = req.app.get('socket_io');
    try {
        await Reservation.findByIdAndUpdate(req.body.id, { "cancellationTime": new Date() });
        console.log('cancelled a reservation!');
        res.status(200).json({ 'msg': 'Reservation cancelled!' });
        console.log(`%c 👌 A reservation has been cancelled.`, 'color: green');
        io.emit('dbChange'); // database change is broadcasted to all clients
        console.log(`%c 📻 Database change of a cancellation has been broadcasted.`, 'color: green');
    }
    catch (e) {
        console.log(`%c 💩 Error occured while cancelling reservation from MongoDB database: ${e}`, 'color: red');
    }
};
```

## 3.2 The front end

### 3.2.1 The service

```typescript
import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  baseUrl = environment.baseUrl;
  socket = io(this.baseUrl);
  serverEvent$: Subject<string> = new Subject();

  // Use arrow function to access serverEvent$ defined in SocketIoService class.
  dbChange = () => {
    this.socket.on('dbChange', () => {
      this.serverEvent$.next('dbChange');
    });

    return this.serverEvent$.asObservable();
  }

  constructor() {
    console.log('%c socket-io service instantiated!', 'color: green');
  }
}

```

### 3.2.2 The component

```typescript
constructor(
    private io: SocketIoService
) {}

// ⚽ socket.io subscription
this.io.dbChange().subscribe({
    next: (data: string) => {
    if (data === 'dbChange' && this.singleReservationFormWrapper) {  // if there is a database change and user already has an active inquiry
        this.onSubmitInquiry();
        console.log('%c A database change has just occurred. Available room list has been refreshed.', 'color: green');
    }
    }
});
```

