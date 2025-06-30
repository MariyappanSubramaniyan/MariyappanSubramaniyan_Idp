# Functions in Python

# It is not tied to any object.
def greet(name):
    return f"Hello, {name}"

print(greet("Mari"))  # Output: Hello, Mari


# Methods in Python
# A method is like a function but associated with an object.

# Example:
class Person:
    def greet(self):
        return "Hello from method"

p = Person()
print(p.greet())  # Output: Hello from method


# Functions:
print(len([1, 2, 3]))       # 3
print(sum([1, 2, 3]))       # 6

# Methods:
print("Hello".lower())     # hello
lst = [1, 2]
lst.append(3)
print(lst)                 # [1, 2, 3]
