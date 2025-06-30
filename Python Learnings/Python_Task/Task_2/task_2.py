class BankAccount:
    def __init__(self, initial_balance):
        self.__balance = initial_balance

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount

    def get_balance(self):
        return self.__balance


acc = BankAccount(1000)
acc.deposit(500)
acc.withdraw(300)
print(acc.get_balance())  # Output: 1200

print(acc.__balance)  # Raises AttributeError
