package com.interfacesegregation.corrected;

public class Admin implements CanManage {
    public void manageStaff() {
        System.out.println("Admin manages hospital staff.");
    }
}