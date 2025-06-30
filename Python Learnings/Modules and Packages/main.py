from restaurant.billing.calculator import calculate_total
from restaurant.billing.discount import apply_discount

items = [('Pizza', 300), ('Pasta', 200)]
total = calculate_total(items)
final = apply_discount(total, 10)

print("Total:", total)
print("Final after discount:", final)
