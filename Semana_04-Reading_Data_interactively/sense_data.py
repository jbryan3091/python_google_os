from ast import pattern
from mailbox import NotEmptyError
import re
#!/usr/bin/env python3
import sys
from unittest import result

logfile = sys.argv[1]

usernames = {}

with open(logfile) as f:
    for line in f:
        if "CRON" not in line:
            continue
        pattern = r"USER \((\w+)\)$"
        result = re.search(pattern, line)
        if result is None:
            continue
        name = result[1]
        usernames[name] = usernames.get(name, 0) +1
print(usernames)