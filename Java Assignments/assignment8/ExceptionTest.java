package com.assignment8;

// 1. Custom exceptions
class ExceptionOne extends Exception {
    public ExceptionOne(String msg) {
        super(msg);
    }
}

class ExceptionTwo extends Exception {
    public ExceptionTwo(String msg) {
        super(msg);
    }
}

class ExceptionThree extends Exception {
    public ExceptionThree(String msg) {
        super(msg);
    }
}

// 2. Class with method that throws all three
class ExceptionThrower {
    public void throwExceptions(int type) throws ExceptionOne, ExceptionTwo, ExceptionThree {
        switch (type) {
            case 1: throw new ExceptionOne("Exception One occurred");
            case 2: throw new ExceptionTwo("Exception Two occurred");
            case 3: throw new ExceptionThree("Exception Three occurred");
            case 4: throw new NullPointerException("Null Pointer Exception occurred");
        }
    }
}

// 3. Main class
public class ExceptionTest {
    public static void main(String[] args) {
        ExceptionThrower et = new ExceptionThrower();

        try {
            et.throwExceptions(1); // Try changing this to 2, 3 or 4
        } catch (Exception e) {
            System.out.println("Caught exception: " + e);
        } finally {
            System.out.println("Finally block always runs.");
        }
    }
}

