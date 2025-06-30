# Tuple in Python

# Creating a Tuple
colors = ("red", "green", "blue")

# Accessing Tuple Items
print(colors[0])        # red
print(colors[-1])       # blue


# Looping Through a Tuple
for color in colors:
    print(color)

# Tuple Length
print(len(colors))      # 3

# Tuple Packing and Unpacking
person = ("John", 25, "Engineer")   # Packing
name, age, profession = person      # Unpacking
print(name)                         # John

# Tuple Methods
nums = (1, 2, 3, 2, 4, 2)

print(nums.count(2))    # Returns number of times 2 appears → 3
print(nums.index(3))    # Returns index of first occurrence of 3 → 2
