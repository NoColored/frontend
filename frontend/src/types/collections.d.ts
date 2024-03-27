export interface Collections {
  skins: Skins[];
  labels: Labels[];
  achievements: Achievements[];
}

export interface Skins {
  id: number;
  name: string;
  link: string;
  isOwn: boolean;
  isEquipped: boolean;
}

export interface Labels {
  id: number;
  name: string;
  condition: string;
  isOwn: boolean;
  isEquipped: boolean;
}

export interface Achievements {
  id: number;
  name: string;
  reward: string;
  isAchieved: boolean;
}
