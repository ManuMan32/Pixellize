const globalData = {
  languages: [
    ["English", "en"],
    ["Español", "es"]
  ],
  fade: (element: string, action: 'appear' | 'disappear') => {
    // Function that creates the fadeIn/fadeOut effect
    const actionElement: HTMLElement | null = document.querySelector('.' + element);
    actionElement!.style.animation = "1s ease forwards " + action;
    setTimeout(() => actionElement!.style.animation = "none", 1000);
  }
}
export default globalData;