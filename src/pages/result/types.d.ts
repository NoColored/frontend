type PlayerRecord = {
  index: number;
  score: number;
} & Pick<User, 'nickname' | 'label' | 'skin' | 'rank' | 'userCode'>;

interface TierReward {
  oldtier: TierValue;
  newtier: TierValue;
  upgrade: boolean;
}

interface GameResult {
  roomUuid?: string;
  players: PlayerRecord[];
  reward: {
    tier?: TierReward;
    skins: string[];
  };
}
