export const pageLoad = function () {
  const homeSection = document.createElement('section')
  const headerMainText = document.createElement('h1')
  headerMainText.classList.add('header-text')
  headerMainText.textContent = '四川火锅店'
  const headerPrimeText = document.createElement('p')
  headerPrimeText.classList.add('header-p')
  headerPrimeText.textContent = 'sichuan hot pot restaurant'

  homeSection.appendChild(headerMainText)
  homeSection.appendChild(headerPrimeText)

  return homeSection
}
