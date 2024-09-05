---
layout: page
title: App Ops Script Runbook
permalink: /portfolio/aos_scripts
elevator_pitch: "An internal reference manual for non-technical workers to run Ruby"
display_order: 3
tags: [Technical Writing, Project Management]
images:
- { filename: "../img/aos/1.png", text: "The main directory and basics page of the runbook in Confluence"}
thumbnail_image: ../img/aos/thumbnail.jpg
---

<div class="content" markdown=1>

I created this internal runbook when I was Team Lead of the Application Operations team at Groupon (abbreviated “App Ops”.) The App Ops team inherited a library of 30+ Ruby support scripts that were vital to business operations at the company, but we did not have the technical knowledge to run them. I took ownership of learning the existing process, simplified it, and then created a runbook and a training program for the rest of the team. This documentation was used faithfully for many years, even long after my departure.

</div>

{%- include portfolio_gallery.html -%}

<div class="content" markdown=1>

### Skills Used
* Shadowing subject-matter experts
* Independent study of Ruby on Rails, Command Line Tools, Git, and the basics of working on remote servers via SSH
* Technical writing
* Content Layout and organization
* Atlassian Confluence
* Markdown

### Considerations and Challenges

#### The runbook must meet its audience at their level
The App Ops team consisted of 10-12 engineering support agents located in the United States, Ireland, and India. The members of the team had no formal engineering background; their expertise was in incident management, user interface troubleshooting, and communicating with stakeholders. None of them had run a Ruby script before, and most of them had never even seen a command line prompt.

Keeping this in mind, I decided the runbook must contain:
* A self-training manual for absolute beginners that could familiarize them with basics such as "what is the command line?" and "what does it mean to SSH to a remote server?"
* Visual step-by-step instructions for executing each of the 30+ unique support scripts, including what inputs to provide and what output to expect
* Clear, concise troubleshooting steps and an escalation protocol to follow if anything went wrong during a script execution

It also had to be written in English with plain wording, and little-to-no technical terminology, slang, or idioms, due to the global nature of the team.

#### The runbook must fit within the style of the team's existing work
App Ops had a clearly established workflow for all their other tasks. Documentation for these tasks lived in a designated space in Atlassian Confluence, and was laid out and labeled according to certain style guidelines. For ease of adaptability, I needed to design the entire process to fit as closely with their existing processes as possible, and organize the documentation similarly to their other runbooks.

#### The runbook must be easy to build upon for future growth
The world of Groupon was constantly evolving, so it was not uncommon for new support scripts to be created as issues arose. Anticipating that new scripts would need to be written and/or onboarded by the team, it was of utmost importance that this new process and its documentation be easy to build upon. I designed template pages for the runbook that could be cloned and filled in with content whenever a new script was added, and wrote up a standard operating procedure for this use case.

### Process
#### 1. Shadowing and Independent Study
The scripts the App Ops team inherited were previously written and executed by a team of two developers. I set up twice-weekly shadowing and reverse-shadowing sessions with them to learn their existing process so I could build off of it. Simultaneous to this, I took several self-guided online courses in Ruby on Rails, Command Line Tools, Git, and other related skills. This process took several months.
#### 2. Creating Documentation
Using the information gathered in my shadowing sessions and research, I created documentation pages for each script and put together a training program that the App Ops team could use to learn basic coding skills.
#### 3. Process Refinement
To refine the new process and its documentation, I took over sole ownership of the script running process from the dev team for several weeks. This allowed me to test my own work and smooth out any issues that arose.
#### 4. Pilot program and Revisions
Once everything was running efficiently, I launched a pilot program with a group of two volunteers from the App Ops team. I trained them in person, answered questions, and refined the runbook and process based on their feedback.
#### 5. Full roll-out
The pilot program was deemed a success after several weeks, and the finished process was rolled out to the rest of the team permanently.

</div>