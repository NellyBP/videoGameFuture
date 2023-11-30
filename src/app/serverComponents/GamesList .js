import { Box } from '@mui/material';


import Image from "next/image";
import GameCard from '../clientComponents/GameCard';
import useGamesStore from '@/config/gameStore';

const fetchHomeGames = async () => {
  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&?page_size=10&?page=1&?ordering=rating`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching games', error);
  }
};

const fetchGamesByName = async (name) => {
  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&?page_size=10&?page=1&?ordering=rating&?search=${name}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching games', error);
  }
};



const GamesList = async ({ searchQuery }) => {
  const homeGames = await fetchHomeGames();
  const games = await fetchGamesByName(searchQuery);

  return (
    <Box style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      marginTop: 16,
      borderRadius: 8,
      padding: 32
    }}>
      <Image src="/dog.png" alt="dog" width={600} height={300}></Image>

      <Box sx={{
        mt: 2,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        flexWrap: "wrap",
        gap: 8
      }}>

        {!games.length && homeGames.map((game) => {
          return <GameCard game={game} key={game.id} />
        })}
        {games.length && games.map((game) => {
          return <GameCard game={game} key={game.id} />
        })}
      </Box>
    </Box>

  );
};

export default GamesList;

