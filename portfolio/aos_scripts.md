---
layout: page
title: App Ops Script Runbook
permalink: /portfolio/aos_scripts
elevator_pitch: "An internal reference manual for non-technical workers to run Ruby"
display_order: 3
tags: [Technical Writing, Project Management]
images:
- { filename: "../img/aos/1.png", text: "The main directory and basics page of the runbook"}
thumbnail_image: ../img/aos/thumbnail.jpg
---

<div class="content" markdown=1>

I created this internal runbook when I was Team Lead of the Application Operations team at Groupon (abbreviated “App Ops”.) The App Ops team inherited a library of 30+ vital Ruby support scripts, but did not have the technical knowledge to run them. I took ownership of learning the process from subject matter experts, creating documentation for it, and then building a standard operating procedure for the team and launching it as a pilot program. The runbook was used routinely throughout the day by the team for many years.

</div>

{%- include portfolio_gallery.html -%}

<div class="content" markdown=1>

### Skills Used
* Shadowed subject-matter experts
* Independent study of Ruby on Rails, Command Line Tools, Git, and the basics of working on remote servers via SSH
* Atlassian Confluence
* Markdown

### Process
#### 1. Shadowing and Independent Study
The scripts the App Ops team inhereted were previously written and executed by a small team of two developers. I set up twice-weekly shadowing and reverse-shadowing sessions with them to learn their existing process so I could build off of it. Simultaneous to this, I took several online courses in Ruby on Rails, Command Line Tools, Git, and other related skills.
#### 2. Documentation
Using the information gathered in my shadowing sessions, I created documentation pages for each script, and put together a training program that the App Ops team could use to learn basic coding skills.
#### 3. Process Creation
I took on the task of being the sole script runner for several weeks as I refined my new process and its documentation, and worked out any kinks with the dev team.
#### 4. Pilot program and Revisions
Once everything was running smoothly with the new process and documentation, I launched a pilot program with a group of two volunteers from the App Ops team. I trained them in person, answered questions, and refined the runbook and process based on their feedback.
#### 5. Full roll-out
The pilot program was deemed a success after several weeks, and the finished process was rolled out to the rest of the team.

### Considerations and Challenges

Audience
Design and implement a brand new process for the App Ops team to easily run Ruby support scripts. The team consists of 10-12 support agents located across the globe. The agents have no formal engineering background and minimal technical knowledge.

This rubook was built with the intention of serving several functions. It needed to contain:
* A self-training manual for absolute beginners that familiarized them with basics such as "what is the command line?" and "what does it mean to SSH to a remote server?"
* Fool-proof, step-by-step instructions for executing each of the 30+ unique support scripts.
* Clear, concise troubleshooting steps and an escalation protocol to follow if anything went wrong during a script execution.

On top of that, the manual had to fit within the style of the team's existing work, which meant it had to be:
* Located in the team's existing documentation resource, which was in Atlassian Confluence
* Easy to build upon when new scripts needed to be onboarded by the team.
* Written in English with plain wording, and little-to-no technical terminology, slang, or idioms (global team, remember?)
</div>