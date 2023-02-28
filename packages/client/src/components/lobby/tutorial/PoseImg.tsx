import { useAtom, useAtomValue } from 'jotai';
import styled from 'styled-components';
import { isStartedAtom, tutorialImgAtom } from '../../../app/tutorial';

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
`;

const Button = styled.button`
  background-color: transparent;
  color: #dd74c1;
  border: 4px solid #dd74c1;
  border-radius: 15px;
  padding: 15px 25px;
  font-size: 30px;
  letter-spacing: 5px;
  font-weight: 800;
  filter: drop-shadow(0 0 5px #dd74c1) drop-shadow(0 0 20px #dd74c1) contrast(2) brightness(2);
  cursor: pointer;

  &:hover {
    color: black;
    background-color: #dd74c1;
    filter: drop-shadow(0 0 10px #dd74c1) contrast(2) brightness(2);
  }
  transition: 0.5s;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

function PoseImg() {
  const img = useAtomValue(tutorialImgAtom);
  const [isStarted, setIsStarted] = useAtom(isStartedAtom);

  const startTutorial = () => {
    setIsStarted(true);
  };

  return (
    <Container>
      {isStarted ? <Img src={img} alt="pose" /> : <Button onClick={startTutorial}>시작하기</Button>}
    </Container>
  );
}

export default PoseImg;
