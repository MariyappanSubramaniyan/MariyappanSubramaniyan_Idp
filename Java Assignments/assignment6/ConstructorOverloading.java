package com.assignment6;

public class ConstructorOverloading {
    int x, y;

    public ConstructorOverloading() {
        this(10, 20);  // calls second constructor
    }

    public ConstructorOverloading(int a, int b) {
        x = a;
        y = b;
    }

    public static void main(String[] args) {
        ConstructorOverloading obj = new ConstructorOverloading();
        System.out.println(obj.x + ", " + obj.y);
    }
}
