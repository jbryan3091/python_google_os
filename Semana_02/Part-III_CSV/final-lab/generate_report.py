#!/usr/bin/env python3

from cgitb import reset
import csv

def read_employees(filename):
    with open (filename) as empl:
        reader = csv.DictReader(empl)
        for row in reader:
            return_string += "Nombre completo {} , UserName {}, departamento{}\n".format(row["Full Name"], row["Username"], row["Department"])
    return return_string

    print(read_employees("employees.csv"))