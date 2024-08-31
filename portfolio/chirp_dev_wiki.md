---
layout: page
title: CHIRP Radio Tech Wiki
permalink: /writing/chirp_dev_wiki
display_order: 2
tags: [Technical Writing, Project Management, Content Design]
images:
- { filename: "../img/chirp_wiki_1.png", text: "Main page of the wiki"}
- { filename: "../img/chirp_wiki_2.png", text: "The Quick-Start page"}
- { filename: "../img/chirp_wiki_3.png", text: "Active Project pages are nested under their own category"}
- { filename: "../img/chirp_wiki_4.png", text: "Readme instructions for contributing to the wiki"}
thumbnail_image: ../img/chirp_wiki_thumbnail.png
---

{%- include portfolio_gallery.html -%}

### About The Project
CHIRP Radio is a volunteer-run non-profit radio station located on the North side of Chicago. As a volunteer at CHIRP, I dip my toes in a lot of different areas, including working with a team of tech-oriented folks who build applications that help keep the station running. To speed up the process of getting people involved, I created and maintain the CHIRP Radio Tech Team Wiki. The wiki is a living document that is currently available to the public in its entirety at [chirpradio.github.io](https://chirpradio.github.io/).

### Audience
* Members of the CHIRP Radio volunteer pool who are interested in getting involved with the tech team.
* Existing members of the CHIRP tech team who need to familiar themselves with an active project.

### Skills Used
* Hosted on Github Pages, using a docs-as-code approach.
* Written in Jekyll and Ruby (first time using Jekyll.)
* Written using Markdown.
* Independent research exploring the active projects in the CHIRP Radio Github org and writing about them based on their code and existing documentation.
* Soliciting feedback from members of the tech team (via Slack, Zoom, and face-to-face) and incorporating it into the work.

### Considerations and Challenges

#### The wiki must be easy for anyone to skim over quickly.
Being an organization made up entirely of volunteers, there is a lot of turn-over; individual involvement waxes and wanes depending on people's personal schedules and interest. Maintaining thorough reference documentation is a key factor in keeping volunteers engaged, getting things done quickly, and combatting attrition.

The idea for this wiki came out of a discussion about how documentation was scattered across the organization. I wanted to create one central hub for all of that information -- not so much "everything all in one place", but more of a switchboard to connect people with the information they're looking for. There needed to be a quick-start page with all the basic information on it, and then individual pages for each project currently in active development, with links to all the relevant things to read, install, or get familiar with.

#### The wiki must be built on free software, and it must be easy for others to contribute.
I researched several CMS-style tools for this project. The biggest factor to consider was price: CHIRP is a non-profit that runs almost entirely off of donations, so budget is of utmost importance. Of the many free options available, I wanted to find something that was highly customizable, quick to spin up, and heavily documented online so others could easily contribute. CHIRP has a Github organization where existing documentation was already located, so I ultimately chose Github pages as the wiki's home. Github pages is free, can be as simple or as complex as necessary, and has the option of GUI editing via the website for those who are less technically inclined.

#### The wiki must match CHIRP's voice and branding.
According to the CHIRP branding guide, the CHIRP voice is "conversational, friendly, and enthusiastic"; it can be "jokey and silly, but not unkind", and should be "authoritative with its subject matter." I followed these guidelines when writing the content. To keep in line with visual branding, I used CHIRP's logo and favicon, and kept the UI clean and minimal.