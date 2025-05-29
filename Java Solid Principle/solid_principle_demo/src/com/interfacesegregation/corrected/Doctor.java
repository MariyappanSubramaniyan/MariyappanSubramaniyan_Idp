package com.interfacesegregation.corrected;

public class Doctor implements CanTreat, CanPrescribe {
    public void treatPatient() {
        System.out.println("Doctor treats the patient.");
    }

    public void prescribeMedicine() {
        System.out.println("Doctor prescribes medicine.");
    }
}