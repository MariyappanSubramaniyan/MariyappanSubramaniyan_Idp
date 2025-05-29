package com.liskov.violated;

public class Main {
    public static void main(String[] args) {
        Staff doc = new Doctor();
        Staff admin = new Admin();

        doc.assistPatient();
        admin.assistPatient(); // Runtime error — violates LSP
    }
}
