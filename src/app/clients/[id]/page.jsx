"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { clients } from "@/utils/data";

import ShipCard from "@/components/ships/ShipCard/ShipCard";

export default function ClientDetails() {
  const params = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    const client = clients.find((client) => client.id == params.id);
    console.log("* client *", client);
    setClient(() => client);
  }, [params.id]);

  return (
    <section className="p-2">
      {client && (
        <div className="p-4 flex flex-col gap-2 rounded-md bg-gray-800">
          <h2 className="mb-2 font-bold text-3xl text-white">{client.name}</h2>
          <span className="mb-2  text-white">
            Registrado - {client.createdAt}
          </span>
          <span className="mb-2 text-white">Cantidad de servicios - 3</span>
          <span className="mb-2 text-white">{client.description}</span>
        </div>
      )}
      {client && client.ships.length > 0 && (
        <div className="mt-4">
          <h3 className="mb-2 font-bold text-2xl text-white">Embarcaciones</h3>
          <div className="flex flex-col">
            {client.ships.map((ship) => (
              <ShipCard key={ship.id} clientId={client.id} ship={ship} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
