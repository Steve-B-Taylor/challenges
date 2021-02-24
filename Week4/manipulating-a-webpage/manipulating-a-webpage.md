### Learning Goals

- Add and manipulate images using CSS
- Add, update, and remove elements in our page using JS

## Getting Started

```no-highlight
et get manipulating-a-webpage
cd manipulating-a-webpage
open index.html
code .
```

You should see our "beautifully" styled Stars page, with a background image, and text of different sizes and colors.

We'll start by reviewing the code we've been provided with. Our `index.html` file has an `h1` followed by a `main-container` div with three main child divs, marked as `small-page-section`s. Each has an `h2` listing a star with a paragraph about the star, and then a `facts-section` sub-div inside with an `h4` unordered list of facts about said star.

As for our CSS, we have a background image and `font-family` applied to our body, and have applied various text colors to our different elements. Our `centered` class is set up to align text in the center, and our `facts-section` class has a blue border.

As we go, feel free to code along with this article to see your changes in action!

## Updating our Styling

Our page looks great (obviously), but let's be honest - if we're going to try to read this text, we may need to tone it down a little.

First, let's change our background image to a background color by _updating_ our existing `body` ruleset to have a color instead of an image:

```css
body {
  background-color: #00003c;
  font-family: Helvetica;
}
```

Refresh your page, and you should see your background change to a navy blue.

Let's also make it look a little less boxy by adding a `border-radius` to our facts section border. Update the existing `facts-section` ruleset to include this:

```css
.facts-section {
  border: 2px solid #13f4e3;
  border-radius: 1em;
}
```

Finally, our `h4` looks very squished up against the left side of our border. Let's add some margin to our `h4` to give it some extra room:

```css
h4 {
  margin-left: 1.5em;
}
```

Looks great! **So** much more readable.

## Adding Some Images

Now that we got rid of our background, let's add some pictures of our stars (or their pop culture counterparts) to liven up our page.

For the existing sections, let's go ahead and update our HTML document directly to add the star images.

Update your HTML file to include image tags under each `h2` as so:

```html
...
<h2 class="centered">Sirius</h2>
<img
  src="https://horizon-production.s3.amazonaws.com/images/article/manipulating-a-webpage/sirius.jpg"
  alt="Image of Sirius from Harry Potter"
/>
...
<h2 class="centered">Betelgeuse</h2>
<img
  src="https://horizon-production.s3.amazonaws.com/images/article/manipulating-a-webpage/beetlejuice.jpg"
  alt="Image of Beetlejuice"
/>
...
<h2 class="centered">Pleiades</h2>
<img
  src="https://horizon-production.s3.amazonaws.com/images/article/manipulating-a-webpage/pleiades.jpg"
  alt="Image of Pleiades star cluster"
/>
```

Fantastic! Let's make sure we center those images. Remember that we can horizontally center elements using a left and right `margin` of `auto`. We can add the below into our `style.css` file:

```css
img {
  margin: 0 auto;
}
```

We refresh our page and....it didn't work! What's going on here?! Well, our images are actually inline elements, so our typical box model styling doesn't work automatically. Luckily, we know a way to override that: by switching the `display` to `block`. Let's add that:

```css
img {
  margin: 0 auto;
  display: block;
}
```

MUCH better. Now that our elements are considered block elements, our margin is centering them appropriately. Let's move on!

## Updating Our Page with JavaScript

Zoinks! On our latest space mission, we discovered a new star cluster! This one is a mere 300 lightyears from Earth, and it's incredibly visible: it's almost as if it appeared out of nowhere. We need to update our page to have the most up-to-date information! We've decided to name our star cluster Fiadh, and want to make sure our page includes all of the information about this star. We can use JavaScript to make the necessary updates to our page by updating our `main.js` file.

First, we're going to need to update our facts about Pleiades. It is no longer the most visible star cluster to the naked eye - so that fact needs to go!

We know that there are only unordered lists on our page under our facts sections, so let's use `getElementsByTagName` to find our third `ul`, and then access our second `li`:

```js
let unorderedLists = document.getElementsByTagName('ul')
let pleiadesList = unorderedLists[2]
let listItems = pleiadesList.children
console.log(listItems)
```

By adding `console.log(listItems)`, we're able to double-check that we've done everything properly so far in order to isolate the Pleiades list items.

Now, let's go ahead and remove the second list item:

```js
pleiadesList.removeChild(listItems[1])
```

If we refresh our page, we can see that the fact regarding visibility has been removed from Pleiades' list. Bingo!

Now, let's update our page with our new information about Fiadh.

First, we want to create a new small page section, and add a header and paragraph about our star. We can do so by using `createElement`, `textContent`, and `appendChild`:

```js
let fiadhSection = document.createElement('div')
fiadhSection.className = 'small-page-section'

let fiadhHeader = document.createElement('h2')
fiadhHeader.className = 'centered'
fiadhHeader.textContent = 'Fiadh'

let fiadhParagraph = document.createElement('p')
fiadhParagraph.textContent =
  'Fiadh is the newest star cluster discovery, made by the amazing team at Launch Academy.'

fiadhSection.appendChild(fiadhHeader)
fiadhSection.appendChild(fiadhParagraph)
```

Great - we created our `div`, `h2`, and `p` elements and added all necessary classes and text content, and then used `appendChild` to add them into the section. But if we refresh our page, Fiadh isn't showing up! This is because we still need to add our `fiadhSection` as a child of our main page container:

```js
let mainContainer = document.getElementById('main-container')
mainContainer.appendChild(fiadhSection)
```

Woops, we forgot our image! Let's add our image tag using `setAttribute` and `insertBefore` as shown below:

```js
let fiadhImage = document.createElement('img')
fiadhImage.setAttribute(
  'alt',
  'Image of Fiadh the squirrel at her picnic table'
)
fiadhImage.setAttribute(
  'src',
  'https://horizon-production.s3.amazonaws.com/images/article/manipulating-a-webpage/fiadh.jpg'
)
fiadhSection.insertBefore(fiadhImage, fiadhParagraph)
```

We've set both attributes of `alt` and `src` so that our `img` tag has everything it needs to make our image appear on the page. Then, we used `insertBefore` to add the image about our paragraph about Fiadh.

Finally, we need to add our fact list. We can use `createElement` again to get a list of facts set up. This time, we'll also use `innerHTML` to add our header:

```js
let fiadhFactsSection = document.createElement('div')
fiadhFactsSection.className = 'facts-section'
fiadhFactsSection.innerHTML = '<h4>Facts about Fiadh:</h4>'
console.log(fiadhFactsSection)

let fiadhFactsList = document.createElement('ul')
```

By running `console.log(fiadhFactsSection)`, we can see that we have a div with an `h4` inside with our desired text. Now that we have our `fiadhFactsSection` set up, let's add some facts to our list.

We'll do so by first creating an array of string facts, and then iterating over them to add `li` elements into our `ul`, before adding the `ul` on to our page:

```js
let fiadhFacts = [
  'It is the most visible star cluster to the naked eye.',
  'Fiadh is named after the backyard squirrel domesticated by AmyLynn of the Launch Academy team.'
]

fiadhFacts.forEach(fact => {
  let listItem = document.createElement('li')
  listItem.textContent = fact
  fiadhFactsList.appendChild(listItem)
})
```

Finally, we need to add this list to our `facts-section` div, and add that div into our `fiadhSection` so that it appears on our page:

```js
fiadhFactsSection.appendChild(fiadhFactsList)
fiadhSection.appendChild(fiadhFactsSection)
```

Et voila! A full star write-up on our new discovery, Fiadh, added to our page entirely via JavaScript. Great work!

## Final Code Solution

Your final code should be as follows:

#### index.html


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <h1 class="centered">Style the Stars</h1>

    <div id="main-container">
      <div class="small-page-section">
        <h2 class="centered">Sirius</h2>
        <img
          src="https://horizon-production.s3.amazonaws.com/images/article/manipulating-a-webpage/sirius.jpg"
        />
        <p>
          Sirius is the brightest star in the night sky. The name “Sirius” is
          derived from the Ancient Greek “Seirios“, which translates to
          “glowing” or “scorcher”. Whereas it appears to be a single bright star
          to the naked eye, Sirius is actually a binary star system, consisting
          of a white main-sequence star named Sirius A, and a faint white dwarf
          companion named Sirius B.
        </p>

        <div class="facts-section">
          <h4>Facts about Sirius:</h4>
          <ul>
            <li>It is 6.8 light years away from Earth.</li>
            <li>
              The origin of the phrase "The Dog Days of Summer" is due to the
              ancient Romans associating the hottest days of summer with the
              star Sirius.
            </li>
            <li>
              Sirius is the brightest star in the constellation "Canis Major"
              (Large Dog).
            </li>
            <li>
              Speaking of constellations, Sirius is known as Orion the Hunter's
              dog, since it follows Orion into the night sky.
            </li>
          </ul>
        </div>
      </div>

      <div class="small-page-section">
        <h2 class="centered">Betelgeuse</h2>
        <img
          src="https://horizon-production.s3.amazonaws.com/images/article/manipulating-a-webpage/beetlejuice.jpg"
        />
        <p>
          Pronounced “Beetle-juice” (yes, the same as the 1988 Tim Burton
          movie), this star is a bright red supergiant. In 1985, Margarita
          Karovska and colleagues from the Harvard–Smithsonian Center for
          Astrophysics, announced the discovery of two close companions orbiting
          Betelgeuse. While this remains unconfirmed, the existence of possible
          companions remains an intriguing possibility.
        </p>

        <div class="facts-section">
          <h4>Facts about Betelgeuse:</h4>
          <ul>
            <li>It is 642.5 light years away from Earth.</li>
            <li>
              The star’s name is derived from the Arabic name Ibt al-Jauza’,
              which literally means “the hand of Orion”. And indeed, it is in
              the position of Orion's hand in the constellation!
            </li>
            <li>
              Betelgeuse will one day go supernova.
            </li>
          </ul>
        </div>
      </div>

      <div class="small-page-section">
        <h2 class="centered">Pleiades</h2>
        <img
          src="https://horizon-production.s3.amazonaws.com/images/article/manipulating-a-webpage/pleiades.jpg"
        />
        <p>
          Also known as the “Seven Sisters”, Messier 45 or M45, Pleiades is
          actually an open star cluster located in the constellation of Taurus.
          Though the seven largest stars are the most apparent, the cluster
          actually consists of over 1,000 confirmed members (along with several
          unconfirmed binaries). The core radius of the cluster is about 8 light
          years across, while it measures some 43 light years at the outer
          edges. It is dominated by young, hot blue stars, though brown dwarfs –
          which are just a fraction of the Sun’s mass – are believed to account
          for 25% of its member stars.
        </p>

        <div class="facts-section">
          <h4>Facts about Pleiades:</h4>
          <ul>
            <li>It is 444 light years away from Earth.</li>
            <li>
              It is the most visible star cluster to the naked eye.
            </li>
            <li>
              The age of the cluster has been estimated at between 75 and 150
              million years.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <script src="main.js"></script>
  </body>
</html>
```


#### style.css

```css
body {
  background-color: #00003c;
  font-family: Helvetica;
}

h1 {
  color: #f47913;
}

h2,
h4 {
  color: #f2f413;
}

p {
  color: #f413df;
}

ul {
  color: #62df22;
}

.centered {
  text-align: center;
}

.facts-section {
  border: 2px solid #13f4e3;
  border-radius: 1em;
}

h4 {
  margin-left: 1.5em;
}

img {
  margin: 0 auto;
  display: block;
}
```


#### main.js

```js
let unorderedLists = document.getElementsByTagName('ul')
let pleiadesList = unorderedLists[2]
let listItems = pleiadesList.children
pleiadesList.removeChild(listItems[1])

let fiadhSection = document.createElement('div')
fiadhSection.className = 'small-page-section'
let fiadhHeader = document.createElement('h2')
fiadhHeader.className = 'centered'
fiadhHeader.textContent = 'Fiadh'
let fiadhParagraph = document.createElement('p')
fiadhParagraph.textContent =
  'Fiadh is the newest star cluster discovery, made by the amazing team at Launch Academy.'
fiadhSection.appendChild(fiadhHeader)
fiadhSection.appendChild(fiadhParagraph)

let mainContainer = document.getElementById('main-container')
mainContainer.appendChild(fiadhSection)

let fiadhImage = document.createElement('img')
fiadhImage.setAttribute(
  'alt',
  'Image of Fiadh the squirrel at her picnic table'
)
fiadhImage.setAttribute(
  'src',
  'https://horizon-production.s3.amazonaws.com/images/article/manipulating-a-webpage/fiadh.jpg'
)
fiadhSection.insertBefore(fiadhImage, fiadhParagraph)

let fiadhFactsSection = document.createElement('div')
fiadhFactsSection.className = 'facts-section'
fiadhFactsSection.innerHTML = '<h4>Facts about Fiadh:</h4>'
console.log(fiadhFactsSection)
let fiadhFactsList = document.createElement('ul')

let fiadhFacts = [
  'It is the most visible star cluster to the naked eye.',
  'Fiadh is named after the backyard squirrel domesticated by AmyLynn of the Launch Academy team.'
]
fiadhFacts.forEach(fact => {
  let listItem = document.createElement('li')
  listItem.textContent = fact
  fiadhFactsList.appendChild(listItem)
})

fiadhFactsSection.appendChild(fiadhFactsList)
fiadhSection.appendChild(fiadhFactsSection)
```
