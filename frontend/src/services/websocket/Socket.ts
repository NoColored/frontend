import type {
  actionType,
  WebSocketMessage,
  WebSocketMessageHandler,
} from '@/types/websocket';

import { WEBSOCKET_URL } from '@/services/constants';

export class Socket {
  protected webSocket: WebSocket;

  constructor() {
    this.webSocket = { readyState: 3 } as WebSocket;
  }

  connect() {
    this.webSocket = new WebSocket(WEBSOCKET_URL);

    this.webSocket.onopen = () => {
      this.sendToken();
    };
  }

  isConnected() {
    return (
      this.webSocket.readyState === this.webSocket.CONNECTING ||
      this.webSocket.readyState === this.webSocket.OPEN
    );
  }

  onClose(handleWebSocketMessage: WebSocketMessageHandler) {
    this.webSocket.onclose = () => {
      this.connect();
      this.onMessage(handleWebSocketMessage);
    };
  }

  onMessage(handleWebSocketMessage: WebSocketMessageHandler) {
    this.webSocket.onmessage = (event) => {
      const message = JSON.parse(event.data) as WebSocketMessage<actionType>;
      handleWebSocketMessage(message);
    };
  }

  unmount() {
    // console.log('unmount');
    this.webSocket.onmessage = () => {};
  }

  private sendToken() {
    const token = JSON.stringify({
      action: 'token',
      data: localStorage.getItem('token'),
    });
    this.webSocket.send(token);
  }
}
