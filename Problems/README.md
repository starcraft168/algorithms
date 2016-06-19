#Toy Problems

Welcome to Toy Problems. This repository will be updated every morning with a new
code challenge.

#Using this Repository
You'll find each day's toy problem in its own folder.

#Getting a Copy of the Repo

If you haven't already, fork the repository on GitHub and clone your newly created
repo down to your computer. 

#Submitting your Solutions

Once you're done, push your changes to GitHub and issue a pull request from your
repository's master branch to your Telegraph Academy branch.

#Updating the Repository

Every morning, when a new toy problem is added, you'll need to sync your version of
the repo with Telegraph Academy's. Git won't automatically pull in upstream changes for
you; it trusts that you'll pull them in as needed. Do so by giving Git a reference
to Telegraph Academy's version of the repo:

    git remote add upstream https://github.com/telegraphacademy/2015-10-toy-problems.git

After you've done that, updating your repo is as simple as running the following:

    git checkout master       // Your fork's master branch
    git pull upstream master  // Your class's master branch

This will check out your branch and tell git to grab any changes made to the main
repository and merge them into your branch.
