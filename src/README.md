## Pandora Streaming Playlist and Google Playlists Merge App

🎧 Google and Pandora Streaming Playlist Favorited ❤️ and Thumbed 👍 Extract and Combine ➡️ A now React JS ⚛️ project that was born out of a need to extract my own liked and favorited tracks directly from Pandora's APIs

-   Note any inconsistencies or what seemingly could incomplete code practices followed, or any at least that I myself am aware of are hopefully addressed in my "Currently / Next" "Todo" list.

**A now ReactJS project that was born out of a significant need to extract my own liked and "thumbed" tracks out of Pandora.**

-   **Built with ReactJS, Redux, Redux Thunk, Redux Sagas, Material UI, Styled Components, ReactDND**
-   **VSCode Implements**: ESLint, Eslint Config AirBnB, Eslint Config Prettier, MacOS Env variables, VSCode Chrome Debugging CRA configurations
-   **Netlify Demo Site**: [https://streaming-playlist.netlify.com/](https://streaming-playlist.netlify.com/)
-   **Middleware:** saga-middelware, redux-thunk, redux-localstorage-simple, redux-devtools-middeware, redux-immutable-state-invariant, router-middleware, redux-devtools-middeware, devtools-extension
-   **Workbench:** StyleGuideDist

Prevously:

-   [x] Implementing and testing Drag and Drop solutions and integrations with Redux

Currently:

-   [x] Implement redux-immutable-state-invariant - Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
-   [x] UI Reducer
-   [x] Blogs Reducer
-   [ ] Refactor existing stateful class container code to functional stateless components

Next:

-   [ ] Add Dashboard Stats to app
-   [ ] Implement TravisCI
-   [ ] TravisCI Buildpack
-   [ ] Deploy to Heroku

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)
](https://app.netlify.com/start/deploy?repository=https://github.com/evanmeeks/streaming-playlist)

**The problem:**

There was no way to get any information about what you previously liked via mobile, and via their website requires paging through endless infinite-scroll renderings of 10 item lists of favorited songs there.
Initially frustrated with this tedium, I checked out GitHub to see if anyone had produced a similar solution.
One particular of interest I found:

![s](https://avatars0.githubusercontent.com/u/12833803?s=40&v=4)  
[poanchen](https://github.com/poanchen)/[google-play-music-playlist-exporter](https://github.com/poanchen/google-play-music-playlist-exporter)

His solution worked. It was impressive although difficult to follow. The problem was instead of trying to find the originating data API, he was actually scraping the Favorites list infinite scroll off the web page's app. Other than that though, it was an impressive orchestration of asynchronous programming and Promise chaining Jujitsu 👍

## Overview

### Create React App configuration

Create React App generates a mostly unconfigured app folder. Some of the settings and configurations are hidden around in the CRA docs but these particular settings are quite useful.

## Live Editing + Debugging with VSCode

I've never gotten this to work before. I debug directly in chrome, but this was good to get going. Maybe I will use it in the future.

[Live edit and debug your React apps directly from VS Code — without leaving the editor 🔥 🎉🎈](https://medium.com/@auchenberg/live-edit-and-debug-your-react-apps-directly-from-vs-code-without-leaving-the-editor-3da489ed905f)

![lived](https://github.com/evanmeeks/streaming-playlist/blob/master/src/assets/liveedit.gif?raw=true)

## Taking Advantage of React Error Overlay

```.sh
REACT_EDITOR=code ✅ Used

Add code below to ~/.zshrc or .bashrc file

export PATH=\$PATH:/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin
export REACT_EDITOR=code

```

This allows React Error Overlay clickable source. So clicking the the line # in the browser opens directly in the the editor in VSCode.

![React Error Overlay](https://raw.githubusercontent.com/evanmeeks/streaming-playlist/master/src/assets/react-error-overlay.png)

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTExMDg4NTgzOTksMTMzNDU4Mjg1M119
-->
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2NjE0MDY4MTgsLTI0MjUxNDgxOV19
-->
