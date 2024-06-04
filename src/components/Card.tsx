import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface CardProps {
  image: string;
  title: string;
  description?: string; 
}

const CustomCard: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <Card sx={{ maxWidth: 450, padding: '10px' }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title} 
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {description && ( 
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
