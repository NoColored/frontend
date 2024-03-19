// 최상단 Props 정의 (info, settings)
export interface indexProps {
  onClose?: () => void;
  onBack?: () => void;
}

// 최상단 카테고리 분류 명령 Props 정의
export interface viewProps {
  now: 'main' | 'item' | 'game' | 'tier';
}

// info Modal Props 정의 (main, item, tier)
export interface mainProps {
  onClose?: () => void;
  onNavigate: (view: viewProps['now']) => void;
}
