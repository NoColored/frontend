interface Skins {
  id: number;
  name: string;
  link: string;
  own: boolean;
  equipped: boolean;
}

interface Labels {
  id: number;
  name: string;
  condition: string;
  own: boolean;
  equipped: boolean;
}

interface Achievements {
  id: number;
  name: string;
  reward: string;
  achieved: boolean;
}

interface Collections {
  skins: Skins[];
  labels: Labels[];
  achievements: Achievements[];
}
