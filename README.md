# Kit Ilias Session Refresher
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

This chrome extension prevents the KIT Ilias from logging you out automatically due to inactivity.

# Usage
* Click on your profile pic in the upper right corner and go into settings
* Tick the box for Session-Reminders
* Save the settings
* Install the extension

# How it works
The extension injects a little javascript snippet which replaces the default `window.confirm` function with a custom
one which autoconfirms if the message begins with the text ilias shows in its session reminders It calls the default function
otherwise so you don't auto accept other dialogs by ilias (though none are known to me at least)
