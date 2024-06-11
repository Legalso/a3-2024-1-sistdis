import apiClient from './apiClient';

export const createGame = async (theme) => {
  try {
    const response = await apiClient.post('/Game/Create', { theme }, {withCredentials: true});
    return response.data;
  } catch (error) {
    console.error('Error creating game:', error);
    throw error;
  }
};

export const makeGuess = async (gameId, letter) => {
    try {
      const response = await apiClient.post('/Game/MakeGuess', { gameId, letter }, {withCredentials : true});
      return response.data;
    } catch (error) {
      console.error('Error making guess:', error);
      throw error;
    }
  };