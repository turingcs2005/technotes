# 2. A real-time chat app

In this example, a front end emits an event ('message') with a payload (a text message), and the back end broadcasts this message to all clients.

## 2.1 The back end

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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
dotenv.config({path: path.resolve(__dirname, '../.env')});

const PORT = process.env.PORT ? process.env.PORT : 5555;
const app: Express = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// 🅰️ serve angular app
app.use(express.static(path.join(__dirname, '..', 'angular')));
app.all('/*', (req, res, next) => {
    res.sendFile('index.html', {root: path.join(__dirname, '..', 'angular')});
});

const server = createServer(app);

// ⚽ socket.io: server-side code --------------------------------------- 
const io = new Server(server);

io.on('connection', (socket) => {
    console.log(chalk.bold.green('👨 A user has connected to WebSocket server!'));

    // upon receiving event 'message' from a client, the server broadcast its payload (message) to every client, prefixing the payload with the first 2 characters of socket.id
    socket.on('message', (message) => {
        io.emit('message', `${socket.id.substring(0, 2)}: ${message}`)
    });

    socket.on('disconnect', () => {
        console.log(chalk.bold.green('👋 A user disconnected from WebSocket server!'));
    });
});
// -------------------------------------------------------------------

server.listen(PORT, () => {
    console.log(chalk.bold.green(`Server is listening on port ${PORT}`));
});

```

## 2.2 The front end

### 2.2.1 The service

We use a BehaviorSubject in ChatService as the middleman to connect the back end and the component:

- A BehaviorSubject inherits from the Observable class and hence it is an Observable.
- A BehaviorSubject implements the Observer interface and hence it is an Observer. 
- As an Observer
    - A BehaviorSubject receives messages from the back end via the WebSocket protocol.
    - It then broadcasts the messages by invoking the next() method.
- We typecast the BehaviorSubject to an Observable, so its consumer (the component) can only subscribe to its values passively.

chat.service.ts

```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  baseUrl = environment.baseUrl;
  message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  socket = io(this.baseUrl);

  sendMessage(message: any) {
    console.log('sendMessage: ', message);
    this.socket.emit('message', message);
  }

  getNewMessage = () => { // use arrow function to access message$
    this.socket.on('message', (message) => {
      this.message$.next(message);
    });

    return this.message$.asObservable();
  }
}

```

### 2.2.2 The component

The component subscribes to the service. Each time a new message is emitted, the append that message to a message list.

chat.component.ts

```typescript
import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ ChatService ]
})
export class ChatComponent {
  newMessage = '';
  messageList: string[] = [];

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.chatService.getNewMessage().subscribe({
      next: (message: string) => {
        this.messageList.push(message);
      }
    })
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

}
```

### 2.2.3 The template

The template dislays the list of messages and allows submission of a new message by either clicking a button or pressing the carriage return key.

chat.component.html

```html
<div *ngFor="let message of messageList">
    <li>
        {{ message }}
    </li>
</div>

<input 
    [(ngModel)]="newMessage"
    (keyup)="$event.keyCode == 13 && sendMessage()"
/> &nbsp;

<button (click)="sendMessage()">send</button>
```