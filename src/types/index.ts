export interface IPost {
  id: number | string;
  title: string;
  content: string;
  color?: 'red' | 'blue' | 'white' | 'green' | undefined;
}
