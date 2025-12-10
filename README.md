# Final Project
David's Final Project - "Nature of America Stamp Series".  This site highlights the 12 stamp panes that were part of a series, "Nature of America" from the US Postal Service that ran from 1999 to 2010.  The series highlighted various ecosystems found in the United States.  It was unique in that the individual postage stamps were embedded into each pane.

- Site: [project.dph445.students.cs12.net](https://project.dph445.students.cs12.net/)
- GitHub: [dpheitmeyer/nature-of-america-astro](https://github.com/dpheitmeyer/nature-of-america-astro/)

## Reflection

### What went well

* Use of Astro Collections was helpful for the panes
* Responsive images are good in the project, though getting it implemented for all of the images took some iterations.  I paid particular attention to the `sizes` attribute and making that match pretty exactly to my CSS.  For example, in `src/pages/index.astro` there is:
```
sizes="(max-width: 699px) calc(90vw - 1rem - 2px), (max-width: 1035px) calc(45vw - 1.5rem - 2px), (max-width: 1401px) calc(30vw - 1rem - 1px - 0.67rem), (max-width: 1750px) calc(22.5vw - 1rem - 1px - 0.75rem), 360px"
```
* Lighthouse reports on the Home page and Great Plains Prairie page show all scores "green"  and in the 90's.  PDF reports: [Lighthouse - Home Page](./__readme_resources/lighthouse-home.pdf) and [Lighthouse - Great Plains Prairie](./__readme_resource/lighthouse-great-plains-prairie.pdf)

### What could be better

Here's a list of things that I wanted to get to, but will need to wait until the next release:

- basic site tests
- implement LeafletJS Map with a Vue component instead of Astro.  However, since the map is most of the page, I don't think I would gain that much with Vue and Astro's island architecture.
- helper function to get sorted panes collection.  I call this once each in `index.astro` and `map.astro` so it isn't huge, but still repeated code.
- for the single stamps that are part of the panes, for the Great Plains Prairie, I have both the image and description.  For other panes, I only have the images displayed.  I would like to put the titles/descriptions of the single stamps for all the panes.

## Installation and Running

The site uses Astro and can be installed, run, and build with the standard Astro commands:
```
npm install
```
And 
```
npm run dev
npm run build
npm run preview
```

## How requirements are met

### Build Process of at least 3 pages
Astro is used for the build.  Pages are:
- `/` Home
- `/panes/great-plains-prairie/` Great Plains Prairie
- `/panes/STAMP-PANE-SLUG/` Other panes are linked to on home page 
- `/map/` Map of Locations of First Issue

I use `layouts` and `components` for code organization and for DRY principle.

### Data
Data for the panes is part of the "front matter" (see for instance `/src/content/great-plains-prairie.md`).

### Automated deployment
Github action `.github/workflows/deploy.yaml` builds and deploys site on push to main branch using the `burnett01/rsync-deployments@6.0.0` action.  Deploys to dreamhost, and site is viewable at [project.dph445.students.cs12.net](https://project.dph445.students.cs12.net/)

### Use of JavaScript in browser
The map of the first issue locations is done through LeafletJS and data from the panes collections.  I use the "npm" way of using leaflet instead of referencing a CDN.  See `src/pages/map.astro`

### Go Deeper

- I used Astro Collections for my "panes" content.  This allowed me to easily treat the group of panes as a unit while also having pages for the home page, map, and about.
- I used Astro Image component to make responsive images on the home page.  I used a helper JS function to provide a list of 8% size increments between two min and max values that I provided.
- I used the `fitBounds()` function in Leaflet to automatically zoom to where all the markers are visible on the map when the page loads.

## 5-Planes approach

### Strategy

**Primary audience**:  Lay-persons curious about different plants and animals in different ecosystems in the United States.  The site is not intended for scientific or advanced information about the plants and animals.  Though the site will use the “Nature of America” stamp series, it is not designed for the serious stamp collector. 

**Secondary audience**:  K-8 students interested in exploring the different plants and animals in different parts of the United States

### Scope
- All 12 stamp panes - front images, back text
- For each pane meta information - where and when released
- Individual stamps within each pane
- Flora and fauna present on that pane stamp
- Additional resources about the particular ecosystem of the pane

### Structure
![site structure](./__readme_resources/structure.png)
### Skeleton
![low-fi skeleton of panes page](./__readme_resources/skeleton-1.png)
![low-fi skeleton of map page](./__readme_resources/skeleton-2.png)
### Surface
See site.
![screenshot of project home page](./__readme_resources/nature-of-america-home.png)
