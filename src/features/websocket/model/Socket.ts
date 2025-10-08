const WEBSOCKET_BASE_URL = import.meta.env.VITE_WEBSOCKET_BASE_URL;

export class Socket {
  protected webSocket: WebSocket;
  private reconnect: number;

  constructor() {
    this.webSocket = { readyState: WebSocket.CLOSED } as WebSocket;
    this.reconnect = 1;
  }

  connect() {
    this.webSocket = new WebSocket(WEBSOCKET_BASE_URL);

    this.webSocket.onopen = () => {
      console.debug('websocket connected');
      this.reconnect = 1;
      this.sendToken();
    };
  }

  isConnected() {
    return (
      this.webSocket.readyState === WebSocket.CONNECTING ||
      this.webSocket.readyState === WebSocket.OPEN
    );
  }

  onClose(callback: () => void) {
    this.webSocket.onclose = () => {
      console.debug('websocket disconnected', this.reconnect);
      if (this.reconnect <= 5) {
        setTimeout(() => {
          callback();
        }, this.reconnect++ * 250);
      }
    };
  }

  onMessage<T extends WebSocketMessage>(callback: (message: T) => void) {
    this.webSocket.onmessage = (event) => {
      const message: T = JSON.parse(event.data);
      console.debug('websocket message received', message);
      callback(message);
    };
  }

  onUnmount() {
    this.webSocket.onmessage = () => {};
    this.webSocket.onclose = () => {};
  }

  private sendToken() {
    const token = JSON.stringify({
      action: 'token',
      data: localStorage.getItem('token'),
    });
    this.webSocket.send(token);
  }
}
