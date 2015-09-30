#!/usr/bin/python3
import sys

n = int(sys.stdin.readline())

staircase = ''
for i in range(1,n+1):
	stair = ''
	for j in range(0,n-i):
		stair += ' '
	for k in range(0,i):
		stair += '#'
	staircase += stair + '\n'

sys.stdout.write(staircase)