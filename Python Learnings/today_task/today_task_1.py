#alernate for pass 
n = 5
if (n==5):
    pass 
elif (n<=5):
    ... #Ellipsis
else:
    print(n)

# Realtime example for list and tuple

cart = ["milk", "bread", "eggs"]
cart.append("butter")     # Add item
cart.remove("bread")      # Remove item

months = ("January", "February", "March")
print(months[0])  # January

# What if include same key in the dict

my_dict = {"name":"john","name":"joe"}
print(my_dict["name"])


