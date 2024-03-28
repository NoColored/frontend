import type { actionType, WebSocketMessage } from '@/types/websocket';

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

    this.webSocket.onclose = () => {
      console.log('close');
    };
  }

  isConnected() {
    return (
      this.webSocket.readyState === this.webSocket.CONNECTING ||
      this.webSocket.readyState === this.webSocket.OPEN
    );
  }

  onMessage(
    handleWebSocketMessage: (message: WebSocketMessage<actionType>) => void,
  ) {
    this.webSocket.onmessage = (event) => {
      const message = JSON.parse(event.data) as WebSocketMessage<actionType>;
      console.log(message);
      handleWebSocketMessage(message);
    };
  }

  unmount() {
    console.log('unmount');
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
