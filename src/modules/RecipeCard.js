import Footer from "./Footer";
import Box from "../components/Box";
const RecipeCard = ({ image, name, headline }) => {
  return (
    <Box borderRadius="md" boxShadow="lg">
      <Box height="0">
        <img data-testid="image-section" src={image} alt={name} />
      </Box>
      <Box p="xs" height="120px">
        <h3 data-testid="heading">{name}</h3>
        <p data-testid="subheading">{headline}</p>
      </Box>

      <Box data-testid="footer" flex="50%">
        <Footer />
      </Box>
    </Box>
  );
};

export default RecipeCard;
