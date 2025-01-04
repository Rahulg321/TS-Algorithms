

/**
 * Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...


Example 1:

Input: columnTitle = "A"
Output: 1
 * @param columnTitle
 * @returns
 */
function titleToNumber(columnTitle: string): number {
    // Convert the input string to uppercase to handle lowercase inputs
    let columnValue = 0;

    // Iterate over each character in the string
    for (let i = 0; i < columnTitle.length; i++) {
        // Get the ASCII value of the character and convert it to a position (A=1, B=2, ..., Z=26)
        const charValue = columnTitle.charCodeAt(i) - 65 + 1;
        // Accumulate the column value by considering the position of the character in the string
        columnValue = columnValue * 26 + charValue;
    }

    return columnValue;
};
