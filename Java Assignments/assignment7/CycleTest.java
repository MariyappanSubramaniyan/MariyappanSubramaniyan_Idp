package com.assignment7;

class Cycle {}

class Unicycle extends Cycle {
    void balance() {
        System.out.println("Unicycle balancing");
    }
}

class Bicycle extends Cycle {
    void balance() {
        System.out.println("Bicycle balancing");
    }
}

class Tricycle extends Cycle {}

public class CycleTest {
    public static void main(String[] args) {
        Cycle[] cycles = {new Unicycle(), new Bicycle(), new Tricycle()};

        // This won't compile: cycles[0].balance(); because Cycle doesn't have balance()

        if (cycles[0] instanceof Unicycle) ((Unicycle) cycles[0]).balance();
        if (cycles[1] instanceof Bicycle) ((Bicycle) cycles[1]).balance();
        if (cycles[2] instanceof Tricycle) System.out.println("Tricycle has no balance method");
    }
}

