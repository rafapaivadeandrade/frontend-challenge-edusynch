import React from 'react';
import { User } from '../types';

export const useUser = () => {
  const [user, setUser] = React.useState<User>();

  const fetchFakeData = async () => {
    try {
      const fakeDataUrl = `https://randomuser.me/api/?results=${1}&inc=name,picture&noinfo`;
      const response = await fetch(fakeDataUrl);
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  React.useEffect(() => {
    fetchFakeData();
  }, []);

  return user;
};
