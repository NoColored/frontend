import { INFO_TYPE } from '@/components/frame/with-buttons/InfoButton/constants';

export interface indexProps {
  onClose: () => void;
  onBack: () => void;
}

type infoType = (typeof INFO_TYPE)[number];
