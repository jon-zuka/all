import {
  AppNav,
  theme,
  ThemeProvider,
} from "../../../../../dist/solidjs-ui";

import "../../../../../dist/solidjs-ui/assets/css/reset/tailwind-compact.css"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppNav>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </AppNav>
    </ThemeProvider>
  );
}

export default App;
