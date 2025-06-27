/*
 * Problem Statement:
 * Create a generic, singly linked list class called SList, which does not implement the List interface.
 * Each Link object in the list contains a reference to the next element only (no previous link).
 * Create a custom SListIterator to traverse, insert, and remove elements.
 * The only method in SList other than toString() is iterator(), which returns an SListIterator.
 * Elements can only be inserted or removed through the SListIterator.
 */
package com.assignment10;

public class SList<T> {
    private Link<T> head = null;

    // Inner class: node in the list
    private static class Link<T> {
        T data;
        Link<T> next;

        Link(T data) {
            this.data = data;
            this.next = null;
        }
    }

    // Return a new iterator starting at the head
    public SListIterator<T> iterator() {
        return new SListIterator<>(this);
    }

    // For printing the list contents
    public String toString() {
        StringBuilder sb = new StringBuilder("[");
        Link<T> current = head;
        while (current != null) {
            sb.append(current.data);
            current = current.next;
            if (current != null) sb.append(", ");
        }
        sb.append("]");
        return sb.toString();
    }

    // SListIterator nested class
    public static class SListIterator<T> {
        private SList<T> list;      // Reference to the list
        private Link<T> current;    // The node that iterator points to
        private Link<T> previous;   // The node before current

        SListIterator(SList<T> list) {
            this.list = list;
            this.current = list.head;
            this.previous = null;
        }

        // Check if next element exists
        public boolean hasNext() {
            return current != null;
        }

        // Return current element and advance iterator
        public T next() {
            if (!hasNext()) throw new RuntimeException("No more elements");
            T data = current.data;
            previous = current;
            current = current.next;
            return data;
        }

        // Insert a new element before current
        public void insert(T data) {
            Link<T> newLink = new Link<>(data);

            // If at start (previous == null), insert at head
            if (previous == null) {
                newLink.next = list.head;
                list.head = newLink;
                current = newLink; // Move current to new node
            } else {
                newLink.next = current;
                previous.next = newLink;
                current = newLink; // Move current to new node
            }
        }

        // Remove the current element (the one last returned by next())
        public void remove() {
            if (previous == null)
                throw new RuntimeException("Nothing to remove or remove called before next()");

            // Remove the node previous points to
            if (previous == list.head) {
                // Remove head
                list.head = current;
                previous = null;
            } else {
                // Find node before previous to fix links
                Link<T> temp = list.head;
                Link<T> beforePrev = null;
                while (temp != null && temp.next != previous) {
                    temp = temp.next;
                }
                beforePrev = temp;

                if (beforePrev != null) {
                    beforePrev.next = current;
                    previous = beforePrev;
                }
            }
        }
    }

    // Main method to demo usage
    public static void main(String[] args) {
        SList<String> list = new SList<>();
        SListIterator<String> it = list.iterator();

        // Insert elements
        it.insert("third");  // Insert at start
        it.insert("second"); // Insert at start again
        it.insert("first");  // Insert at start again

        System.out.println("List after inserts: " + list);

        // Iterate and print elements
        System.out.print("Iterate list: ");
        SListIterator<String> it2 = list.iterator();
        while (it2.hasNext()) {
            System.out.print(it2.next() + " ");
        }
        System.out.println();

        // Remove the second element ("second")
        SListIterator<String> it3 = list.iterator();
        it3.next(); // "first"
        it3.next(); // "second"
        it3.remove();

        System.out.println("List after removing 'second': " + list);
    }
}
