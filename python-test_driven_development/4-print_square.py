#!/usr/bin/python3
"""Defines a square function."""


def print_square(size):
    """Print a square with the # character.
"""
    if not isinstance(size, int):
        raise TypeError("size must be an integer")
    if size < 0:
        raise ValueError("size must be >= 0")
""" passing condition."""
    for i in range(size):
        [print("#", end="") for j in range(size)]
        print("")
