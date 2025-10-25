interface Skin {
  id: number;
  name: string;
  link: string;
  own: boolean;
  equipped: boolean;
}

interface Label {
  id: number;
  name: string;
  condition: string;
  own: boolean;
  equipped: boolean;
}

interface Achievement {
  id: number;
  name: string;
  reward: string;
  achieved: boolean;
}

interface Collections {
  skins: Skin[];
  labels: Label[];
  achievements: Achievement[];
}
