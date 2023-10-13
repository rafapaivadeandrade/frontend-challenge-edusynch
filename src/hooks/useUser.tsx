import { useEffect, useState } from 'react';

interface User {
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export const useUser = () => {
  const [user, setUser] = useState<User>();

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

  useEffect(() => {
    fetchFakeData();
  }, []);

  return user;
};
