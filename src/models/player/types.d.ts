type Player = Pick<
  User,
  'userCode' | 'nickname' | 'tier' | 'skin' | 'label'
> & {
  ready: boolean;
  isMaster: boolean;
  key: string;
};
