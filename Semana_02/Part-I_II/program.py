import os

def create_python_script(filename):
  comments = "# Start of a new Python program"
  with open("program_.py", "a") as comment:
    comment.write(comments + "\n")
    comment.close()
    filesize = os.path.getsize(filename)
  return(filesize)

print(create_python_script("program_.py"))