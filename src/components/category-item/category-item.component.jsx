import { useNavigate } from 'react-router-dom';
import './category-item.styles.jsx';
import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { CategoryContainer, BackgroundImage, Body } from './category-item.styles';



const CategoryItem = ({ category }) => {
  const { categoriesMap } = useContext(CategoriesContext); 
  const { imageUrl, title } = category;
  const navigate = useNavigate();
  const navigateHandler = () => {
  categoriesMap && navigate( `shop/${Object.keys(categoriesMap).find((item)=>item===title)}`);
  }
  return (
    <CategoryContainer onClick={navigateHandler} >
      <BackgroundImage imgUrl = {imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  );
};

export default CategoryItem;
