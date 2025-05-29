package com.interfacesegregation.corrected;

public class Nurse implements CanTreat {
    public void treatPatient() {
        System.out.println("Nurse provides basic care.");
    }
}