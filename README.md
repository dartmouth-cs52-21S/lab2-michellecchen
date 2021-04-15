# Quiz: "WHICH GOD OF THEROS ARE YOU?"

I certainly don't play *Magic: The Gathering*, but I know a couple people who do. To entertain them, I read through the guidebook and decided to make a quiz featuring the gods from the fictional, Greek-inspired universe, 'Theros.'

Some of them, at least.

To take the quiz, click [here](https://dartmouth-cs52-21s.github.io/lab2-michellecchen/).

**I chose the CSS focus.**

## What Worked Well

Most everything was pretty straightforward. After getting a grasp on flexboxes from the previous lab, it was easy to understand how to hierarchically organize my quiz with said flexboxes. On the uppermost level, I'd have the quiz; contained within that, quiz questions; and contained within those, quiz options. Vertical, vertical, horizontal: by appropriately providing these orientations to `flex-direction`, getting the layout right for this assignment was simple.

The provided modal tutorial in the instructions also helped greatly with all things popup-related.

I had a really fun time working with the design of this quiz, which is why I decided to go the CSS-heavy route: adding a shimmer effect, for one. Consulting various online tutorials and then optimizing them for my quiz was fun and taught me a lot of neat tricks.

## What Didn't (but eventually did)

I ran into trouble with styling the quiz options that went unselected by the user. Initially, I had it such that every option, prior to any option being selected, would have its opacity reduced, etc. The selected option was appropriately styled, but I didn't want everything to be hard to see pre-selection. I only wanted to apply that opacity reduction *after* selection, not before.

I had to play around with this, but eventually, I figured it out. By assigning every radio button in a quiz question, upon one of those buttons being selected, the `unselected` class — and then manually removing that class from only the selected button — I was able to reduce opacity post-selection, and not pre-selection.

Another thing was that the text in the subheaders above each question was, at first, hard to read. It bothered me greatly. But by adding a white `text-shadow` to the words, illuminating them with a sort of halo, they became much more readable.

## Extra Credit

Some of this could be considered as "styling," so I'll just compile a list of cool features that weren't specified in the original assignment (so, not including things such as the animated modal popup, which was required for the CSS focus). Up to you what counts as E.C. :)

- **Shimmering header:** Accomplished through animations.
- **Automatic scrolling between questions**: Mimics Buzzfeed. After answering a question, your browser window automatically scrolls down to the start of the next question.
- **Toggle autoscroll**: By toggling the button fixed to the bottom-left of the screen, you can enable or disable the feature mentioned above. Its default state is set to disabled.
- **Animated speech bubble**: Pops up whenever the button mentioned above is hovered by the cursor

## Screenshots

Header shimmer effect:

![gifshimmer](https://i.imgur.com/WQRrhnp.gif)

Question-to-question autoscroll feature (enabled through toggle, peep the popup):

![scroll](https://i.imgur.com/kpDsPwS.gif)

Answers with GIFs that animate upon selection:

![gifdemo](https://s4.gifyu.com/images/ezgif-3-bc1a47d1e089.gif)
