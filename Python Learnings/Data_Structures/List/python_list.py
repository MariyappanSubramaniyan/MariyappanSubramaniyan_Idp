# List in Python

# Creating Lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4]
mixed = [1, "hello", True, 3.5]

# Accessing List Items

# Using Indexing
print(fruits[0])      # apple
print(fruits[-1])     # cherry

# Using Slicing
print(fruits[1:3])    # ['banana', 'cherry']

# Modifying Lists

# Changing Items
fruits[1] = "blueberry"
print(fruits)         # ['apple', 'blueberry', 'cherry']

# Adding Items
fruits.append("orange")
print(fruits)         # ['apple', 'blueberry', 'cherry', 'orange']

fruits.insert(1, "mango")
print(fruits)         # ['apple', 'mango', 'blueberry', 'cherry', 'orange']

# Removing Items
fruits.remove("cherry")
print(fruits)         # ['apple', 'mango', 'blueberry', 'orange']

fruits.pop()
print(fruits)         # ['apple', 'mango', 'blueberry']

# List Methods

# clear()
fruits.clear()
print(fruits)         # []

# sort()
nums = [3, 1, 4, 2]
nums.sort()
print(nums)           # [1, 2, 3, 4]

# reverse()
nums.reverse()
print(nums)           # [4, 3, 2, 1]

# copy()
new_nums = nums.copy()
print(new_nums)       # [4, 3, 2, 1]

# count()
print([1, 2, 2, 3].count(2))  # 2

# index()
print(["a", "b", "c", "b"].index("b"))  # 1

# Iterating Through a List
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
