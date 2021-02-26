Welcome to Podcast Express, your one stop shop for all of the coolest podcasts. We'll need to utilize your web development skills to help prepare the site for our new users!

**Tips:** _Note you will need to navigate to these endpoints by editing the url in your browser directly._ We'll need to use dynamic routing, queries, and params to accomplish these tasks. Focus first on defining your endpoint, then on rendering the required data at that route, and lastly on being able to handle for "data not found" cases.

### Core User Stories

#### Part 1

```no-highlight
As a podcast listener
I want to see a list of podcasts
So I can browse for my mood
```

Acceptance Criteria:

- When I visit `/`, I am redirected to `/podcasts`"
- Visiting `/podcasts` displays an unordered list of podcasts by name
- The list of podcasts is read in from the provided `podcasts.json` file

#### Part 2

```no-highlight
As a Podcast Creator
I want to add my Podcast
So that I can make it big!
```

Acceptance Criteria:

- When visiting `/podcasts/new` I see a form to add a new podcast
- Submitting the form persists the podcast to `podcasts.json`

#### Part 3

```no-highlight
As a curious listener
I want to view more details about the podcasts
So that I can learn more about them
```

Acceptance Criteria:

- When I visit `/podcasts/:name` I should see the title, description and network for the correct podcast
- If the podcast isn't found, the response status should return a `404` and "Not found"
- Update the index page so that the Podcast title's are links to the show page
