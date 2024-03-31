import React from 'react';

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
    if (window.innerHeight > window.innerWidth) {
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
    return (
      <div
        ref={(ref) => { this.prompt = ref; }}
        className={styles.fullscreenPromptStyle}
      >
        <p>노컬러랜드는 세로 모드를 지원하지 않는다냥.</p>
        {/* <button type="button" onClick={this.goFullScreen}>전체 화면 시작</button> */}
      </div>
    );
  }
}

export default FullscreenPrompt;
