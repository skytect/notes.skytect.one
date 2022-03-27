#!/usr/bin/python3
import os
import random
import base64

Not = lambda x: 255-x

Or = lambda x,y:x|y
And = lambda x,y:x&y
xor = lambda x,y:x^y
nor = lambda x,y:Not(x|y)
nand= lambda x,y:Not(x&y)
xnor = lambda x,y:Not(x^y)
xand = lambda x,y:Not(x&y)&(x&y)  # Exclusive AND...? Returns true if x and y are true, except when they are, then retrun false...?
xnand = lambda x,y:Not(x&y)|(x&y)  # Exclusive NAND...? Return true if x and y are not true, except when they are, then return true...?

def encrypt(data, key, func):
    length = len(key)
    output = []
    for i in range(len(data)):
        output.append(func(data[i],key[i%length]))
    print(output)
    return bytes(output)

if __name__ == "__main__":
    file_path = 'flag'
    with open(file_path, 'rb') as file:
        data = file.read()

    key = []
    for i in range(random.randrange(8192, 16384)):
        key.append(random.randrange(0,255))
    key = bytes(key)

    rand = random.randrange(0, 8)
    function = [Or, And, xor, nor, nand, xnor, xand, xnand]

    print (base64.b64encode(encrypt(data, key, function[rand])).decode("utf-8"))

