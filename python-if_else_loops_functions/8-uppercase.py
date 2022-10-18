#!/usr/bin/python3
def uppercase(str1):
    for char in str1:
        if 123 > ord(char) > 96:
            char = chr(ord(char) - 32)
        print('{}'.format(char), end="")
    print('')
