"use client";

import Button from "@/components/Button";

export default function ShipCard({ ship, onShipViewDetails, onShipDelete }) {
  return (
    <div className="mb-2 p-4 flex justify-between items-center bg-gray-800 rounded-md shadow">
      <div className="md:flex md:gap-6">
        <h5 className="font-bold text-lg text-white">{ship.name}</h5>
        <p className="text-gray-300">IMO: {ship.imo}</p>
        <p className="text-gray-300">Call Sign: {ship.call_sign}</p>
        <p className="text-gray-300">Flag: {ship.flag}</p>
      </div>
      <div className="flex gap-2 items-center sm: flex-col">
        <Button onClick={onShipViewDetails}>{`Ver m\u00e1s`}</Button>
        <Button type={'danger'} onClick={onShipDelete}>Eliminar</Button>
      </div>
    </div>
  );
}
