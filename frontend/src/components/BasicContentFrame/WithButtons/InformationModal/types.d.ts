import { INFO_TYPE } from '@/components/BasicContentFrame/WithButtons/InformationModal/constants';

export interface indexProps {
  onClose?: () => void;
  onBack: () => void;
}

type infoType = (typeof INFO_TYPE)[number];
