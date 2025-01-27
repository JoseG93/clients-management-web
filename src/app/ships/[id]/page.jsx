"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { clients } from "../../../utils/data";

export default function ShipDetails() {
  const params = useParams();
  const [ship, setShip] = useState(null);

  useEffect(() => {
    const client = clients.find((client) => client.id == params.id);
    const ship = client.ships.find((ship) => ship.id == params.id);
    
    setShip(ship);
  }, [params.id]);

  return (
    <section className="p-2">
      {ship && (
        <div className="p-4 flex flex-col gap-2 rounded-md bg-gray-800">
          <h2 className="mb-2 font-bold text-2xl text-white">
            {`Embarcaci\u00f3n ${ship.name}`}
          </h2>
          <div className="md:grid md:grid-cols-2 md:gap-2">
            <div>
              <p className="mb-2 font-medium text-white">IMO - {ship.imo}</p>
              <p className="mb-2 font-medium text-white">
                Call Sign - {ship.callSign}
              </p>
              <p className="mb-2 font-medium text-white">Flag - {ship.flag}</p>
              <p className="mb-2 font-medium text-white">MMSI - 750416000</p>
              <p className="mb-2 font-medium text-white">
                Serv. Start Date: 22/11/2024
              </p>
              <p className="mb-2 font-medium text-white">
                Serv. Complete Date: 22/11/2024
              </p>
            </div>
            <div>
              <p className="mb-2 font-medium text-white">
                Owners - HANGZHOU ENERY CO.
              </p>
              <p className="mb-2 font-medium text-white">Agents</p>
              <p className="mb-2 font-medium text-white">Invoice Details</p>
              <p className="mb-2 font-medium text-white">Order No.</p>
              <p className="mb-2 font-medium text-white">
                Service Type: Demand
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4">
        <h3 className="mb-2 font-bold text-2xl text-white">
          Servicios realizados
        </h3>
        <div className="p-2 flex flex-col">
          {/* {client.ships.map((ship) => (
              <ShipCard key={ship.id} clientId={client.id} ship={ship} />
            ))} */}
          <div>
            <span className="font-medium text-xl">Reparacion</span>
          </div>
          <div>
            <span className="font-medium text-xl">Instalacion</span>
          </div>
        </div>
      </div>
    </section>
  );
}
