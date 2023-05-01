//Last in First Out (LIFO)

export interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  isFull(): boolean;
  isEmpty(): boolean;
  size(): number;
}

export class StackArray<T> implements IStack<T> {
  private storage: T[] = [];

  //This is shorthand for assigning property in constructor
  constructor(private capacity: number = Infinity) {}

  isEmpty(): boolean {
    return this.storage.length === 0;
  }
  isFull(): boolean {
    return this.storage.length >= this.capacity;
  }
  size(): number {
    return this.storage.length;
  }
  pop(): T | undefined {
    return this.storage.pop();
  }
  push(item: T): void {
    if (this.isFull()) throw Error('Stack is at max capacity');
    this.storage.push(item);
  }
  peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.storage[this.size() - 1];
  }
}
