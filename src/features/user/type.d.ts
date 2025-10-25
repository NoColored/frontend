type Profile = {
  rank: number;
  nickname: string;
  skin: string;
  label: string;
  rating: number;
  tier: TierValue;
};

type User = Profile & {
  exp: number;
  expRequire: number;
  guest: boolean;
  level: number;
  userCode: string;
};

type Account = {
  id: string;
  password: string;
};
