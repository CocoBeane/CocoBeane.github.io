---
layout: page
title: Tech Wiki for CHIRP Radio
permalink: /writing/chirp_dev_wiki
images:
- { filename: "../img/chirp_wiki_1.png", text: "Main page of the wiki", hero: true}
- { filename: "../img/chirp_wiki_2.png", text: "The Quick-Start page"}
- { filename: "../img/chirp_wiki_3.png", text: "Active Project pages are nested under their own category"}
- { filename: "../img/chirp_wiki_4.png", text: "Readme instructions for contributing to the wiki"}
---

{%- include portfolio_gallery.html -%}

## About The Project
I am currently an active and enthusiastic volunteer at CHIRP Radio (Fun Fact: CHIRP stands for **CH**icago **I**ndependent **R**adio **P**roject.) CHIRP Radio is a volunteer-run non-profit radio station located on the North side of Chicago.

As a volunteer at CHIRP, I dip my toes in a lot of different areas, including writing, marketing, outreach, project management, and working with a team of tech-oriented folks who build applications that help keep the station running. To speed up the process of getting people involved with the tech team, I created and maintain the CHIRP Radio Tech Team Wiki. The wiki is a living document that is currently available to the public in its entirety at [chirpradio.github.io](https://chirpradio.github.io/).

## Audience
CHIRP encourages people to explore departments and try out a lot of roles in order to find their niche in the organization. The current tech team consists of about 10 people with a wide variety of age ranges, experience, and passions. Some volunteers are seasoned developers with a deep well of technical expertise, some are fledgling devs just out of school, and still others have no technical skills whatsoever, but are hyper-organized project management types with a great enthusiasm for the tech world. It's very important that the wiki be accessible to people of all experiences and skill-sets without sacrificing important technical details. The culture of the overall CHIRP organization is one of passion for building a casual social community around music, providing acts of service, and having a good time, so I wanted to make sure that the tone of the wiki matched that, as well.

## Considerations and Challenges
Being an organization made up entirely of volunteers, there is a lot of turn-over; individual involvement waxes and wanes depending on people's personal schedules and interest. Maintaining thorough reference documentation is a key factor in keeping volunteers engaged, getting things done quickly, and combatting attrition.

The idea for this wiki originally came out of a discussion about how documentation was scattered across the organization. How does one get involved with the tech team? What languages do they use? What do I download? Who do I contact? When are the meetings? There are so many repos in the Github organization, but which ones are actually being worked on, and what needs to be done on them? I wanted to create one central hub for all of that information -- not so much "everything all in one place", but more of a switchboard to connect people with the information they're looking for. Not sure where to go? Go to the wiki first. There needed to be a quick-start page with all the basic information on it, and then individual pages for project currently in active development, with links to all the relevant things to read, install, or get familiar with.

I researched several CMS-style tools for this project. The biggest factor to consider was price; CHIRP is a non-profit that runs almost entirely off of donations, so budget is of utmost importance. Of the many free options available, I also wanted to find something that was highly customizable, quick to spin up, and heavily documented online so others could easily contribute. CHIRP has a Github organization where the existing documentation was already located, so I ultimately chose Github pages as the wiki's home. Github pages is free, can be as simple or as complex as necessary, and has the option of GUI editing via the website for those who are less technically inclined.

I focused on organization and minimalism in the UI. Users should be able to find what they need quickly without a lot of digging and sorting through dense technical language, but there _should_ be dense technical language available for those who need it. I was able to make use of a free, popular, and well-documented Jekyll theme designed specifically for technical documentation.

## Skills Used
* Github and Github Pages
* Jekyll (first time using Jekyll)
* Ruby
* Markdown
* Independent research exploring the active projects in the CHIRP Radio Github org and writing about them based on their code and existing documentation
* Soliciting feedback from members of the tech team (via Slack, Zoom, and face-to-face) and incorporating it into the finished product