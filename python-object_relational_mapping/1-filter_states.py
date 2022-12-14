#!/usr/bin/python3
""" lists all states where  a name starting with N
(upper N) from the
database hbtn_0e_0_usa (select case)
"""

import MySQLdb
import sys


def select_states_with_names():
    """ lists all states with a name starting with N
    (upper N) from the
    database hbtn_0e_0_usa
    """
    db = MySQLdb.connect(host="localhost",
                         port=3306,
                         user=sys.argv[1],
                         passwd=sys.argv[2],
                         db=sys.argv[3]
                         )
    cursor = db.cursor()

    cursor.execute("SELECT * FROM states "
                   "WHERE name LIKE BINARY 'N%' "
                   "ORDER BY id")

    records = cursor.fetchall()
    for data in records:
        print(data)

    cursor.close()
    db.close()


if __name__ == "__main__":
    select_states_with_names()
