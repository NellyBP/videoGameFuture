import React, { useEffect, useState } from 'react'
import GamesList from '../serverComponents/GamesList ';
import SearchBar from '../clientComponents/SearchBar';
import { Box } from '@mui/material';



const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Box sx={{ marginTop: 24 }}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <GamesList searchQuery={searchQuery} />
    </Box>
  )
}

export default Page;
