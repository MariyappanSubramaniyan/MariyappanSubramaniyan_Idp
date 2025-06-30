class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_end(self, data):
        new = Node(data)
        if not self.head:
            self.head = new
            return
        cur = self.head
        while cur.next:
            cur = cur.next
        cur.next = new

    def insert_at_beginning(self, data):
        new = Node(data)
        new.next = self.head
        self.head = new

    def delete_by_value(self, value):
        if not self.head:
            return
        if self.head.data == value:
            self.head = self.head.next
            return
        cur = self.head
        while cur.next and cur.next.data != value:
            cur = cur.next
        if cur.next:
            cur.next = cur.next.next

    def display(self):
        cur = self.head
        while cur:
            print(cur.data, end=" -> ")
            cur = cur.next
        print("None")

# Usage
ll = LinkedList()
ll.insert_at_end(10)
ll.insert_at_end(20)
ll.insert_at_beginning(5)
ll.display()                  # Output: 5 -> 10 -> 20 -> None
ll.delete_by_value(10)
ll.display()                  # Output: 5 -> 20 -> None
