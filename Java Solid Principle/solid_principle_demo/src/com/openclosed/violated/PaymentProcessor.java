package com.openclosed.violated;

public class PaymentProcessor {
    public void processPayment(String paymentType, double amount) {
        if(paymentType.equalsIgnoreCase("CreditCard")) {
            System.out.println("Paid " + amount + " using Credit Card");
        } else if(paymentType.equalsIgnoreCase("PayPal")) {
            System.out.println("Paid " + amount + " using PayPal");
        } else {
            System.out.println("Payment method not supported");
        }
    }

    public static void main(String[] args) {
        PaymentProcessor processor = new PaymentProcessor();
        processor.processPayment("CreditCard", 100.0);
        processor.processPayment("PayPal", 50.0);
    }
}
