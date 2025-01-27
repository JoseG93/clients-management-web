"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { getClients, deleteClient } from "@/actions/clients/actions";

import Button from "@/components/Button";
import ConfirmationModal from "@/components/ConfirmationModal";
import SearchBar from "@/components/SearchBar";
import ClientCard from "@/components/clients/ClientCard/ClientCard";

export default function ClientsList() {
  const router = useRouter();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteClientId, setDeleteClientId] = useState(null);
  const [clientsList, setClientsList] = useState([]);
  const [filteredClientsList, setFilteredClientsList] = useState([]);
  
  useEffect(() => {
    fetchClients();
  }, []);

  async function fetchClients() {
    const data = await getClients();
    setClientsList(data);
    setFilteredClientsList(data);
  };

  function filterClients(searchTxt) {
    const filteredItems = clientsList.filter((client) =>
      client.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
    setFilteredClientsList(filteredItems);
  }

  function handleAddClientClick() {
    router.push("/clients/add");
  }

  function handleViewClientDetails(clientId) {
    router.push(`/clients/${clientId}`);
  }

  function handleDeleteClick(clientId) {
    setDeleteClientId((prevState) => clientId);
    setShowDeleteConfirm((prevState) => !prevState);
  }

  async function handleDeleteClient() {




    if (deleteClientId) {
      const result = await deleteClient(deleteClientId);
      console.log('* result *', result);
      setDeleteClientId((prevState) => null);
      setShowDeleteConfirm((prevState) => !prevState);
      fetchClients();
    }
  }

  return (
    <div className="p-2">
      <div className="my-2 flex gap-2">
        <Button onClick={handleAddClientClick}>Agregar cliente</Button>
        <SearchBar placeholder="Buscar cliente..." onChange={filterClients} />
      </div>
      <div className="flex gap-2 flex-wrap grow">
        <ConfirmationModal
          open={showDeleteConfirm}
          message={'Vas a eliminar este cliente'}
          onCancel={() => setShowDeleteConfirm((prevState) => !prevState)}
          onConfirm={() => handleDeleteClient()}
        />
        {filteredClientsList.map((client) => {
          return (
            <ClientCard
              key={client.id}
              client={client}
              onViewDetailsClick={handleViewClientDetails}
              onDeleteClick={handleDeleteClick}
            />
          );
        })}
      </div>
    </div>
  );
}
