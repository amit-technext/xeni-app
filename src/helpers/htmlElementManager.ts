export const rootStyle = document.querySelector<HTMLElement>(':root');
export const setStyleProperty = (propertyName: string, propertyValue: string): void => {
  if (rootStyle) {
    rootStyle.style.setProperty(propertyName, propertyValue);
  }
};
export const getStyleProperty = (propertyName: string): string => {
  if (rootStyle) {
    return rootStyle.style.getPropertyValue(propertyName);
  } return 'nothing found or check your type';
};
