#!/usr/bin/env python3

from ast import pattern
import re
import sys
from unittest import result

logfile = sys.argv[1]
with open(logfile) as f:
    for line in f:
        if "CRON" not in line:
            continue
        pattern = r"USER \((\w+)\)$"
        result = re.search(pattern, line)
        print(result[1])