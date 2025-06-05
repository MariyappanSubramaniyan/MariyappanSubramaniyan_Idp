package com.openclosed.corrected;

public class BitcoinPayment implements PaymentMethod {
    @Override
    public void pay(double amount) {
        System.out.println("Paid " + amount + " using Bitcoin");
    }
}
