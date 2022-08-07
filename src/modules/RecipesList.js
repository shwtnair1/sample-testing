import { Row, Col } from "../components/Grid";
import Box from "../components/Box";
import data from "../data/boxitems";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data.recipes);
  }, []);

  return (
    <>
      <Row>
        <Col sm={6}>
          <h3 data-testid="headline">{data.headline}</h3>
        </Col>
      </Row>
      <Row>
        {recipes.map((recipe) => (
          <Col sm={12} md={6} xl={4} key={recipe.id}>
            <Box mb="md">
              <RecipeCard {...recipe} className="recipe-card" />
            </Box>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default RecipesList;
