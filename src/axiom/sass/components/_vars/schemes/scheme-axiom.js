import {
  colorBlue,
  colorGrey,
  colorWhite,
  colorGreen,
  colorRed,
  dropShadowLight,
} from '../../../core/vars';

const schemePrimaryColor = colorBlue;
const schemeAccentColor = colorBlue;

export default {
  class: 'scheme-axiom',
  primary: schemePrimaryColor,
  accent: schemeAccentColor,

  textColorLight: colorGrey[50],
  textColorDark: colorGrey[900],
  backgroundColor: colorGrey[50],

  // Layouts
  layoutEstablished: {
    headerBackgroundColor: colorWhite['_'],
    sidebarBackgroundColor: colorWhite['_'],
    sidebarHeaderBackgroundColor: colorWhite['_'],
    sidebarFooterBackgroundColor: colorWhite['_'],
    sidebarBorderColor: colorGrey[200],
    logoBackgroundColor: colorWhite['_'],
    footerBackgroundColor: colorGrey[200],

    navFirstItemHoverBackgroundColor: colorGrey[50],
    navFirstItemActiveColor: schemeAccentColor['A400'],
    navFirstItemActiveBackgroundColor: colorGrey[50],
    navSecondItemHoverBackgroundColor: colorGrey[100],
    navSecondItemActiveColor: schemeAccentColor['A400'],
    navSecondItemActiveBackgroundColor: colorGrey[100],
  },

  layoutEmblem: {
    headerBackgroundColor: colorGrey[200],
    logoBackgroundColor: colorGrey[200],
    footerBackgroundColor: colorGrey[800],
  },

  // Navigation
  navFirstItemHoverBackgroundColor: colorGrey[50],
  navFirstItemActiveColor: schemeAccentColor['A400'],
  navFirstItemActiveBackgroundColor: colorGrey[50],
  navSecondItemHoverBackgroundColor: colorGrey[100],
  navSecondItemActiveColor: schemeAccentColor['A400'],
  navSecondItemActiveBackgroundColor: colorGrey[100],

  // Card
  cardColor: colorWhite['_'],
  cardBorder: dropShadowLight,

  // Table
  tableBorderColor: colorGrey[200],
  tableRowOddColor: colorGrey[50],
  tableRowEvenColor: colorWhite['_'],

  // Forms and inputs
  inputBackgroundColor: colorWhite['_'],
  inputBorderColor: colorGrey[300],
  inputPlaceholderColor: colorGrey[400],
  inputFocusColor: schemeAccentColor['A100'],
  inputDisabledColor: colorGrey[100],
  inputValidColor: colorGreen['A400'],
  inputInvalidColor: colorRed['A400'],
  inputCheckedColor: schemeAccentColor['A400'],

  // Tabs
  tabsBackgroundColor: 'transparent',
  tabsHoverBackgroundColor: colorGrey[50],
  tabsActiveBorderColor: schemeAccentColor['A400'],
  tabsActiveBackgroundColor: 'transparent',
};