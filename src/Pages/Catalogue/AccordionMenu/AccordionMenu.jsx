import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import "./AccordionMenu.css"

const AccordionMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const menuItems = [
    { category: 'CHICKEN', subcategories: ['ALL CHICKEN', 'CHICKEN BONELESS', 'MARINATED CHICKEN'] },
    { category: 'GOAT', subcategories: ['GOAT CHOPS','GOAT WITH BONES','GOAT BONELESS','GOAT CUTS'] },
    { category: 'LAMB', subcategories: [] },
    { category: 'FISH', subcategories: [] },
    { category: 'PRAWNS', subcategories: [] },
    { category: 'SMALL GOODS', subcategories: [] },
    { category: 'KEBABS', subcategories: [] },
    { category: 'SAUSAGES', subcategories: [] },
    { category: 'MINCE', subcategories: [] },
    { category: 'STEAKS', subcategories: [] },
    { category: 'FROZEN ITEMS', subcategories: [] },
    { category: 'MARINATION', subcategories: [] },
    { category: 'pp', subcategories: [] },
    { category: 'ss', subcategories: [] },
    { category: 'qwerty', subcategories: [] },

  ];

  return (
    <div className="accordion-menu">
      <h2>Categories</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <div onClick={() => toggleItem(index)} className="menu-item">
              {item.category}
              {item.subcategories.length > 0 && (
                activeIndex === index ? <FaChevronDown /> : <FaChevronRight />
              )}
            </div>
            {activeIndex === index && item.subcategories.length > 0 && (
              <ul className="submenu">
                {item.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex}>{subcategory}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccordionMenu;
