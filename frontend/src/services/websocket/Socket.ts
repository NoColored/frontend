import { Dispatch, SetStateAction } from 'react';

import { WEBSOCKET_URL } from '@/services/constants';

export class Socket {
  protected webSocket: WebSocket;

  constructor() {
    this.webSocket = new WebSocket(WEBSOCKET_URL);

    this.webSocket.onopen = () => {
      this.webSocket.onmessage = (event) => {
        const connection = event.data;
        console.log(connection);
        // TODO: token 관련 에러처리
      };

      const action = JSON.stringify({
        action: 'token',
        data: localStorage.getItem('token'),
      });
      console.log(action);
      this.webSocket.send(action);
    };
  }

  getMessage<T>(setStateAction: Dispatch<SetStateAction<T>>) {
    this.webSocket.onmessage = (event) => {
      const message = JSON.parse(event.data) as T;
      setStateAction(message);
    };
  }
}
