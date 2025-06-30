# Python Statements

# Expression Statements
3 + 4              # Does nothing visible
print(3 + 4)       # Outputs: 7
x = 10
x * 2              # Evaluates, but result is discarded

# Assignment Statements
x = 10
name = "Mari"
a, b = 5, 6

# Augmented Assignment Statements
x = 5
x += 2             # x becomes 7
x *= 3             # x becomes 21

# Annotated Assignment Statements
x: int = 5
name: str = "Mari"
y: float

# Assert Statement
x = 10
assert x > 0
# assert x < 0           # Raises AssertionError
# assert x < 0, "x must be negative"

# Pass Statement
def future_function():
    pass

for i in range(5):
    if i == 2:
        ...
    else:
        print(i)

# Del Statement
x = 5
del x
lst = [1, 2, 3]
del lst[1]         # lst becomes [1, 3]
d = {"a": 1, "b": 2}
del d["a"]         # d becomes {'b': 2}

# Return Statement
def add(a, b):
    return a + b

result = add(3, 4)    # result is 7

# Yield Statement
def count_up(n):
    for i in range(n):
        yield i

for num in count_up(3):
    print(num)        # Output: 0, 1, 2

# Raise Statement
# raise ValueError("Invalid input")
try:
    x = int("abc")
except ValueError as e:
    raise

# Break Statement
for i in range(5):
    if i == 3:
        break
    print(i)          # Output: 0, 1, 2

# Continue Statement
for i in range(5):
    if i == 2:
        continue
    print(i)          # Output: 0, 1, 3, 4

# Import Statement
import math
print(math.sqrt(16))     # 4.0

from math import pi
print(pi)                # 3.141592...

import math as m
print(m.sqrt(9))         # 3.0

# Nonlocal Statement
def outer():
    x = 5
    def inner():
        nonlocal x
        x = 10
    inner()
    print(x)

outer()  # Output: 10

