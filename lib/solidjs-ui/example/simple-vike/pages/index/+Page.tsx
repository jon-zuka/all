import {
  ThemeProvider,
  theme as defaultTheme,
  Scaffold,
} from "@repo/solidjs-ui";

export default function Page() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Scaffold>Hello</Scaffold>
    </ThemeProvider>
  );
}
