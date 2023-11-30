"use client"

import React, { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, styled } from '@mui/material';
import Link from 'next/link';

const StyledCard = styled(Card)(({ theme, hovered }) => ({
  width: 300,
  transition: "transform 0.15s ease-in-out",
  display: "flex",
  flexDirection: "column",
  ...(hovered && {
    transform: "scale(1.05)",
    boxShadow: "0px 10px 20px rgba(162, 223, 0, 0.2)",
  }),
  border: "4px ridge rgba(162, 223, 0, 0.7)"
}));

const GameCard = ({ game }) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <StyledCard
      hovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/games/${game.id}`}>
        <CardMedia
          height={140}
          image={game.background_image}
          title={game.name}
          component={"img"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {game.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {game.short_description}
          </Typography>
        </CardContent>
      </Link>
    </StyledCard>
  );
};

export default GameCard;
