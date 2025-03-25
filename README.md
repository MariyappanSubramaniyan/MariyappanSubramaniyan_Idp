# Candidate-Location Matching Algorithm

## Problem Statement
John is a recruiter in a company and wants to map candidates based on their location preferences. The goal is to assign each candidate to a unique location while resolving conflicts fairly.

### Example:
- **Candidates**: Alice, Bob, Charlie.
- **Locations**: New York, San Francisco, Chicago.
- **Preferences**:
  - Alice: 1st choice = New York, 2nd choice = San Francisco, 3rd choice = Chicago.
  - Bob: 1st choice = New York, 2nd choice = Chicago, 3rd choice = San Francisco.
  - Charlie: 1st choice = New York, 2nd choice = San Francisco, 3rd choice = Chicago.

Each location can have only **one** candidate assigned, and conflicts must be resolved systematically.

---

## Algorithm Used
The **Greedy Algorithm with Conflict Resolution** is used to assign candidates fairly based on their preferences:

1. **Assign Candidates to Their First Choice**  
   - If no conflicts, assign directly.  
   - If multiple candidates prefer the same location, resolve conflicts based on predefined rules (e.g., earliest application).  

2. **Reassign Conflicted Candidates**  
   - If a candidate does not get their first choice, assign them to their second choice if available.  
   - If conflicts persist, check the third choice.  

3. **Ensure Unique Assignments**  
   - Continue the process until all candidates are assigned unique locations.  

---

## Step-by-Step Algorithm
1. **Input**: List of candidates, their ranked location preferences, and available locations.
2. **Assign First Preferences**:
   - If a location is chosen by only one candidate, assign it.
   - If multiple candidates choose the same location, resolve the conflict.
3. **Reassign Unassigned Candidates**:
   - Move candidates to their second preference.
   - If conflicts persist, move to third preference.
4. **Output**: Final assignments of candidates to locations.

---

## Flowchart
```plaintext
Start
  |
  v
Input Candidates, Locations, and Preferences
  |
  v
Assign Candidates to Their 1st Choice
  |
  v
Resolve Conflicts (If Any)
  |
  v
Reassign Conflicted Candidates to 2nd or 3rd Choice
  |
  v
Ensure Unique Assignments
  |
  v
Output Final Assignments
  |
  v
End
