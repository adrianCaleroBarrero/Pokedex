import React from 'react';
import './FavoritesPage.scss';
import Favorite from '../../components/Favorite';
import { Header } from '../../components/Header';

export default function FavoritesPage() {
  return (
    <>
      <Header />
      <Favorite />
    </>
  );
}
