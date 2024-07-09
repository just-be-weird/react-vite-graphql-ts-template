## Technical Skills Assessment

### Algorithms (Difficulty—simple | 15 minutes)


```tsx
/**
 Problem:

 Implement a JavaScript function that takes an array of product objects and
 a price filter value as input. The function should return a new array containing
 only the products with a price lower than or equal to the filter value.

 Optimize the function for time and space complexity
 */
const results = filterProductsByPrice(products, maxPrice);
```

### Technical Discussion (30-35 minutes)

```textmate
You are building a single-page application (SPA) for an e-commerce platform.
The application will have product listings, detailed product pages with dynamic content,
a shopping cart, and a checkout process.

The application needs to integrate with a Graphql based API to fetch the data and handle user authentication.
```

Propose an architecture for the application considering the following scenario
1. [ ] Component Structure
2. [ ] Data Flow
3. [ ] Communication with Backend Services
4. [ ] State Management

### Review

[codesandbox](https://codesandbox.io/p/github/just-be-weird/react-vite-graphql-ts-template/int/tl?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clyedwaqk00063p6jpvnuxo04%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clyedwaqk00023p6jlm70mj7j%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clyedwaqk00043p6j51m2832p%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clyedwaqk00053p6jss73cmod%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clyedwaqk00023p6jlm70mj7j%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyedwaqk00013p6jff04ondp%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522clyedwaqk00023p6jlm70mj7j%2522%252C%2522activeTabId%2522%253A%2522clyedwaqk00013p6jff04ondp%2522%257D%252C%2522clyedwaqk00053p6jss73cmod%2522%253A%257B%2522id%2522%253A%2522clyedwaqk00053p6jss73cmod%2522%252C%2522activeTabId%2522%253A%2522clyedwbpb003v3p6ju5vppj41%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522SETUP_TASKS%2522%252C%2522id%2522%253A%2522clyedwbpb003v3p6ju5vppj41%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clyedwaqk00043p6j51m2832p%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyedwaqk00033p6jvg94kt9d%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clyedwb5x002tdlha53m28xit%2522%257D%255D%252C%2522id%2522%253A%2522clyedwaqk00043p6j51m2832p%2522%252C%2522activeTabId%2522%253A%2522clyedwaqk00033p6jvg94kt9d%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)
