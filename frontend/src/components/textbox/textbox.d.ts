import { textboxColor } from '../components/textbox/textbox-data.ts';

// type 명시적 작성
interface labeledtextboxColorType {
  labelColor: (typeof textboxColor)[number];
  titleColor: (typeof textboxColor)[number];
}

// 사용 편의성을 위한 class 구성
export class labeledtextboxColorClass implements textboxColorType {
  labelColor: (typeof textboxColor)[number];
  titleColor: (typeof textboxColor)[number];

  constructor(
    labelColor: (typeof textboxColor)[number],
    titleColor: (typeof textboxColor)[number],
  ) {
    this.labelColor = labelColor;
    this.titleColor = titleColor;
  }
}
