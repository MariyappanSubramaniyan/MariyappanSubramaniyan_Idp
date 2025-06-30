# Operators in Python

# Arithmetic Operators

# Addition
print(5 + 3)      # 8

# Subtraction
print(10 - 4)     # 6

# Multiplication
print(3 * 4)      # 12

# Division
print(8 / 2)      # 4.0

# Floor Division
print(9 // 4)     # 2

# Modulus
print(10 % 3)     # 1

# Exponentiation
print(2 ** 3)     # 8

# Comparison Operators

# Equal to
print(5 == 5)     # True

# Not equal to
print(7 != 9)     # True

# Greater than
print(10 > 5)     # True

# Less than
print(3 < 8)      # True

# Greater than or equal
print(5 >= 5)     # True

# Less than or equal
print(2 <= 3)     # True

# Logical Operators

x = 7
y = 12

# and
print(x > 5 and y < 15)   # True

# or
print(x > 5 or y < 5)     # True

# not
print(not x > 10)         # True

# Assignment Operators

x = 5
x += 3
print(x)                  # 8

x = 10
x -= 4
print(x)                  # 6

x = 2
x *= 3
print(x)                  # 6

x = 8
x /= 2
print(x)                  # 4.0

x = 9
x //= 2
print(x)                  # 4

x = 10
x %= 3
print(x)                  # 1

x = 3
x **= 2
print(x)                  # 9

# Membership Operators

print('a' in 'apple')         # True
print('z' not in 'apple')     # True

# Identity Operators

x = [1, 2]
y = x
print(x is y)             # True
print(x is not [1, 2])    # True
