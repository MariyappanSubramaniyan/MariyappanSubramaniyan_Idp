# Functions in Python

# Defining Functions


# A function is defined using the def keyword.
def greet():
    print("Hello, World!")

# Calling a Function
greet()

# Function Arguments

# Positional Arguments
# The values are passed in the same order as parameters.
def greet_positional(name):
    print("Hello", name)

greet_positional("Alice")

# Default Arguments
# Provides a default value if none is passed.
def greet_default(name="Guest"):
    print("Hello", name)

greet_default()

# Keyword Arguments
# Passes values using the parameter name.
def greet_keyword(name, message):
    print(message, name)

greet_keyword(message="Welcome", name="Bob")

# Variable-Length Arguments
# Handles an arbitrary number of arguments.
def add(*numbers):
    return sum(numbers)

print(add(1, 2, 3))

# Return Statement

# Returning a Value
# Functions can return a result using return.
def add_two(a, b):
    return a + b

result = add_two(5, 3)
print(result)

# Returning Multiple Values
# Returns a tuple containing all values.
def stats(x, y):
    return x + y, x * y

s, p = stats(4, 5)
print(s, p)

# Scope of Variables

# Local Scope
# Defined inside a function and accessible only within it.
def show_local():
    x = 10
    print(x)

show_local()

# Global Scope
# Defined outside all functions and accessible everywhere.
x = 5

def show_global():
    print(x)

show_global()

# Lambda Functions

# Anonymous Functions
# Short, one-line functions using lambda.
square = lambda x: x * x
print(square(5))
