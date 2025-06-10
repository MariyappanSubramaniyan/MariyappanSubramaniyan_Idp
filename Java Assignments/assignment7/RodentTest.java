package com.assignment7;

abstract class Rodent {
    Rodent() {
        System.out.println("Rodent created");
    }

    abstract void eat();
    abstract void run();
}

class Mouse extends Rodent {
    Mouse() {
        System.out.println("Mouse created");
    }

    void eat() {
        System.out.println("Mouse eats cheese");
    }

    void run() {
        System.out.println("Mouse runs fast");
    }
}

class Gerbil extends Rodent {
    Gerbil() {
        System.out.println("Gerbil created");
    }

    void eat() {
        System.out.println("Gerbil eats seeds");
    }

    void run() {
        System.out.println("Gerbil runs in wheel");
    }
}

class Hamster extends Rodent {
    Hamster() {
        System.out.println("Hamster created");
    }

    void eat() {
        System.out.println("Hamster eats fruits");
    }

    void run() {
        System.out.println("Hamster runs slowly");
    }
}

public class RodentTest {
    public static void main(String[] args) {
        Rodent[] rodents = {new Mouse(), new Gerbil(), new Hamster()};
        for (Rodent r : rodents) {
            r.eat();
            r.run();
        }
    }
}
