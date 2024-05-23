import { predata } from '../../../mocks/mockData';
import { GetFilterTitleRes } from '../../../types/music/client';
import PlaylistCard from './PlaylistCard';
import styled from 'styled-components';

interface PlaylistCardListWithDescriptionListProps {
  data: GetFilterTitleRes;
  onClick?: () => void;
  playlist?: boolean;
  recent?: boolean;
}

const PlaylistCardListWithDescriptionList = ({
  data,
  onClick,
  playlist,
  recent,
}: PlaylistCardListWithDescriptionListProps) => {
  return (
    <PlaylistCardWrapper>
      {playlist &&
        data.playlists.map((playlist, index) => (
          <PlaylistCard
            key={`playlist-${index}`}
            hasDescription={!!playlist.followers}
            onClick={onClick}
          >
            <PlaylistCard.Img src={predata[index % predata.length].imgUrl} />
            <PlaylistCard.Title>{playlist.playlistTitle}</PlaylistCard.Title>
            <PlaylistCard.Description>
              {`팔로워 ${playlist.followers.toLocaleString()}명`}
            </PlaylistCard.Description>
          </PlaylistCard>
        ))}
      {recent &&
        data.musics.map((music, index) => (
          <PlaylistCard
            key={`music-${index}`}
            hasDescription={!!music.singer}
            onClick={onClick}
          >
            <PlaylistCard.Img src={predata[index % predata.length].imgUrl} />
            <PlaylistCard.Title>{music.musicTitle}</PlaylistCard.Title>
            <PlaylistCard.Description>{music.singer}</PlaylistCard.Description>
          </PlaylistCard>
        ))}
    </PlaylistCardWrapper>
  );
};

export default PlaylistCardListWithDescriptionList;

const PlaylistCardWrapper = styled.section`
  ${({ theme }) => theme.mixin.flexBox({ align: 'start', justify: 'start' })};
  gap: 1.5rem;
`;