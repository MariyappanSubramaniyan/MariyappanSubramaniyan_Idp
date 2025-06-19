package com.assignment7;

interface A {
    void a1();
    void a2();
}

interface B {
    void b1();
    void b2();
}

interface C {
    void c1();
    void c2();
}

interface D extends A, B, C {
    void d();
}

class Concrete {
    void show() {
        System.out.println("From Concrete class");
    }
}

class MultiInterfaceImpl extends Concrete implements D {
    public void a1() { System.out.println("a1"); }
    public void a2() { System.out.println("a2"); }
    public void b1() { System.out.println("b1"); }
    public void b2() { System.out.println("b2"); }
    public void c1() { System.out.println("c1"); }
    public void c2() { System.out.println("c2"); }
    public void d() { System.out.println("d"); }
}

public class InterfaceTest {
    static void useA(A a) { a.a1(); a.a2(); }
    static void useB(B b) { b.b1(); b.b2(); }
    static void useC(C c) { c.c1(); c.c2(); }
    static void useD(D d) { d.d(); }

    public static void main(String[] args) {
        MultiInterfaceImpl obj = new MultiInterfaceImpl();
        useA(obj);
        useB(obj);
        useC(obj);
        useD(obj);
    }
}

