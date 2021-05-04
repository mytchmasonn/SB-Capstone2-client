# [HTML8PDF]

![version](https://img.shields.io/badge/version-0.1.0-blue.svg)

**[HTML8PDF]** is a resource for converting HTML files, or webpages via URL, to PDFs!
I made this for educational purposes, as a small, but useful app, to use as a first full stack project when helping friends!

**[HTML8PDF]** uses [Material-UI](https://material-ui.com/) and was created starting with [create-react-app](https://github.com/facebook/create-react-app), as primary resources for creating and styling the app.

## Table of Contents

- [File Structure](#file-structure)
- [Browser Support](#browser-support)

## File Structure

Within the download you'll find the following directories and files:

```
HTML8PDF-Client
.
├── public
│   ├── apple-icon.png
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── assets
│   │   ├── img
│   │   │   └── backgrounds
│   │   │   │   ├── bg1.webp
│   │   │   │   ├── bg2.webp
│   │   │   │   ├── bg4.webp
│   │   │   │   └── bg5.webp
│   │   ├── jss
│   │   │   ├── html8pdf
│   │   │   │   ├── components
│   │   │   │   ├── views
│   │   │   │   └── appStyle.ts
│   │   │   └── html8pdf.ts
│   ├── components
│   │   ├── Badge
│   │   │   └── Badge.tsx
│   │   ├── Card
│   │   │   ├── Card.tsx
│   │   │   ├── CardBody.tsx
│   │   │   ├── CardFooter.tsx
│   │   │   └── CardHeader.tsx
│   │   ├── Clearfix
│   │   │   └── Clearfix.tsx
│   │   ├── CustomButtons
│   │   │   └── Button.tsx
│   │   ├── CustomDropdown
│   │   │   └── CustomDropdown.tsx
│   │   ├── CustomFileInput
│   │   │   └── CustomFileInput.tsx
│   │   ├── CustomInput
│   │   │   └── CustomInput.tsx
│   │   ├── CustomTabs
│   │   │   └── CustomTabs.tsx
│   │   ├── Footer
│   │   │   └── Footer.tsx
│   │   ├── Grid
│   │   │   ├── GridContainer.tsx
│   │   │   └── GridItem.tsx
│   │   ├── Heading
│   │   │   ├── Header.tsx
│   │   │   └── HeaderLinks.tsx
│   │   ├── InfoArea
│   │   │   └── InfoArea.tsx
│   │   ├── Parallax
│   │   │   └── Parallax.tsx
│   ├── context
│   │   ├── createDataContext.tsx
│   │   └── ThemeContext.ts
│   ├── hooks
│   │   ├── useAuthValidation.ts
│   │   ├── useCreateFormValidation.ts
│   │   ├── useCurrentUser.ts
│   │   ├── useFormatParser.ts
│   │   ├── useRafState.ts
│   │   └── useWindowSize.ts
│   ├── layouts
│   │   └── AuthPages.tsx
│   ├── views
│   │    ├── Account
│   │    │   ├── Account.tsx
│   │    │   └── Sections
│   │    │      ├── FileList.tsx
│   │    │      └── FileListSkeleton.tsx
│   │    ├── Create
│   │    │   ├── Create.tsx
│   │    │   └── Sections
│   │    │      ├── AdvancedOptions.tsx
│   │    │      ├── ConversionLoading.tsx
│   │    │      ├── FileToPdfSection.tsx
│   │    │      ├── ShowSuccess.tsx
│   │    │      └── UrlToPdfSection.tsx
│   │    ├── ErrorPage
│   │    │   └── ErrorPage.tsx
│   │    ├── Landing
│   │    │   ├── Landing.tsx
│   │    │   └── Sections
│   │    │      ├── SectionMain.tsx
│   │    │      └── SectionWork.tsx
│   │    ├── Login
│   │    │   └── Login.tsx
│   │    ├── Policies
│   │    │   └── TOS.tsx
│   │    ├── Signup
│   │    │   ├── Signup.tsx
│   │    │   └── Sections
│   │    │      └── TosDialog.tsx
│   │    └── VerifyPages
│   │        └── VerifyEmail.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── react-app-end.d.ts
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## Browser Support

Hopefully shoudl support the last two versions of the following browsers:
Chrome • Firefox • Edge • Safari • Opera
