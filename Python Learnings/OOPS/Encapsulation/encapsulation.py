class Account:
    def __init__(self, owner, balance):
        self.owner = owner        # public
        self.__balance = balance  # private

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def get_balance(self):
        return self.__balance

a = Account("Mari", 1000)
a.deposit(500)
print(a.get_balance())  # Output: 1500
print(a.owner)          # Accessible
print(a.__balance)      # Error: AttributeError
