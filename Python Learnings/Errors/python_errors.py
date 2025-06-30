# Python Errors

# Syntax Error
# if True
#     print("Hello")  #  SyntaxError

# Runtime Errors (Exceptions)

# NameError
# print(x)  

# TypeError
# print(5 + "hello")  

# ValueError
# int("abc")  

# IndexError
l = [1, 2]
# print(l[5])  

# KeyError
d = {"a": 1}
# print(d["b"])  

# ZeroDivisionError
# print(10 / 0)  

# ImportError
# import nonexistingmodule  

# Logical Error
def add(a, b):
    return a - b  # Wrong logic

print(add(2, 3))  # Output: -1, expected: 5
