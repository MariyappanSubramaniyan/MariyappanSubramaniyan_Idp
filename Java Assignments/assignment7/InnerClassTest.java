package com.assignment7;

class Outer1 {
    class Inner1 {
        Inner1(String msg) {
            System.out.println("Inner1: " + msg);
        }
    }
}

class Outer2 {
    class Inner2 extends Outer1.Inner1 {
        Inner2(Outer1 o1, String msg) {
            o1.super(msg);
            System.out.println("Inner2 extended from Inner1");
        }
    }
}

public class InnerClassTest {
    public static void main(String[] args) {
        Outer1 o1 = new Outer1();
        Outer2 o2 = new Outer2();
        Outer2.Inner2 inner = o2.new Inner2(o1, "Hello from Inner1");
    }
}

