export function getPascalsTriangleRow(rowIndex: number): number[] {
  if (rowIndex === 0) {
    return [1]
  }

  let currentRow = [1]

  for (let i = 1; i <= rowIndex; i++) {
    const newRow = [1]
    for (let j = 1; j < currentRow.length; j++) {
      newRow[j] = currentRow[j] + currentRow[j - 1]
    }
    newRow.push(1)
    currentRow = newRow
  }

  return currentRow
}
