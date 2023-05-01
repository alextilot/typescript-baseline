export interface INode<T> {
  data: T;
  next: INode<T> | null;
  prev: INode<T> | null;
}

export class Node<T> implements INode<T> {
  public data: T;
  public next: INode<T> | null = null;
  public prev: INode<T> | null = null;
  constructor(data: T) {
    this.data = data;
  }
}
