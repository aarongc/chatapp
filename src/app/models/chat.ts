import { Direction } from './enums/direction.enum';

export class Chat {

  constructor(
    public sender: string,
    public message: string,
    public direction: Direction.Right
  ) { }

}