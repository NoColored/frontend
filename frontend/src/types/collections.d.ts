
export interface Skins{
  id: number;
  name: string;
  link: string;
  own: boolean;
  equipped: boolean;
}

export interface Labels {
  id: number;
  name: string;
  condition: string;
  own: boolean;
  equipped: boolean;
}

export interface Achievements {
  id: number;
  name: string;
  reward: string;
  achieved: boolean;
}
export interface Collections {
  skins: Skins[];
  labels: Labels[];
  achievements: Achievements[];
}
