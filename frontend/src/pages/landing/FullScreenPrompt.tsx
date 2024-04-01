import React from 'react';
import { createPortal } from 'react-dom';

import * as styles from './index.css';

class FullscreenPrompt extends React.Component {
  prompt: HTMLDivElement | null = null;

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    if (window.innerWidth < 780 && window.innerHeight > window.innerWidth) {
      // 세로 모드일 때
      this.showPrompt();
    } else {
      // 가로 모드일 때
      this.hidePrompt();
    }
  };

  showPrompt = () => {
    if (this.prompt) {
      this.prompt.style.display = 'flex';
    }
  };

  hidePrompt = () => {
    if (this.prompt) {
      this.prompt.style.display = 'none';
    }
  };

  render() {
    return createPortal(
      <div
        ref={(ref) => {
          this.prompt = ref;
        }}
        className={styles.fullscreenPromptStyle}
      >
        <pre className={styles.fullscreenPromptText}>
          {`!! 주의 !!\n<가로 모드>를\n장착하세요!`}
        </pre>
        {/* <button type="button" onClick={this.goFullScreen}>전체 화면 시작</button> */}
      </div>,
      document.getElementById('prompt') as HTMLDivElement,
    );
  }
}

export default FullscreenPrompt;
