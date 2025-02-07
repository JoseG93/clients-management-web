"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { getClientById } from "@/actions/clients/actions";
import { getShipsByClient, deleteShip } from "@/actions/ships/actions";

import { formatDate } from "@/utils/utils";

import ShipCard from "@/components/ships/ShipCard/ShipCard";

export default function ClientDetails() {
  const params = useParams();
  const router = useRouter();

  const [client, setClient] = useState([]);
  const [clientShips, setClientShips] = useState([]);

  useEffect(() => {
    fetchClient(params.id);
    fetchClientShips(params.id);
  }, [params.id]);

  async function fetchClient(clientId) {
    const clientData = await getClientById(clientId);
    setClient(clientData);
  }

  async function fetchClientShips(clientId) {
    const shipsData = await getShipsByClient(clientId);
    setClientShips(shipsData);
  }

  async function handleShipViewDetailsClick(shipId) {
    router.push(`/ships/${shipId}`);
  }

  async function handleShipDeleteClick(shipId) {
    const result = await deleteShip(shipId);
    fetchClientShips(params.id);
  }

  return (
    <section className="p-2">
      {client && (
        <div className="p-4 flex flex-col gap-2 rounded-md bg-gray-600">
          <h2 className="mb-2 font-bold text-3xl text-white">{client.name}</h2>
          <span className="mb-2  text-white">
            Registrado - {formatDate(client.created_at)}
          </span>
          <span className="mb-2 text-white">{client.description}</span>
        </div>
      )}
      {clientShips.length > 0 && (
        <div className="mt-4 p-4 rounded-md bg-gray-600">
          <h3 className="mb-2 font-bold text-2xl text-white">Embarcaciones</h3>
          <div className="flex flex-col">
            {clientShips.map((ship) => (
              <ShipCard
                key={ship.id}
                clientId={client.id}
                ship={ship}
                onShipViewDetails={() => handleShipViewDetailsClick(ship.id)}
                onShipDelete={() => handleShipDeleteClick(ship.id)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
