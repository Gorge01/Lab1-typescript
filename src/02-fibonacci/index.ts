export function fibonacci(n: number): number[] {
  if (n < 0) {
    throw new Error('n must be a non-negative integer')
  }

  const sequence: number[] = []
  for (let i = 0; i < n; i++) {
    if (i === 0) sequence.push(0)
    else if (i === 1) sequence.push(1)
    else sequence.push(sequence[i - 1] + sequence[i - 2])
  }
  return sequence
}
