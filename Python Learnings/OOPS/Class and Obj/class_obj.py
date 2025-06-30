# Class and object
class Calculator:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def add(self):
        return self.a + self.b

c = Calculator(3, 4)
print(c.add())  # Output: 7

