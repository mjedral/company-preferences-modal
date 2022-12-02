# Company preferences modal

In progress!

Repository contains simple modal to test the functionality of selecting company preferences.

# Installation

After cloning the repo please use command:

```bash
npm install
```

# Running application

After installing all the needed packages you can start app in dev environment by:

```bash
npm run start
```

To build app for production use:

```bash
npm run build-app
```


# Things to do

A feature with preference selection in modal mainly remained to be finished. I would do it with an array of objects(and keep it in state) and to display all of it I would use map function. To always show same values for user I would use localStorage (of course in case it's not sensitive data).


# Things to fix/modify

* I would move Modal components from App to external folder.
* ModalContext could be more reusable and flexible for more modal windows (it can be done with context + reducer + more typigns)
* Empty files should be removed
* theme.ts could has more hardcoded values
* Types for component are not finished everywhere
* Types should be moved from component files to external file for types
