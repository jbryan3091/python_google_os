
with open ("spider.txt") as file:
    for line in file:
        print(line.upper()) #Mayuscula cada linea

with open("spider.txt") as file:
    for line in file:
        line.   
        print(line.strip().upper()) # imprime sin lineas en blanco

with open("guests.txt", "a") as guests:
    for i in new_guests:
        guests.append(i + "\n")
        guests.close()