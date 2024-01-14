type User = {
  id: number
  name: string
  email: string
  age: number
}

export function extractEmails(users: User[]): string[] {
  const emails = new Set<string>()
  for (const user of users) {
    if (user && user.email) {
      emails.add(user.email)
    }
  }
  return Array.from(emails)
}
