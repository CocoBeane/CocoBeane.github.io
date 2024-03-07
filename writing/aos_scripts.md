---
layout: page
title: AOS Dev Runbook
permalink: /writing/aos_scripts
elevator_pitch: "An internal reference manual for non-technical workers to run Ruby"
images:
- { filename: "../img/aos_1.png", text: "One", hero: true}
- { filename: "../img/aos_2.png", text: "Two"}
- { filename: "../img/aos_3.png", text: "Three"}
- { filename: "../img/aos_4.png", text: "Four"}
---

{%- include portfolio_gallery.html -%}

## About The Project
I created this internal reference manual when I was Team Lead of Application Operations Support at Groupon. It was used heavily on a daily basis by the team from about 2017 to 2021.

The Application Operations Support team (abbreviated "AOS") worked closely with a team of developers whenever a Ruby support script needed to be run on production data. When the developers shifted their focus to other projects, they sought to move ownership of the remaining scripts to the AOS team indefinitely. As the team member with the most technical experience, I was tasked with learning the holistic process of writing, editing, and running the scripts from the Ruby console on a remote server, then streamlining the bulky, ad-hoc process into one that could be easily replicated by the non-technical members of the team. I spent several months shadowing the dev team and supplementing my existing Ruby knowledge as I built this process and its documentation. The process was piloted with two team members, and eventually rolled out to the rest of the team.

### Audience
The AOS team was a small group of Engineering support agents located in Chicago, Dublin, and Bangalore. The members of the team had no formal Engineering background and most of them had only a very basic amount of technical knowledge. Their expertise was in incident management, user interface troubleshooting, and communicating with stakeholders. None of them had worked in Ruby before, and most of them had never even seen a command line prompt.

### Considerations and Challenges
This reference manual was built with the intention of serving several functions. It needed to be:
* A technical training manual for absolute beginners that familiarized them with basics such as "what is the Command Line?"
* A fool-proof, step-by-step runbook that the team could follow when executing the script tasks, and reference for troubleshooting if something went wrong.
* Easy to build upon when new scripts were written and needed to be onboarded by the team.

On top of that, the manual had to fit within the style of the team's existing work, which meant it had to be:
* Located in the team's existing documentation resource, which was in Atlassian Confluence CMS
* Written in English (using Markdown) with plain wording, little-to-no technical terminology, and avoiding regional slang or metaphors (global team, remember?)

I created the manual in its own section of the AOS Team's Confluence space, so it was easily distinguished from the team's other runbooks, but everything was still grouped together and easy to find. I started with a "Basics" page that brought together all necessary setup instructions, introduction of terms and concepts, layout of the process, a basic program for self-training, and additional resources to reference.

Each individual script was documented on its own page with runbook-style step-by-step instructions that could be copied and pasted directly from the page, as well as screenshots of what the script looked like as it responded to the user's input. Special instructions or considerations for running the script were noted at the top of the page. The format of each script page was designed to be completely identical such that I was able to extract it out into a page template. When future scripts tasks were added, the template could simply be cloned and filled in to add to the documentation.

At the time, Confluence offered no options for organization of nested pages in a section. They were sorted alphabetically by default, so I named each page intentionally in a way that would aid in organization. The names of the administrative-type pages each started with a number that indicated their importance. For example, the basics page was titled "1. AOS Dev Basics", which forced it to the top of the navigation menu. The script pages then began with "AOS Dev Script:" and then the name of the script as outlined in the script runner app.

### Skills Used
* Atlassian Confluence CMS and Markdown
* Shadowing developers to familiarize myself with the existing process
* Independent research to pad my existing knowledge of the technical concepts involved, including Ruby on Rails, UNIX Command Line, and working on remote servers via SSH