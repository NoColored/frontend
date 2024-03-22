import React, { SetStateAction } from 'react';

export class Socket {
  protected webSocket: WebSocket;

  constructor(url: string, token: string | null) {
    this.webSocket = new WebSocket(url);

    this.webSocket.onopen = () => {
      this.webSocket.onmessage = (event) => {
        const connection = event.data;
        console.log(connection);
        // TODO: token 관련 에러처리
      };

      const action = JSON.stringify({
        action: 'token',
        data: token,
      });
      console.log(action);
      this.webSocket.send(action);
    };
  }

  getMessage<T>(setStateAction: React.Dispatch<SetStateAction<T>>) {
    this.webSocket.onmessage = (event) => {
      const message = JSON.parse(event.data) as T;
      setStateAction(message);
    };
  }
}
