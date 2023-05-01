//First In First Out (FIFO)

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  isFull(): boolean;
  size(): number;
}

export class QueueArray<T> implements IQueue<T> {
  private storage: T[] = [];

  //This is shorthand for assigning property in constructor
  constructor(private capacity: number = Infinity) {}

  public size(): number {
    return this.storage.length;
  }
  public isEmpty(): boolean {
    return this.storage.length === 0;
  }
  public isFull(): boolean {
    return this.storage.length >= this.capacity;
  }
  public peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.storage[0];
  }
  public dequeue(): T | undefined {
    // This line is not needed for Array.shift().
    // Keep it as a safe guard incase the main dequeue changes.
    if (this.isEmpty()) return undefined;
    return this.storage.shift();
  }
  public enqueue(item: T): void {
    if (this.isFull()) throw Error('Queue is at max capacity');
    this.storage.push(item);
  }
}
