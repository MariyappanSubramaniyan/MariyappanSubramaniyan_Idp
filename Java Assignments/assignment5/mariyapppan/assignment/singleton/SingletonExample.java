package com.assignment5.mariyapppan.assignment.singleton;

public class SingletonExample {
    String str;   // non-static member variable

    private SingletonExample() {}

    public static SingletonExample createInstance(String input) {
        SingletonExample obj = new SingletonExample();

        // Can't do: str = input; here directly because str is non-static and this is a static method
        // We need to set it through the object reference:

        obj.str = input;
        return obj;
    }

    public void printString() {
        System.out.println("String value: " + str);
    }
}
