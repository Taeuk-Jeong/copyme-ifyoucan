import { useAtomValue } from 'jotai';
import styled, { css } from 'styled-components';
import { gameAtom } from '../../../app/game';

const VS = styled.div<{ isStart: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.isStart &&
    css`
      top: 30%;
      left: 40%;
      width: 20%;
      height: 40%;
      font-size: 7vw;
      font-weight: 500;
    `}

  ${(props) =>
    !props.isStart &&
    css`
      top: 50%;
      left: 50%;
      width: 0%;
      height: 0%;
      font-size: 0;
      font-weight: 0;
    `}
    
  color: rgba(255, 255, 255, 0.6);
  text-shadow: /* White glow */ 0 0 5px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.6),
    0 0 50px rgba(255, 255, 255, 0.6), /* Green glow */ 0 0 42px #bc13fe, 0 0 120px #bc13fe,
    0 0 92px #bc13fe, 0 0 102px #bc13fe, 0 0 151px #bc13fe;

  transition: 0.5s;
  transition-delay: 1s;
`;

function Versus() {
  const isStart = useAtomValue(gameAtom).isStart;

  return <VS isStart={isStart}>VS</VS>;
}

export default Versus;
