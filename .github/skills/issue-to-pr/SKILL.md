---
name: issue-to-pr
description: Safely fix a GitHub issue in the learner's fork and open a draft pull request.
---

# Issue to Pull Request

Follow this workflow to fix one GitHub issue.

1. Confirm the learner's fork target and push remote established in this
   session. Inspect `git remote -v`, verify the selected destination with
   `gh repo view <fork-url> --json nameWithOwner,parent`, and confirm ownership or
   write access. Origin may still be the event repository. Use
   `GH_REPO=<verified-owner/repo>` for every GitHub CLI operation and push only to
   the explicitly verified fork remote, never implicitly to origin.
   - If no fork destination is ready, stop before edits or resource creation.
     Offer to prepare it in this same checkout with approval, preserving origin,
     other remotes, and local work. Do not open or switch sessions.
2. Select an issue:
   - Use the issue number provided by the learner, or list open issues with
     `gh issue list --state open` and ask which one to fix.
   - Read it using `gh issue view <n>` and inspect the relevant code.
   - If the fix is unclear, ask the learner for clarification rather than
     guessing.
3. Create a branch using the actual issue number:
   - Example: `git switch -c fix/issue-123`
   - Replace `123` with the real issue number. Never type angle-bracket
     placeholders literally.
4. When a fix needs library or API documentation, use the Context7 Expert agent
   and connected Context7 MCP tools.
   - Resolve the library ID and retrieve relevant documentation.
   - Send only public documentation queries, not repository contents.
   - Cite relevant documentation sources in the draft PR.
   - If the agent or connector is unavailable, report that instead of claiming
     the lookup succeeded.
5. Make the smallest change that fixes the issue. Run the project's tests if
   available. Stage only files changed for this issue.
6. Show the changes and obtain the learner's authorization before committing,
   pushing explicitly to the verified fork remote, and opening a draft pull
   request that closes the issue. Preserve any learner skill edits and include
   them only with approval.
   - Use a title such as `Fix #123: Issue title`, replacing placeholders with
     the actual issue number and title.
   - Start the PR body with `Closes #123`, followed by a short summary and a
     `How to test` section containing exact commands a reviewer can run.
7. Ask before commenting on the issue with what changed and how to test it.
8. Report the exact issue, PR, and branch. Leave the PR branch checked out so
   the learner can review it in the same session; do not switch branches.

Never merge, approve, or close a PR or issue. Do not perform any commit, push,
or PR action without the learner's authorization.
