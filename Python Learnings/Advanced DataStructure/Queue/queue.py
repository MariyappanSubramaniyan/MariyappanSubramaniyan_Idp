class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Queue:
    def __init__(self):
        self.front = self.rear = None

    def enqueue(self, data):
        new = Node(data)
        if not self.rear:
            self.front = self.rear = new
            return
        self.rear.next = new
        self.rear = new

    def dequeue(self):
        if not self.front:
            return None
        val = self.front.data
        self.front = self.front.next
        if not self.front:
            self.rear = None
        return val

    def peek(self):
        return self.front.data if self.front else None

    def is_empty(self):
        return self.front is None

    def display(self):
        cur = self.front
        while cur:
            print(cur.data, end=" -> ")
            cur = cur.next
        print("None")

# Usage
q = Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.display()        # Output: 10 -> 20 -> 30 -> None
print(q.dequeue()) # Output: 10
print(q.peek())    # Output: 20
q.display()        # Output: 20 -> 30 -> None
