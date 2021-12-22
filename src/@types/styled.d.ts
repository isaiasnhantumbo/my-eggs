import 'styled-components';
declare module 'styled-components' {
  type Theme = {
    colors: {
      background_primary: string;
      text_highlight: string;
      text_medium: string;
      white: string;
      background_card: string;
      background_card_item: string;
      background_tab: string;
      background_input: string;
    };
  };
  export interface DefaultTheme extends Theme {}
}
