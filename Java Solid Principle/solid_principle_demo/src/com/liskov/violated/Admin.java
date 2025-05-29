package com.liskov.violated;

public class Admin extends Staff {
    @Override
    public void assistPatient() {
        throw new UnsupportedOperationException("Admin staff do not assist patients.");
    }
}
