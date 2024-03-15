import TierBox from '@/components/imagebox/TierIconBox';
import PlayerInfoBox from '@/components/PlayerInfoBox';

const RankingItemBox = ({
  rank,
  imgSrc,
  label,
  nickname,
  tier,
  score,
}: RankingItemBoxProps) => {
  return (
    <div>
      <div>{rank}</div>
      <PlayerInfoBox label={label} nickname={nickname} imgSrc={imgSrc} />
      <div>
        <TierBox tier={tier} size='medium' />
      </div>
    </div>
  );
};
