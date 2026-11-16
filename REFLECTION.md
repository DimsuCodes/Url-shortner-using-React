# Reflection

My process was taking what I already had from my old Shortly project, built with HTML, CSS and JavaScript, and converting it into React with TypeScript. I took my time and built it one piece at a time: first the page components, then the theme toggle, then the form with the bitly API, and last the saved list of links with a copy button.

The challenges I faced were mostly knowing where keys go. Besides keys, I also had trouble with the children type, JSON.parse vs JSON.stringify, the dark mode CSS, and hooks needing to go inside of the component. I also ran into bitly running out of links. Overall, debugging was easy, and I found this project to be easy, and I learned a ton.

I fixed the key issue by playing with and debugging the code to see how it affects the page. The dark mode was pretty straightforward using my notes and outside resources like Google, Claude and react.dev. When my API ran out, I simply created a new bitly account so the app could keep working and people could test it.

There is a lot I could improve on. I want to get better at props and knowing where they go. I would also hide the API key in a backend so it is not visible in the browser, and add a delete button for links.
