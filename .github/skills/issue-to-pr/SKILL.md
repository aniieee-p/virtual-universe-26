---
name: issue-to-pr
description: Safely fix a GitHub issue in the learner's fork and open a draft pull request.
---

# Issue to Pull Request

Follow this workflow to fix one GitHub issue.

1. Verify the learner's fork and push destination:
   - Run `git remote -v`.
   - Run `gh repo view <fork-url> --json nameWithOwner,parent`.
   - Confirm that the repository belongs to the learner and that they have write access.
   - Use `GH_REPO=<verified-owner/repo>` for GitHub CLI commands.
   - Push only to the explicitly verified fork remote. Never assume `origin` is the fork.
   - If no fork destination is ready, stop and ask before preparing one.

2. Select an issue:
   - Use the issue number provided by the learner, or run `gh issue list --state open`.
   - Read it using `gh issue view <n>`.

3. Inspect the relevant code and understand the issue. If unclear, ask for clarification on the issue instead of guessing.

4. Create a branch using the actual issue number:
   - Example: `git switch -c fix/issue-123`
   - Replace `123` with the real issue number. Never type angle-bracket placeholders literally.

5. When a fix needs library or API documentation, use the Context7 Expert agent and connected Context7 MCP tools.
   - Resolve the library ID and retrieve relevant documentation.
   - Send only public documentation queries, not repository contents.
   - Cite relevant documentation sources in the draft PR.
   - If the agent or connector is unavailable, report that instead of claiming the lookup succeeded.

6. Make the smallest change that fixes the issue. Run the project's tests if available. Stage only files changed for this issue.

7. Commit, push, and open a draft pull request that closes the issue:
   - Push only to the verified fork remote.
   - Create the draft PR with a title such as `Fix #123: Issue title`, replacing the placeholders with real values.
   - Start the PR body with `Closes #123`, followed by a short summary and a `How to test` section containing exact commands a reviewer can run.

8. Ask before commenting on the issue with what changed and how to test it.

9. Report the exact issue, PR, and branch. Leave the PR branch checked out so the learner can review it in the same session.

Never merge, approve, or close a PR or issue. Do not perform any commit, push, or PR action without the learner's authorization.
