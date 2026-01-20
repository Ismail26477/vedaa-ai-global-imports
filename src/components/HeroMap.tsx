import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMapbox } from '@/contexts/MapboxContext';
import { MapPin, X } from 'lucide-react';

const HeroMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const { accessToken, setAccessToken } = useMapbox();
  const [inputToken, setInputToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(false);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !accessToken) return;

    try {
      mapboxgl.accessToken = accessToken;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        projection: 'globe',
        zoom: 1.8,
        center: [78.9629, 20.5937], // India center
        pitch: 45,
        interactive: false,
      });

      map.current.on('style.load', () => {
        map.current?.setFog({
          color: 'rgb(220, 240, 250)',
          'high-color': 'rgb(180, 220, 240)',
          'horizon-blend': 0.3,
        });
      });

      // Add markers for key locations
      const locations = [
        { lng: 79.0882, lat: 21.1458, name: 'Nagpur, India' }, // Nagpur
        { lng: 116.4074, lat: 39.9042, name: 'Beijing, China' },
        { lng: 121.4737, lat: 31.2304, name: 'Shanghai, China' },
        { lng: 103.8198, lat: 1.3521, name: 'Singapore' },
        { lng: 100.5018, lat: 13.7563, name: 'Bangkok, Thailand' },
        { lng: 106.8456, lat: -6.2088, name: 'Jakarta, Indonesia' },
      ];

      map.current.on('load', () => {
        locations.forEach((loc) => {
          const el = document.createElement('div');
          el.className = 'map-marker';
          el.innerHTML = `<div class="w-3 h-3 rounded-full bg-cyan-medium animate-ping absolute"></div><div class="w-3 h-3 rounded-full bg-cyan-dark relative z-10"></div>`;
          
          new mapboxgl.Marker(el)
            .setLngLat([loc.lng, loc.lat])
            .addTo(map.current!);
        });
      });

      // Slow rotation animation
      const secondsPerRevolution = 180;
      let spinEnabled = true;

      function spinGlobe() {
        if (!map.current || !spinEnabled) return;
        const center = map.current.getCenter();
        center.lng -= 360 / secondsPerRevolution;
        map.current.easeTo({ center, duration: 1000, easing: (n) => n });
      }

      map.current.on('moveend', spinGlobe);
      spinGlobe();

      setMapError(false);
    } catch (error) {
      setMapError(true);
    }

    return () => {
      map.current?.remove();
    };
  }, [accessToken]);

  const handleTokenSubmit = () => {
    if (inputToken.trim()) {
      setAccessToken(inputToken.trim());
      setShowTokenInput(false);
    }
  };

  // Animated globe placeholder when no token
  if (!accessToken) {
    return (
      <div className="relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden">
        {/* Animated CSS Globe */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-light/30 via-blue-medium/20 to-purple-light/30">
          <div className="relative">
            {/* Globe */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan-light via-blue-medium/50 to-cyan-dark relative overflow-hidden animate-spin-slow shadow-glow">
              {/* Continent shapes */}
              <div className="absolute inset-4 rounded-full border-2 border-white/20" />
              <div className="absolute top-1/4 left-1/4 w-16 h-12 bg-white/30 rounded-full blur-sm" />
              <div className="absolute top-1/2 right-1/4 w-20 h-14 bg-white/25 rounded-full blur-sm" />
              <div className="absolute bottom-1/4 left-1/3 w-12 h-10 bg-white/20 rounded-full blur-sm" />
              {/* Grid lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-0.5 bg-white/10" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center rotate-45">
                <div className="w-full h-0.5 bg-white/10" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center rotate-90">
                <div className="w-full h-0.5 bg-white/10" />
              </div>
            </div>

            {/* Orbiting dots */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
              <div className="absolute -top-2 left-1/2 w-4 h-4 rounded-full bg-orange-light shadow-lg" />
            </div>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
              <div className="absolute top-1/2 -right-3 w-3 h-3 rounded-full bg-purple-light shadow-lg" />
            </div>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
              <div className="absolute -bottom-2 left-1/3 w-3 h-3 rounded-full bg-cyan-medium shadow-lg" />
            </div>

            {/* Connection lines animation */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
              <path
                d="M160,40 Q240,100 280,160 Q240,220 160,280 Q80,220 40,160 Q80,100 160,40"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="5,5"
                className="animate-dash"
              />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(190 70% 60%)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(270 60% 65%)" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Token input overlay */}
        {showTokenInput && (
          <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm flex items-center justify-center z-20">
            <div className="glass-card p-6 max-w-md mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-foreground">Enter Mapbox Token</h3>
                <button onClick={() => setShowTokenInput(false)} className="p-1 hover:bg-muted rounded">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Get your free public token from{' '}
                <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-cyan-dark underline">
                  mapbox.com
                </a>
              </p>
              <input
                type="text"
                value={inputToken}
                onChange={(e) => setInputToken(e.target.value)}
                placeholder="pk.eyJ1..."
                className="w-full px-4 py-2 rounded-lg border border-border bg-white/50 mb-4"
              />
              <button onClick={handleTokenSubmit} className="w-full btn-primary">
                Activate Map
              </button>
            </div>
          </div>
        )}

        {/* Enable map button */}
        <button
          onClick={() => setShowTokenInput(true)}
          className="absolute bottom-4 right-4 px-4 py-2 glass-card text-sm font-medium text-foreground hover:bg-cyan-light/30 transition-colors flex items-center gap-2 z-10"
        >
          <MapPin className="w-4 h-4" />
          Enable 3D Map
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden shadow-glow">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/30 via-transparent to-transparent rounded-3xl" />
      
      {/* Location badge */}
      <div className="absolute bottom-4 left-4 glass-card px-3 py-2 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-medium text-foreground">Operating in 50+ Countries</span>
      </div>
    </div>
  );
};

export default HeroMap;
