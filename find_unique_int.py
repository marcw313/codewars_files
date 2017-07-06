#### Problem ####

'''
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
'''

#### Solution ####

def find_uniq(arr):
    s=set(arr)
    
    for x in s:
        if arr.count(x) == 1:
            n = x    
    
    return n   # n: unique integer in the array
