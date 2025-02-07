"use server";

import { supabase } from "@/utils/supabase";

export async function getShips() {
  let { data: ships, error } = await supabase.from("ships").select("*");

  if (error) {
    throw new Error("* ERROR - failed to fetch ships *");
  }

  return ships;
}

export async function getShipById(shipId) {
  let { data, error } = await supabase.from("ships").select("*").eq("id", shipId);

  if (error) {
    throw new Error("* ERROR - failed to fetch ship *");
  }

  let ship = data[0];
  return ship;
}

export async function getShipsByClient(clientId) {
  let { data: clientShips, error } = await supabase.from("ships").select("*").eq("client_id", clientId);

  if (error) {
    throw new Error("* ERROR - failed to fetch client ships *");
  }
  
  return clientShips;
}

export async function addShip(data) {
  // TODO - implement
  const { error } = await supabase
    .from("ships")
    .insert([
      {
        // created_at: new Date(),
        // name: data.name,
        // description: data.description,
      },
    ])
    .select();

  if (error) {
    throw new Error(error.message);
  }
}

export async function updateShip() {
  // TODO - implement later
}

export async function deleteShip(shipId) {
  const { data, error } = await supabase.from("ships").delete().eq("id", shipId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
