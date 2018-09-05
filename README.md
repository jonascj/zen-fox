# Fork notes
This fork allows toggling between the light and dark color scheme,
on *nix systems,
with the command `pkill -USR1 -f "python.+zen_fox_toggle_light_dark.py"`.

At this point it is a very crude (proof of concept) implementation, 
there is room for improvements.

What use is this? Use it to toggle the color scheme from an external
script.

***Setup***
For the external application toggling to work
a few things must be configured:

1. `zen_fox_toggle_light_dark.json` must be placed in 
`~/.mozilla/natie-messaging-hosts/`
(a symlink will do nicely).

2. `zen_fox_toggle_light_dark.py` must be placed somewhere
sensible and have the execute permission set (`chmod +x`).

3. In file `zen_fox_toggle_light_dark.json` 
this line `"path": "/absolute/path/to/zen_fox_toggle_light_dark.py"`
must be changed to reflect the path on your system.

***Trying it out***
So far I've only tried my modified version of the add-on
by opening `about:debugging` in Firefox,
choosing [Load Temporary Add-on],
and selecting/opening `manifest.json`.

With the add-on loaded temporarily, open a terminal 
and issue the command `pkill -USR1 -f "python.+zen_fox_toggle_light_dark.py"`.

This will send a USR1 signal to the Python script,
which it will detect and in turn, it willsend a message
to the Zen Fox extension, telling it to toggle the colors.


# Zen Fox

As we spend more and more of our lives computing, and more and more of our computing is done on the browser, our browser being the awesome Firefox — it must be themed appropriately for its heavy duty.

Zen Fox uses the stunning Solarized Theme, ported to Firefox using it's latest APIs. That means browser menus like the hamburger and overflow are themed to suit the rest of your browser.

**Methods**:

Choose from 3 different methods to switch between Dark & Light Themes:

* Manual — toolbar button to switch themes upon press
* Time — change themes automatically at times of your choice
* Weather — update theme based on current cloudiness at your locale


Also, you can now choose the accent color, that is used for your tab line, tab loading, and icon attention colors.

**Permissions**:

* Alarm — to set internal timers that check for weather/time updates
* Storage — to store your settings 
* Theme — to… theme
* nativeMessaging - to allow external application to toggle theme colors

## Solarized References
* [Solarized theme website](http://ethanschoonover.com/solarized)

* [Solarized theme repo](https://github.com/altercation/ethanschoonover.com/tree/master/projects/solarized)

## Installation
From [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/zen-fox/). Alternatively, see dev instructions:

## Dev
1. Donwload repo as zip, 
2. Open firefox, and go to `about:debugging` in a new tab, 
3. Select any file of the add-on (eg. `manifest.json`) and open it from the file picker
4. ???
5. Profit

### Extra Talk
No unnecessary permissions are required by Zen Fox, and all the code is open source.

Recommended add-ons to go with it (but require some configuration from you):
- Vivaldi fox: set theme based on current site
- Stylus: modify site style to be how you like

*This extension can basically be forked and have the theme definitons replaced
and serve as kind of the template for dynamic Firefox themes of any color
scheme.*
