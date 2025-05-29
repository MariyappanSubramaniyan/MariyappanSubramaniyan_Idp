package com.dependencyinversion.violated;

public class Main {
    public static void main(String[] args) {
        AlertService service = new AlertService();
        service.sendAlert("Patient emergency!");
    }
}