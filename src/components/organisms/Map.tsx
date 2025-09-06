import React from 'react';

interface MapProps {
  address: string;
}

const Map: React.FC<MapProps> = ({ address }) => {
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="overflow-hidden rounded-2xl shadow-soft border border-dark-200">
      <iframe
        title="BYU DIGITAL Location"
        src={mapSrc}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
