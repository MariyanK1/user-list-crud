export interface IUser {
  firstName: string;
  familyName: string;
  job: string;
  gender: string;
  age: number;
  id: number;
}

export const MOCKED_USER_DATA: IUser[] = [
  {
    firstName: 'mariyan',
    familyName: 'maksimov',
    job: 'dev',
    gender: 'male',
    age: 28,
    id: 1,
  },
  {
    firstName: 'xyz',
    familyName: 'zyx',
    job: 'dev',
    gender: 'female',
    age: 22,
    id: 2,
  },
  {
    firstName: 'xxxxxxxx',
    familyName: 'xxxx',
    job: 'dev',
    gender: 'male',
    age: 221,
    id: 3,
  },
];
