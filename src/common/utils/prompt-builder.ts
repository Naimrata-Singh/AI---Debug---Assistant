export function buildDebugPrompt(error: string, code: string): string {
  return `
Fix the following NestJS TypeScript error.

Error:
${error}

Code:
${code}

Instructions:
1. Identify root cause
2. Explain step by step
3. Suggest fix
4. Apply best practices
5. Provide corrected code

Output Format:
- Root Cause
- Explanation
- Fixed Code
- Best Practices
`;
}
