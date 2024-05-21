#!/usr/bin/env python3

"""
index_range function
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    This function returns a tuple of size two containing a start index
    and an end index corresponding to the range of indexes to
    return in a list for those particular pagination parameters.

    args:
        page: The current page number
        page_size: The number of items to be displayed on each page
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
