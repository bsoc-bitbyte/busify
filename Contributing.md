# Contribution Guide

If you're reading this, you're probably creating a Pull Request or planning to do so and that's great!🥳

# How to Contribute

1. Fork this repository.

2. Clone the forked repository.

   ```bash
   git clone 'https://github.com/bsoc-bitbyte/busify.git'
   ```

3. Navigate to the project directory.

   ```bash
   cd busify
   ```

4. Make changes in source code.

5. Stage your changes and commit

6. git add .

7. git commit -m "<your_commit_message>"

8. Push your local commits to the remote repo.

9. git push

10. Create a PR to develop repository.

## Conventional Commit Messages

In our project, we follow the convention of using conventional commit messages for all commits. Conventional commit messages provide a standardized format for commit messages, making it easier to understand and track changes in our codebase.

A conventional commit message consists of a concise and structured format:

<type>: <description>

The message includes a type and a description, separated by a colon. Here's a breakdown of each component:

Type: The type indicates the nature of the commit and should be selected from a predefined set of types that are relevant to the changes made. Some common types include:

- feat: for a new feature implementation.
- fix: for a bug fix.
- docs: for documentation changes.
- chore: for maintenance or general housekeeping tasks.
- test: for adding or modifying tests.
- refactor: for code refactoring without changing functionality.
- style: for code style changes (e.g., formatting, indentation).

Description: The description provides a brief summary of the changes made in the commit. It should be concise but descriptive enough to understand the purpose of the commit.

Examples:-

```bash
feat: Add search functionality for bus routes
```

# Here are the steps to follow when writing a commit message:

- Start with a verb: Begin the commit message with an imperative verb in the present tense, such as "Add," "Update," "Fix," or "Remove." This sets a clear action-oriented tone for the commit message.

- Keep it concise: Write a brief summary of the changes in the commit. The ideal commit message should be no longer than 50 characters. If more information is needed, provide additional details in the body of the message.

- Provide context and details: After the summary, include a more detailed explanation of the changes made. Describe what was done, why it was done, and any relevant information or considerations.

- Wrap lines at 72 characters: If the commit message exceeds 72 characters, wrap the text to the next line. This helps maintain readability and ensures that the commit message is displayed properly in various tools and interfaces.

- Use proper formatting: Use bullet points or other formatting techniques to structure the commit message, making it easier to read and understand. You can use Markdown or plain text formatting depending on the platform or tools you are using.

- Be consistent: Maintain a consistent style and tone throughout your commit messages. This helps with readability and understanding when reviewing commit history.

- Reference relevant issues or tickets: If your commit is related to a specific issue, bug report, or feature request, include a reference to it in the commit message. This helps with tracking and cross-referencing.

Example:-

```bash
Add user registration form validation

- Implement client-side form validation using JavaScript
- Ensure all required fields are filled out before submission
- Display error messages for invalid input
- Improve accessibility with ARIA attributes

Fixes #123
```

Remember, commit messages are important for maintaining a clear and understandable history of your project. By following these steps, you can ensure that your commit messages provide valuable information to other contributors and help with code review and project management.
