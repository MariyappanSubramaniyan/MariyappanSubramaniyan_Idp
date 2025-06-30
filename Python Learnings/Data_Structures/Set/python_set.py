# Set in Python

# Creating a Set
s = {1, 2, 3}
s2 = set([4, 5, 6])

# Accessing Set Items
for i in s:
    print(i)

# No duplicates allowed
s = {1, 2, 2, 3}
print(s)  # {1, 2, 3}

# Adding Elements
s.add(4)
s.update([5, 6])
print(s)  # {1, 2, 3, 4, 5, 6}

# Removing Elements
s.remove(2)     # Removes 2; raises error if not found
s.discard(10)   # No error if 10 not found
s.pop()         # Removes an arbitrary item
s.clear()       # Removes all items
print(s)        # set()

# Set Operations
a = {1, 2}
b = {2, 3}

# Union
print(a | b)     # {1, 2, 3}

# Intersection
print(a & b)     # {2}

# Difference
print(a - b)     # {1}

# Symmetric Difference
print(a ^ b)     # {1, 3}

# Frozen Set
# An immutable version of a set
fs = frozenset([1, 2, 3])
# fs.add(4)  #Error: can't modify frozenset
