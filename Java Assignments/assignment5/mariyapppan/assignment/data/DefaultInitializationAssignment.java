package com.assignment5.mariyapppan.assignment.data;

public class DefaultInitializationAssignment {
    int num;       // member variable - default initialized to 0
    char ch;       // member variable - default initialized to '\u0000' (null char)

    public void printMembers() {
        System.out.println("Member int: " + num);
        System.out.println("Member char: [" + ch + "]");
    }

    public void printLocals() {
        // local variables - MUST be initialized before use in Java
        int localNum;
        char localCh;

        // Uncommenting below lines causes compilation error:
        // "variable localNum might not have been initialized"
        // System.out.println("Local int: " + localNum);
        // System.out.println("Local char: " + localCh);

        /*
         * Explanation:
         * Local variables do NOT have default values in Java.
         * They must be explicitly initialized before use,
         * otherwise the compiler throws an error.
         */
    }
}

