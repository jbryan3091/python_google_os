"""sumary_line
The repeating_letter_a function checks if the text passed includes the letter "a" 
(lowercase or uppercase) at least twice. For example, repeating_letter_a("banana")
 is True, while repeating_letter_a("pineapple") is False. Fill in the code to make this work. 
"""
#https://stackoverflow.com/questions/61780109/regex-checks-a-letter-repeating-at-least-twice

import re
def repeating_letter_a(text):
    result = re.search(r"[aA].*[aA]", text)
    return result != None

print(repeating_letter_a("banana")) # True
print(repeating_letter_a("pineapple")) # False
print(repeating_letter_a("Animal Kingdom")) # True
print(repeating_letter_a("A is for apple")) # True