# Generate Random Numbers in Python

# Importing the Module
import random

# Random Integers
print("random integer",random.randint(1, 10))  # e.g., 7

# Random Floating-Point Numbers
# Returns a float number between 0.0 and 1.0.
print("random float numbers ", random.random())  # e.g., 0.7312


# Returns a random float N such that a <= N <= b.
print(random.uniform(5, 10))  # e.g., 7.89


# Returns a random element from a non-empty sequence.
print(random.choice(['red', 'blue', 'green']))  # e.g., 'blue'


# Shuffles the elements of a list in place.
items = [1, 2, 3, 4]
random.shuffle(items)
print(items)  # e.g., [2, 4, 1, 3]
