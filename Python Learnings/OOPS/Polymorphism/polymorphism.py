# Compile time Polymorphism
class PaymentProcessor:
    def apply_discount(self, price, discount=0, coupon_code=None):
        if coupon_code == "FESTIVE":
            discount += 10
        return price - (price * discount / 100)

p = PaymentProcessor()
print(p.apply_discount(1000))                        # No discount
print(p.apply_discount(1000, 5))                     # 5% discount
print(p.apply_discount(1000, 5, "FESTIVE"))          # 5% + 10% discount

# Runtime Polymorphism
class PaymentMethod:
    def process_payment(self, amount):
        return amount

class CreditCard(PaymentMethod):
    def process_payment(self, amount):
        return amount + (amount * 0.02)  # 2% fee

class UPI(PaymentMethod):
    def process_payment(self, amount):
        return amount  # No fee

class PayPal(PaymentMethod):
    def process_payment(self, amount):
        return amount + (amount * 0.03)  # 3% fee

payments = [CreditCard(), UPI(), PayPal()]
for p in payments:
    print(p.process_payment(1000))
