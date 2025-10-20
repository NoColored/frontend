import { INFO_TYPE } from './constants';

export interface indexProps {
  onClose: () => void;
  onBack: () => void;
}

type infoType = (typeof INFO_TYPE)[number];
