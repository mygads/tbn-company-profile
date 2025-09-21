export const scrollToSection = (sectionId: string) => {
  if (typeof window === 'undefined') return;
  
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 80; // Approximate navbar height
    const targetPosition = element.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

export const scrollToTop = () => {
  if (typeof window === 'undefined') return;
  
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};