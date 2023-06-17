# Contribution Guide 💻

We recommend you to do local setup in a Linux environment. We will soon update the readme for Windows setup.

If you're reading this, you're probably creating a Pull Request or planning to do so and that's great!🥳

# How to Contribute

1. Fork this repository.

2. Clone the forked repository.

   ```bash
   git clone https://github.com/<your_username>/busify.git
   ```

3. Navigate to the project directory.

   ```bash
   cd busify
   ```

4. Run the docker container with the command (make sure you have docker installed before running this).

   To Install Docker in Linux

   [Guide](https://youtu.be/KCckWweNSrM)

   [Install](https://docs.docker.com/engine/install/)

   After installing docker, run the following command to start database containers.

   ```bash
   docker compose --env-file backend/.env up
   ```

6. In new terminal type

   ```bash
   cd backend
   npm install
   npm run migrate:dev
   npm run seed
   npm run start:dev
   ```

   This will start the backend server.

7. Open another new terminal and type

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

   This will start the frontend server.

8. Make changes in source code.

9. Stage your changes and commit

   ```bash
   git add <filename>
   ```

10. Commit your changes

   ```bash
   git commit -m "<type>(optional_scope): <your_commit_message>"
   ```

11. Push your local commits to the remote repo.

12. git push

13. Create a PR to develop repository.

# For Creating a New PUll Request 💡💻

1. Navigate to the repository's directory:

   ```bash
   cd <repository-directory>
   ```

2. Ensure you are on the branch you want to use as the base branch:

   ```bash
   git checkout <base-branch>
   ```

3. Create a new branch for your pull request:

   ```bash
   git branch <new-branch-name>
   ```

4. To Switch to New created branch
   ```bash
   git checkout -b <new-branch-name>
   ```
5. Stage and commit your changes:

   ```bash
   git add .
   git commit -m "Your commit message here"
   ```

6. Replace "Your commit message here" with a descriptive message that summarizes the changes you made.

7. Push the new branch to the remote repository:
   ```bash
   git push origin <new-branch-name>
   ```
   This command pushes the new branch to the remote repository, making it available for others to see and review.

- On GitHub navigate to the repository and locate the "New Pull Request" button.

# Conventional Commit Messages

In our project, we follow the convention of using conventional commit messages for all commits. Conventional commit messages provide a standardized format for commit messages, making it easier to understand and track changes in our codebase.

A conventional commit message consists of a concise and structured format:

```bash
<type>(optional_scope): <your_commit_message>
```

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
feat(backend): Add search feature....
```
