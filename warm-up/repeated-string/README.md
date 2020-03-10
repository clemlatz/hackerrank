# Repeated string

Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.

Given an integer, n, find and print the number of letter `a`'s in the first letters of Lilah's infinite string.

For example, if the string and , the substring we consider is , the first characters of her infinite string. There are occurrences of `a` in the substring.

**Function Description**

Complete the _repeatedString_ function in the editor below. It should return an integer representing the number of occurrences of `a` in the prefix of length in the infinitely repeating string.

repeatedString has the following parameter(s):

*   _s_: a string to repeat
*   _n_: the number of characters to consider

**Input Format**


The first line contains a single string, s.  
The second line contains an integer, n.

**Output Format**

Print a single integer denoting the number of letter `a`'s in the first letters of the infinite string created by repeating infinitely many times.

**Sample Input 0**

    aba
    10
    

**Sample Output 0**

    7
    

**Explanation 0**  
The first letters of the infinite string are `abaabaabaa`. Because there are `a`'s, we print on a new line.

**Sample Input 1**

    a
    1000000000000
    

**Sample Output 1**

    1000000000000
    

**Explanation 1**  
Because all of the first letters of the infinite string are `a`, we print on a new line.

## My answer

```javasscript
function countA(total, current) {
  if (current === 'a') {
    return total + 1;
  }

  return total;
}

function repeatedString(text, number) {
  const length = text.length;

  // Count a's occurences in one text string
  const textACount = text.split('').reduce(countA, 0);

  // Multiply by number of time text can be repeated
  const repeat = Math.floor(number / length);
  const repeatsACount = textACount * repeat

  // Count a's occurences in remainder substring
  const remainder = number % length;
  const remainderString = text.substr(0, remainder);
  const remainderACount = remainderString.split('').reduce(countA, 0)

  return repeatsACount + remainderACount;
};
```