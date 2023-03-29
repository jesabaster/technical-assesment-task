export const freezeScrolling = () => {
  document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
};

export const unfreezeScrolling = () => {
  document.getElementsByTagName('html')[0].style.overflowY = '';
};