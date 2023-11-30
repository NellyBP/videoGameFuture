import { Box, Container, Typography } from '@mui/material';
const fetchGameDetails = async (id) => {
  try {
    const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${process.env.NEXT_PUBLIC_API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching game details:', error);
  }
};


const GameDetails = async ({ gameId }) => {
  const id = gameId;

  const game = await fetchGameDetails(id);

  if (!game) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <Typography variant="h4">No game data</Typography>
      </Box>
    );
  }

  return (
    <Container style={{
      backgroundColor: "#A2DF00",
      marginTop: 16,
      borderRadius: 8,
      padding: 32
    }}>
      <Typography variant="h4" gutterBottom>
        {game.name}
      </Typography>

      <img src={game.background_image} alt={game.name} style={{ maxWidth: '100%', height: 'auto' }} />
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" paragraph>
          {game.description_raw}
        </Typography>
        <Typography variant="body2" style={{ fontWeight: "bold", fontSize: 16 }}>
          Released: {game.released}
        </Typography>
        <Typography variant="body2" style={{ fontWeight: "bold", fontSize: 16 }}>
          Rating: {game.rating} / 5
        </Typography>
      </Box>
    </Container>
  );
};

export default GameDetails;

