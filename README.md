#### Updated to Version 2
Total rewrite of the indesign script.

#### Changelog
Added more properties to base font. 
```
Hyphenation defaults off.
KerningMethod default set to Optical.
Ligatures default off.
Added a base Space after of 1 em
Base font set to Arial to help avoid font issues.
Font sizes are based off BootStrap css sizes.
Added a folder for Character Styles
Added No Break to Character Styles
Added a folder to Paragraph Styles to store the Masters
Renamed folders to Parachute and Charachute
Added a auto numbering system to new folders. No more naming errors.
Renamed Masters from • H Master to $ h-master
Added in h4, h5, h6
```

```
#### Note
The Indesign file is still the old version. I'll bring this inline as soon as possible.
```

# Paracute
Parachute - Paragraph style standard for Indesign
#### Description
Parachute is a paragraph style standard for indesign CC 2015+. It was created to help improve how designers use paragraph styles in indesign.
#### Mission
Parachute aims to create a standard in which any designer can edit and format a document and then be able to give it do someone else. Paragraph styles in indesign is a tool meant to make everyones life easier. The more I've worked in the graphic design industry, the more I relized that because there isn't a standard in which to create styles, most designers become confused by them and stear away from them, or worse not use them correctly. By creating a style standard any designer can open up a indesign document, look at the paragraph style panel and know excately what's happening in a document.

#### Paragraph styles structure

```
Parachute (folder or Parachute_#)
- Para masters
- - $ master
- - $ h-master
- - $ p-master
- h1
- h2
- h3
- h4
- h5
- h6
- p
- p2
```

#### Character styles structure
```
Charachute (Folder, will only create the one, not possible to have duplicates)
- Bold
- Italic
- Superscript
- No Break
```

#### How to use the indd file
- Download the latest version
- Open a new or exsiting document
  - Goto your paragraph styles panel and click on the menu
    - Goto load paragraph styles, select and load Parachute
- Rename the folder to the font you want to use
- Double click • Master font (replace font)
  - Click on Basic Character Formats on the menu on the side
    - Change the font family

#### How to use the JSX file
- Download the latest version
- Place the JSX file into your Indesign User script folder
- Open a new or exsiting document
  - Goto your scripts panel, select the Parachute script
    - Goto load paragraph styles, select and load Parachute
- Rename the folder to the font you want to use
- Double click $ master paragraph style (replace font)
  - Click on Basic Character Formats on the menu on the side
    - Change the font family

#### Work in Progress
- [x] Build a Indesign Script that creates all the base paragraph and character styles
- [ ] Build a UI in Indesign which gives users the ability to choose what they add and what font. This will live along side the original script.
- [ ] Build a Indesign Script that exports all the base paragraph styles to an CSS file

#### Things to do
- [ ] Further expand read me
- [ ] Update the Indesign document with expamles
- [ ] Update the Indesign document with a how to use
- [x] Update the default paragraph style with a safe font
