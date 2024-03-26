import { INFO_TYPE } from '@/components/BasicContentFrame/WithButtons/InfoButton/constants';

export interface indexProps {
  onClose: () => void;
  onBack: () => void;
}

export interface settingsProps {
  onClose: () => void;
}

type infoType = (typeof INFO_TYPE)[number];
