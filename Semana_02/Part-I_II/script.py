import os

def new_directory(directory, filename):
  # Before creating a new directory, check to see if it already exists
  if os.path.isdir(directory) == False:
    os.mkdir("PythonPrograms")
    print ("Folder was created")

    dir = os.getcwd()
  # Create the new file inside of the new directory
  os.chdir("PythonPrograms")
  with open ("script.py", "a") as file:
    pass

  # Return the list of files in the new directory
  return (os.listdir(os.getcwd()))

print(new_directory("PythonPrograms", "script.py"))