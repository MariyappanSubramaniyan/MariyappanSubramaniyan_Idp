package com.openclosed.corrected;

public class Main {
    public static void main(String[] args) {
        PaymentProcessor ccProcessor = new PaymentProcessor(new CreditCardPayment());
        ccProcessor.processPayment(100.0);

        PaymentProcessor paypalProcessor = new PaymentProcessor(new PayPalPayment());
        paypalProcessor.processPayment(50.0);

        PaymentProcessor bitcoinProcessor = new PaymentProcessor(new BitcoinPayment());
        bitcoinProcessor.processPayment(200.0);
    }
}
