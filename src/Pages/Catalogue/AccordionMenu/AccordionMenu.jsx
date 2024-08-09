import { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import "./AccordionMenu.css"
import axios from 'axios';
import SITE_CONFIG from '../../../controller';

const AccordionMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

   // Fetch categories
   const fetchCategories = async () => {
    try {
      const response = await axios.get(`${SITE_CONFIG.apiIP}/api/category`, {
        headers: {
          Authorization: `Bearer ${SITE_CONFIG.apiToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

   // Fetch subcategories for a given category
   const fetchSubcategories = async (category) => {
    try {
      const response = await axios.get(`${SITE_CONFIG.apiIP}/api/subcategory?category=${category}`, {
        headers: {
          Authorization: `Bearer ${SITE_CONFIG.apiToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };

  // Build menuItems from categories and subcategories
  const buildMenuItems = async () => {
    try {
      const categories = await fetchCategories();
      if (!categories) return;
      const activeCategories = categories.filter(category => category.status === 'active');

      const items = await Promise.all(activeCategories.map(async (category) => {
        const subcategories = await fetchSubcategories(category.name);
        return {
          category: category.name,
          subcategories: subcategories?.filter(sub => sub.status === 'active').map(sub => sub.name) || [],
        };
      }));

      setMenuItems(items);
    } catch (err) {
      console.log(err)
    } 
  };

  useEffect(() => {
    buildMenuItems();
  }, []);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // const menuItems = [
  //   { category: 'CHICKEN', subcategories: ['ALL CHICKEN', 'CHICKEN BONELESS', 'MARINATED CHICKEN'] },
  //   { category: 'GOAT', subcategories: ['GOAT CHOPS','GOAT WITH BONES','GOAT BONELESS','GOAT CUTS'] },
  //   { category: 'LAMB', subcategories: [] },
  //   { category: 'FISH', subcategories: [] },
  //   { category: 'PRAWNS', subcategories: [] },
  //   { category: 'SMALL GOODS', subcategories: [] },
  //   { category: 'KEBABS', subcategories: [] },
  //   { category: 'SAUSAGES', subcategories: [] },
  //   { category: 'MINCE', subcategories: [] },
  //   { category: 'STEAKS', subcategories: [] },
  //   { category: 'FROZEN ITEMS', subcategories: [] },
  //   { category: 'MARINATION', subcategories: [] },
  //   { category: 'pp', subcategories: [] },
  //   { category: 'ss', subcategories: [] },
  //   { category: 'qwerty', subcategories: [] },

  // ];

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
