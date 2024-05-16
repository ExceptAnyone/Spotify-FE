import styled from 'styled-components';
import { IcOption } from '../../assets/svg';
import theme from '../../styles/theme';

interface PlayListItemProps {
  title: string;
  artist: string;
  onClick: () => void;
}

const PlayListItem = (props: PlayListItemProps) => {
  const { title, artist, onClick } = props;
  return (
    <PlayListItemWrapper onClick={onClick}>
      <ImgWrapper>
        <img src='src/assets/png/MusicCardImg.png' alt='Album cover' />
      </ImgWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
      </TextWrapper>
      <MenuButton>
        <IcOption />
      </MenuButton>
    </PlayListItemWrapper>
  );
};

export default PlayListItem;

const PlayListItemWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      align: 'center',
    })};
  width: 33.5rem;
  height: 4.6rem;
  gap: 0.4rem;
  flex-shrink: 0;
`;

const ImgWrapper = styled.div`
  img {
    width: 4.6rem;
    height: 4.6rem;
    flex-shrink: 0;
  }
`;

const TextWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'flex-start',
    })};
  width: 25rem;
  padding: 0px 1.2rem;
  gap: 0.2rem;
  flex-shrink: 0;
`;

const Title = styled.div`
  width: 25.5rem;
  ${({ theme }) => theme.fonts.detail1};
  color: ${({ theme }) => theme.colors.white};
`;

const Artist = styled.div`
  ${({ theme }) => theme.fonts.detail2};
  color: ${({ theme }) => theme.colors.gray200};
`;

const MenuButton = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  flex-shrink: 0;
`;
