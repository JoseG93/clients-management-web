"use server";

import { supabase } from "@/utils/supabase";

export async function getShips() {
  let { data: clients, error } = await supabase.from("ships").select("*");

  if (error) {
    throw new Error("* ERROR - failed to fetch clients *");
  }

  return clients;
}

export async function getShipsByClient() {}

export async function getShipById() {}

export async function addShip(formData) {}

export async function updateShip() {}

export async function deleteShip() {}
