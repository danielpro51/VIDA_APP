/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
export const ViewColors = {
  backgroundMain: '#f2f2f2',
  primary: '#4B0082',
  secondary: 'rgb(194, 156, 235)',
  contrast: '#2C2C2C',
  softBackground: '#EEE6F3',
  shadow: 'rgba(75, 0, 130, 0.2)',
  modalBackground: 'rgba(78, 68, 91, 0.5)',
  modalBorder: '#5C5C5C',
  modalButton: 'rgb(236, 89, 190)',
};