#!/usr/bin/python3
"""Defines a matrix multiplication function by importing  NumPy."""
import numpy as np


def lazy_matrix_mul(m_a, m_b):
    """Return the multiplication of two matrices passed in argument .
    """

    return (np.matmul(m_a, m_b))
