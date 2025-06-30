class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.top = None

    def push(self, data):
        new = Node(data)
        new.next = self.top
        self.top = new

    def pop(self):
        if not self.top:
            return None
        val = self.top.data
        self.top = self.top.next
        return val

    def peek(self):
        return self.top.data if self.top else None

    def is_empty(self):
        return self.top is None

    def display(self):
        cur = self.top
        while cur:
            print(cur.data, end=" -> ")
            cur = cur.next
        print("None")

# Usage
s = Stack()
s.push(10)
s.push(20)
s.push(30)
s.display()         # Output: 30 -> 20 -> 10 -> None
print(s.pop())      # Output: 30
print(s.peek())     # Output: 20
s.display()         # Output: 20 -> 10 -> None
