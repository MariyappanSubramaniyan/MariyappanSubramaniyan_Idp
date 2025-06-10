package com.assignment6;

class ConstructorTestWithoutObjects {
    ConstructorTestWithoutObjects(String msg) {
        System.out.println("Message: " + msg);
    }

    public static void main(String[] args) {
        ConstructorTestWithoutObjects[] arr = new ConstructorTestWithoutObjects[3];
    }
}