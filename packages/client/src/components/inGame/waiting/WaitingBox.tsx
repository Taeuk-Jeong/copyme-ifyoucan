import { useAtomValue } from 'jotai';
import styled, { css, keyframes } from 'styled-components';
import { gameAtom } from '../../../app/game';
import { peerInfoAtom } from '../../../app/peer';
import { roomInfoAtom } from '../../../app/room';
import { myNickName } from '../../../pages/Lobby';
import Chatting from './Chatting';
import MyVideo from './MyVideo';
import PeerVideo from './PeerVideo';

const Container = styled.div<{ isStart: boolean }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80%;
  visibility: ${(props) => (props.isStart ? 'hidden' : 'visible')};
`;

const Wrapper = styled.div<{ isMe: boolean; isStart: boolean }>`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: ${(props) => (props.isMe ? (props.isStart ? '-35%' : '0%') : 'none')};
  right: ${(props) => (props.isMe ? 'none' : props.isStart ? '-35%' : '0%')};
  width: 27.5%;
  aspect-ratio: 7/10;
  transition: 0.5s;
  transition-delay: ${(props) => (props.isStart ? 'none' : '0.5s')};
`;

const pop = keyframes`
  0%, 100% {
    transform: rotate(0deg);
    font-size: 40px;
  }
  50% {
    transform: rotate(15deg);
    font-size: 48px;
  }
`;

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 20px #fff;
  }
  50% {
    text-shadow: 0 0 20px #fff, 0 0 20px #fff, 0 0 40px #fff, 0 0 40px #fff

  }
`;

const StateWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 0;
  width: 100%;
  height: 12%;
  font-size: 30px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ReadyState = styled.p<{ isHost: boolean; isReady: boolean }>`
  color: ${(props) => (props.isHost ? '#ff0' : props.isReady ? '#f00' : '#808080')};
  transition: 0.5s;

  ${(props) =>
    props.isReady &&
    css`
      font-size: 40px;
      font-weight: 900;
      animation-name: ${pop}, ${glow};
      animation-duration: 0.3s, 1s;
      animation-iteration-count: 1, infinite;
      animation-timing-function: ease-in-out, ease-in-out;
    `}
`;

const ResultState = styled.p<{ isWinner: boolean }>`
  font-size: 40px;
  font-weight: 900;
  color: #fff;
  text-shadow: 0 0 10px ${(props) => (props.isWinner ? '#00f' : '#f00')};

  &::after {
    content: attr(data-winner);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${(props) => (props.isWinner ? '#00f' : '#f00')};
    z-index: -1;
    filter: blur(5px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => (props.isWinner ? '#00f' : '#f00')};
    z-index: -2;
    opacity: 0.1;
    filter: blur(10px);
  }
`;

const NickNameBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 12%;
  font-size: 30px;
  font-weight: bold;
`;

function WaitingBox() {
  const game = useAtomValue(gameAtom);
  const roomInfo = useAtomValue(roomInfoAtom);
  const peerInfo = useAtomValue(peerInfoAtom);

  return (
    <Container isStart={game.isStart}>
      <Wrapper isMe={true} isStart={game.isStart}>
        <StateWrapper>
          {game.isResult ? (
            <ResultState
              data-winner={game.user.point >= game.peer.point ? '🏆 WINNER 🏆' : '👻 LOSER 👻'}
              isWinner={game.user.point >= game.peer.point}
            >
              {game.user.point >= game.peer.point ? '🏆 WINNER 🏆' : '👻 LOSER 👻'}
            </ResultState>
          ) : (
            <ReadyState isHost={roomInfo.host} isReady={game.user.isReady}>
              {roomInfo.host ? '👑 HOST 👑' : game.user.isReady ? '🔥 READY 🔥' : '🚧 NOT READY 🚧'}
            </ReadyState>
          )}
        </StateWrapper>
        <MyVideo />
        <NickNameBox>{myNickName}</NickNameBox>
      </Wrapper>
      <Wrapper isMe={false} isStart={game.isStart}>
        <StateWrapper>
          {game.isResult ? (
            <ResultState
              data-winner={game.user.point < game.peer.point ? '🏆 WINNER 🏆' : '👻 LOSER 👻'}
              isWinner={game.user.point < game.peer.point}
            >
              {game.user.point < game.peer.point ? '🏆 WINNER 🏆' : '👻 LOSER 👻'}
            </ResultState>
          ) : (
            <ReadyState isHost={!roomInfo.host} isReady={game.peer.isReady}>
              {roomInfo.host
                ? peerInfo.nickName
                  ? game.peer.isReady
                    ? '🔥 READY 🔥'
                    : '🚧 NOT READY 🚧'
                  : 'WAITING'
                : '👑 HOST 👑'}
            </ReadyState>
          )}
        </StateWrapper>
        <PeerVideo />
        <NickNameBox>{peerInfo.nickName}</NickNameBox>
      </Wrapper>
      <Chatting />
    </Container>
  );
}

export default WaitingBox;
