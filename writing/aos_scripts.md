---
layout: page
title: App Ops Script Runbook
permalink: /writing/aos_scripts
elevator_pitch: "An internal reference manual for non-technical workers to run Ruby"
images:
- { filename: "../img/aos_1.png", text: "The main directory and basics page of the runbook", hero: true}
---

{%- include portfolio_gallery.html -%}

### About The Project
I created this internal runbook when I was Team Lead of the Application Operations Support team at Groupon (abbreviated "AOS".) The AOS team inherited a library of 30+ vital support scripts, but did not know how to run them. I had the most technical experience on the team, so I took ownership of learning the process and creating documentation for it. Research for this runbook included shadowing Subject-Matter Experts and learning Ruby. The runbook was used on a daily basis by the AOS team from about 2017 until 2021. Unfortunately, a lot of the content of the runbook contains proprietary information, so I'm not able to include many image samples.

### Audience
The AOS team This team consisted of 10-12 engineering support agents located in the United States, Ireland, and India. Team members had no formal engineering background; their expertise was in incident management, user interface troubleshooting, and communicating with stakeholders. None of them had run a Ruby script before, and most of them had never even seen a command line prompt.

### Skills Used
* Atlassian Confluence, using Markdown for formatting.
* Shadowing subject-matter experts.
* Independent reasearch to teach myself Ruby on Rails, Command Line, and the basics of working on remote servers via SSH.

### Considerations and Challenges
This rubook was built with the intention of serving several functions. It needed to contain:
* A self-training manual for absolute beginners that familiarized them with basics such as "what is the command line?" and "what does it mean to SSH to a remote server?"
* Fool-proof, step-by-step instructions for executing each of the 30+ unique support scripts.
* Clear, concise troubleshooting steps and an escalation protocol to follow if anything went wrong during a script execution.

On top of that, the manual had to fit within the style of the team's existing work, which meant it had to be:
* Located in the team's existing documentation resource, which was in Atlassian Confluence
* Easy to build upon when new scripts needed to be onboarded by the team.
* Written in English with plain wording, and little-to-no technical terminology, slang, or idioms (global team, remember?)
