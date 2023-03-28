export const freezeScrolling = () => {
  document.body.style.overflowY = 'hidden';
}

export const unfreezeScrolling = () => {
  document.body.style.overflowY = '';
}