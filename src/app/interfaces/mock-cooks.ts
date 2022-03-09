import { ICook } from "./ICook"

export const loremIpsum : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const mockCooks : ICook[] = [
  {
    id : 0,
    name : 'amazing dish nb1',
    description : loremIpsum,
    imageURL : 'https://picsum.photos/200/200',
    rating : 3.5
  },
  {
    id : 1,
    name : "amazing dish nb2",
    description : loremIpsum,
    imageURL : 'https://picsum.photos/201/200',
    rating : 4.65
  },
  {
    id : 2,
    name : "amazing dish nb3",
    description : loremIpsum,
    imageURL : 'https://picsum.photos/202/200',
    rating : 2.5
  },
  {
    id : 3,
    name : "amazing dish nb4",
    description : loremIpsum,
    imageURL : 'https://picsum.photos/203/200',
    rating : 4.1
  },
]
