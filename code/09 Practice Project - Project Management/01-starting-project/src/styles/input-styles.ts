export const inputStyles = `
    text-sm
    text-stone-600
    font-sans
    w-full
    border-b-2
    bg-stone-200
    border-gray-200
    hover:border-stone-800
    p-1
`;

export enum ButtonVariant {
  GRAY = 'gray',
  BLACK = 'black',
  TRANSPARENT_BLACK = 'transparent-black',
  TRANSPARENT_WHITE = 'transparent-white',
}

export const buttonStyles: Record<ButtonVariant, string> = {
  [ButtonVariant.GRAY]: 'bg-stone-700 text-stone-400 hover:text-stone-300',
  [ButtonVariant.BLACK]: 'bg-stone-900 text-white',
  [ButtonVariant.TRANSPARENT_BLACK]: 'text-black',
  [ButtonVariant.TRANSPARENT_WHITE]: 'text-gray-300',
};
