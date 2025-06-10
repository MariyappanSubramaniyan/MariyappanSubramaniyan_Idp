package com.assignment5.mariyapppan.assignment.main;

import com.assignment5.mariyapppan.assignment.data.DefaultInitializationAssignment;
import com.assignment5.mariyapppan.assignment.singleton.SingletonExample;

public class MainApp {
    public static void main(String[] args) {
        DefaultInitializationAssignment obj1 = new DefaultInitializationAssignment();
        obj1.printMembers();
        obj1.printLocals();  // Note: this will not print local variables since they can't be used without initialization

        SingletonExample obj2 = SingletonExample.createInstance("Hello, Singleton!");
        obj2.printString();
    }
}
