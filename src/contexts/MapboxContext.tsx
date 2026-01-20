import { createContext, useContext, useState, ReactNode } from 'react';

interface MapboxContextType {
  accessToken: string;
  setAccessToken: (token: string) => void;
}

const MapboxContext = createContext<MapboxContextType | undefined>(undefined);

export const MapboxProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState('');

  return (
    <MapboxContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </MapboxContext.Provider>
  );
};

export const useMapbox = () => {
  const context = useContext(MapboxContext);
  if (!context) {
    throw new Error('useMapbox must be used within a MapboxProvider');
  }
  return context;
};
