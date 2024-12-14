# Cat-Image-Replacer ![Icon](icons/icon48.png)

The project is a google extension that replaces all the images you have on your screen at that moment with random cat images

### Requirements

- Chromium based browser
- Internet connection

### Try or install

You can find the Chrome extension [here](https://chromewebstore.google.com/detail/cat-image-replacer/ncjjbeiapjimloddfbmgcapgjbiopbgl?authuser=0&hl=en)

## Edit extension

```
Cat_Replacer
    ├───icons
    │     ├────icon16.png
    │     ├────icon48.png
    │     └────icon128.png
    ├───background.js
    ├───content.js
    └───manifest.json
```

The file that manages everything is `content.js`. What it does is:
- Every time a new page is loaded:
  - Call an API to choose a cat image/GIF
  - Find all the images loaded on the page
  - Replace all the found images with the one provided by the API

If you want to change the API to use, you need to change it in both `content.js` and `manifest.json` because the latter file lists the domains that the extension can access.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the Apache-2.0 license. See the `LICENSE` file for more details.