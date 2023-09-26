const preventTab = e => {
    if (e.keyCode === 9) {
      e.preventDefault();
    }
  }
export const bindPrevent = preventTab.bind()