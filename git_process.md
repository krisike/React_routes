# Using Git & Github

- When working in a group projects, **always** `checkout` a new branch. **Do not work directly on the master branch.**  

1. Checkout an _issue_branch_. E.g.: `git checkout -b issue-branch-1-adding-navbar`  
2. Commit often throughout the progress of your issue  
3. When the issue is ready, create a Pull Request (PR) that one of your teammates will review and merge.  
4. Rinse and repeat.  
Note: Refer to [image](https://github.com/wyncode/front_end_pt_resources/blob/master/assets/git_workflow01.jpg)  

- Updating an issue:  

1. Commit changes ( `git add . ; git commit -m "Things I've been doing` )  
2. Checkout the master branch (`git checkout master` )  
3. Update local master branch with remote work ( `git pull origin master` )  
4. Checkout the issue branch you wnat to update: ( `git checkout issue-branch-3-magic-button` )  
5. Resolve conflicts if any. Then `git add . ; git commit -m "Resolved merge conflicls"`  
6. Push again if waiting on a PR.  
