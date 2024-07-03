export const menu = () => {
  const menuSection = document.createElement('section')
  menuSection.classList.add('menu-section')

  const menuHeader = document.createElement('h1')
  menuHeader.textContent = 'Our menu'

  const flavorsList = document.createElement('ul')
  flavorsList.classList.add('soup-flavors', 'grid')
  flavorsList.innerHTML = `<h2>soup flavors</h2>
          <li>mala soup<span> (麻辣锅底)</span></li>
          <li>tomato soup <span>(番茄锅底)</span></li>
          <li>spicy sour soup <span>(酸辣锅底)</span></li>
          <li>vegetables soup <span>(三鲜锅底)</span></li>`

  const addOnsList = document.createElement('ul')
  addOnsList.classList.add('add-ons', 'grid')
  addOnsList.innerHTML = `<h2>Meets and vegetables</h2>
          <li>Vermicelli <span>(粉丝)</span></li>
          <li>Black fungus <span>(木耳)</span></li>
          <li>Mushroom <span>(香菇)</span></li>
          <li>Oyster mushroom <span>(平菇)</span></li>
          <li>Coriander <span>(香菜)</span></li>
          <li>po cai <span>(蔢菜)</span></li>
          <li>White cabbage <span>(娃娃菜)</span></li>
          <li>Corn <span>(玉米)</span></li>
          <li>Potato <span>(土豆)</span></li>
          <li>Tomato <span>(西红柿)</span></li>
          <li>Taro <span>(香芋)</span></li>
          <li>White radish <span>(白萝卜)</span></li>
          <li>Frozen tofu <span>(冻豆腐)</span></li>
          <li>Soft tofu <span>(嫩豆腐)</span></li>
          <li>Sea weed <span>(海带)</span></li>
          <li>US Beef <span>(美国肥牛)</span></li>
          <li>Beef roll <span>(牛肉卷)</span></li>
          <li>Fish roll <span>(鱼片)</span></li>
          <li>Prawn <span>(海虾)</span></li>
          <li>Tofu skin <span>(腐竹皮)</span></li>
          <li>Chicken sausage<span>(鸡肉肠)</span></li>
          <li>Beef sausage<span>(牛肉肠)</span></li>
          <li>Beef ball<span>(牛肉丸)</span></li>
          <li>Fish ball <span>(鱼丸)</span></li>
          <li>Crab stick<span>(蟹柳)</span></li>`

  menuSection.appendChild(menuHeader)
  menuSection.appendChild(flavorsList)
  menuSection.appendChild(addOnsList)

  return menuSection
}
