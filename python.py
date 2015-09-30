#!/usr/bin/env python3
"""This script is for the staircase hackerrank code test"""

import sys

INPUT_LEN = int(sys.stdin.readline())

STAIR_CASE = ''
for i in range(1, INPUT_LEN+1):
    stair = ''
    for j in range(0, INPUT_LEN-i):
        stair += ' '
    for k in range(0, i):
        stair += '#'
    STAIR_CASE += stair + '\n'

sys.stdout.write(STAIR_CASE)
