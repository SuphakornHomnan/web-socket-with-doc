import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

const msgs = [
  {
    type: 'text',
    value: 'Hello socket!',
  },
];

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('get-msg')
  users(msg: any) {
    return msg;
  }

  @SubscribeMessage('send-msg')
  createUser(@MessageBody() data: any) {
    msgs.push(data);

    this.server.emit('get-msg', msgs);
  }
}
