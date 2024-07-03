export const aboutPage = () => {
  const aboutSection = document.createElement('section')
  aboutSection.classList.add('about-section', 'grid')

  const aboutPara = document.createElement('p')
  aboutPara.textContent = `Welcome to SiChuan Hot Pot, where tradition meets taste in a bubbling
          pot of culinary excellence! At our restaurant, we celebrate the rich
          heritage of Asian cuisine by offering an authentic and immersive hot
          pot experience. Each meal is a communal journey, designed to bring
          people together around a steaming pot of fresh ingredients and
          flavorful broths. Our commitment to quality and hospitality ensures
          that every visit is a delightful adventure, with a diverse menu
          catering to both classic flavors and innovative tastes. Join us at
          SiChuan Hot Pot, and discover the joy of cooking and sharing delicious
          moments with loved ones.`

  aboutSection.appendChild(aboutPara)

  return aboutSection
}
