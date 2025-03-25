candidates = {}
num_candidates = int(input("Enter the number of candidates: "))
for _ in range(num_candidates):
    name = input("Enter candidate name: ")
    prefs = input(f"Enter preferred cities for {name} (comma-separated): ").split(", ")
    candidates[name] = prefs

locations = {}
num_cities = int(input("Enter the number of cities: "))
for _ in range(num_cities):
    city = input("Enter city name: ")
    slots = int(input(f"Enter available slots for {city}: "))
    locations[city] = slots

assignments = {}

for candidate, prefs in candidates.items():
    for city in prefs:
        if locations.get(city, 0) > 0:
            assignments[candidate] = city
            locations[city] -= 1
            break

print("Final Assignments:", assignments)


'''
Example
candidates = {
     "Alice": ["New York", "San Francisco", "Chicago"],
    "Bob": ["New York", "Chicago", "San Francisco"],
    "Charlie": ["New York", "San Francisco", "Chicago"]

}

Locations = { "New York": 1, "San Francisco": 1, "Chicago": 1}
'''