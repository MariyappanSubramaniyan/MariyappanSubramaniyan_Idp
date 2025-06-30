# Dictionary in Python

# Creating a Dictionary
d = {"name": "Mari", "name": "surya"}
d2 = dict(city="Chennai", pin=600001)

# Accessing Dictionary Items
print(d["name"])         # Mari
print(d.get("age"))      # 22

# Adding and Updating Items
d["country"] = "India"   # Add new
d["age"] = 23            # Update existing
print(d)

# Removing Items
d.pop("age")
d.clear()                # Remove all
print(d)

# Dictionary Methods
d = {"a": 1, "b": 2}
print(d.keys())     # dict_keys(['a', 'b'])
print(d.values())   # dict_values([1, 2])
print(d.items())    # dict_items([('a', 1), ('b', 2)])

# Looping Through Dictionary
for k in d:
    print(k, d[k])

for k, v in d.items():
    print(k, v)
