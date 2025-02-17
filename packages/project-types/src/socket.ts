import { Rooms } from './rooms';

/**
 * 해당하는 타입파일을 정의하면 socket.io에서 자동으로 타입을 인식한다.
 * 추가타입 반영시 yarn install 하여 패키지의 업데이트 사항을 반영해야한다.
 * @see https://socket.io/docs/v4/typescript/
 */
export interface IChat {
  userId: string;
  message: string;
  isImg: boolean;
}

export interface IGameMode {
  round1: number;
  round2: number;
  round3: number;
}

export interface ServerToClientEvents {
  get_rooms: (rooms: Rooms) => void;
  new_room: (roomId: string, gameMode: IGameMode) => void;
  get_ready: (socketId: string) => void;
  get_unready: (socketId: string) => void;
  get_start: (socketId: string) => void;
  get_score: (data: { defenderId: string; score: number }) => void;
  get_count_down: (count: number, stage: string) => void;
  get_potg: () => void;
  get_finish: () => void;
  peer: (data: { id: string; nickName: string }) => void;
  greeting: (data: { message: string }) => void;
  get_offer: (data: {
    sdp: RTCSessionDescription;
    offerSendID: string;
    offerSendNickName: string;
  }) => void;
  get_answer: (answer: RTCSessionDescription) => void;
  get_ice: (data: RTCIceCandidate) => void;
  message: (chat: IChat) => void;
  user_exit: (isStart: boolean) => void;
  get_change_stage: (stage: number) => void;
  get_upload: (images: string[]) => void;
  get_point: (winner: string) => void;
}

export interface ClientToServerEvents {
  /**
   * rooms
   * 방리스트에 대한 데이터를 요청합니다.
   * 서버에서는 get_rooms 이벤트를 통해 응답합니다.
   */
  rooms: () => void;
  create_room: (data: { roomName: string; gameMode: IGameMode; thumbnailIdx: number }) => void;
  join_room: (data: { roomId: string; nickName: string }) => void;
  exit_room: (nickName: string) => void;
  ready: (roomId: string) => void;
  unready: (roomId: string) => void;
  start: (roomId: string) => void;
  score: (score: number) => void;
  round_score: (score: number) => void;
  potg: () => void;
  count_down: (stage: string) => void;
  offer: (data: {
    sdp: RTCSessionDescriptionInit;
    offerSendID: string;
    offerSendNickName: string;
    offerReceiveID: string;
  }) => void;
  answer: (data: {
    sdp: RTCSessionDescriptionInit;
    answerSendID: string;
    answerReceiveID: string;
  }) => void;
  ice: (data: {
    candidate: RTCIceCandidate;
    candidateSendID: string;
    candidateReceiveID: string;
  }) => void;
  message: (message: string, callback: (chat: IChat) => void) => void;
  change_stage: (stage: number) => void;
  point: (winnerId: string) => void;
}

export interface InterServerEvents {
  get_rooms: (rooms: Rooms) => void;
  new_room: (roomId: string, gameMode: IGameMode) => void;
  get_start: (socketId: string) => void;
  get_score: (data: { defenderId: string; score: number }) => void;
  peer: (data: { id: string; nickName: string }) => void;
  get_count_down: (count: number, stage: string) => void;
  get_offer: (offer: {
    sdp: RTCSessionDescription;
    offerSendID: string;
    offerSendNickName: string;
  }) => void;
  get_answer: (answer: RTCSessionDescription) => void;
  get_ice: (data: RTCIceCandidate) => void;
  error: () => void;
  message: (chat: IChat) => void;
  get_change_stage: (stage: number) => void;
  get_potg: () => void;
  get_finish: () => void;
  get_upload: (images: string[]) => void;
  get_ready: (socketId: string) => void;
  get_unready: (socketId: string) => void;
  get_point: (winnerId: string) => void;
}

export interface SocketData {
  // name: string;
  // age: number;
  // io.on("connection", (socket) => {
  //   socket.data.name = "john";
  //   socket.data.age = 42;
  // });
}
