---
layout: page
title: CHIRP Tech Wiki
permalink: /portfolio/chirp_dev_wiki
display_order: 2
tags: [Technical Writing, Project Management, Content Design]
images:
- { filename: "../img/chirp_wiki/1.png", text: "Main page of the wiki"}
- { filename: "../img/chirp_wiki/2.png", text: "The Quick-Start page"}
- { filename: "../img/chirp_wiki/3.png", text: "Active Project pages are nested under their own category"}
- { filename: "../img/chirp_wiki/4.png", text: "Readme instructions for contributing to the wiki"}
thumbnail_image: ../img/chirp_wiki/thumbnail.png
---
<div class="content" markdown=1>

CHIRP is a volunteer-run non-profit radio station in Chicago. As with any organization that runs on volunteer power, CHIRP's Tech Department has high turnover, a mix of knowledge levels, and work rarely gets documented; this creates a lot of barriers to entry for newcomers. I took on this project with the goal of creating a home base for everything related to the Tech Department, making it much easier for people of all skill levels to get involved at their leisure. The wiki is a living document that is currently available to the public in its entirety at [chirpradio.github.io](https://chirpradio.github.io/).

</div>

{%- include portfolio_gallery.html -%}

<div class="content" markdown=1>

### Skills Used
* Independent research to determine an appropriate software solution
* Github Pages
* Jekyll
* Ruby
* Markdown
* HTML and CSS

### Process
#### 1. Audit of Existing Documentation
I began this project by putting out a call to existing volunteers for any documentation they were aware of. I scoured volunteer training materials and CHIRP's Github instance, and I compiled a spreadsheet of everything I could gather. Then, I did a small audit to determine which items were still relevant, which items could be combined, etc.
#### 2. Research and Format Exploration
Using the data in my audit spreadsheet, I researched several software solutions to determine the best place to host our new wiki. I ended up selecting a docs-as-code approach using Github pages. This was due to its price (free!), ability to customize, and easy integration with existing CHIRP resources hosted on Github.
#### 3. Building the New Wiki
I set up the wiki with a simple documentation-focused theme, then created a layout and placeholder pages, which I filled in over the course of a few weeks. Some of the content was simply ported over from existing documentation, and some was written up from scratch.
#### 4. Review and rollout
Once the wiki was live, I demo'd it at a meeting for feedback. I added a readme file with setup instructions, and opened up the wiki for others to contribute.

### Considerations and Challenges

Audit and rewrite existing documentation

#### The wiki must be easy for anyone to skim over quickly.
Being an organization made up entirely of volunteers, there is a lot of turn-over; individual involvement waxes and wanes depending on people's personal schedules and interest. Maintaining thorough reference documentation is a key factor in keeping volunteers engaged, getting things done quickly, and combatting attrition.

The idea for this wiki came out of a discussion about how documentation was scattered across the organization. I wanted to create one central hub for all of that information -- not so much "everything all in one place", but more of a switchboard to connect people with the information they're looking for. There needed to be a quick-start page with all the basic information on it, and then individual pages for each project currently in active development, with links to all the relevant things to read, install, or get familiar with.

#### The wiki must be built on free software, and it must be easy for others to contribute.
I researched several CMS-style tools for this project. The biggest factor to consider was price: CHIRP is a non-profit that runs almost entirely off of donations, so budget is of utmost importance. Of the many free options available, I wanted to find something that was highly customizable, quick to spin up, and heavily documented online so others could easily contribute. CHIRP has a Github organization where existing documentation was already located, so I ultimately chose Github pages as the wiki's home. Github pages is free, can be as simple or as complex as necessary, and has the option of GUI editing via the website for those who are less technically inclined.

#### The wiki must match CHIRP's voice and branding.
According to the CHIRP branding guide, the CHIRP voice is "conversational, friendly, and enthusiastic"; it can be "jokey and silly, but not unkind", and should be "authoritative with its subject matter." I followed these guidelines when writing the content. To keep in line with visual branding, I used CHIRP's logo and favicon, and kept the UI clean and minimal.
</div>