interface RoomPreview extends Omit<Room, 'roomPassword'> {
  userNumber: number;
}

type EnterRoomRequest = Pick<Room, 'roomCode' | 'roomPassword'>;
