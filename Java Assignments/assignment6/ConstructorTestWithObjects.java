package com.assignment6;

class ConstructorTestWithObjects {
    ConstructorTestWithObjects(String msg) {
        System.out.println("Message: " + msg);
    }

    public static void main(String[] args) {
        ConstructorTestWithObjects[] arr = new ConstructorTestWithObjects[3];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = new ConstructorTestWithObjects("Object " + (i + 1));
        }
    }
}

