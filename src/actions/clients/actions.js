"use server";

import { supabase } from "@/utils/supabase";

/* not used */
// import { revalidatePath } from "next/cache";
// import { createClient } from "@/utils/supabase/server";

export async function getClients() {
  let { data: clients, error } = await supabase.from("clients").select("*");

  if (error) {
    throw new Error("* ERROR - failed to fetch clients *");
  }

  return clients;
}

export async function addClient(data) {
  const { error } = await supabase
    .from("clients")
    .insert([
      {
        created_at: new Date(),
        name: data.name,
        description: data.description,
      },
    ])
    .select();

  if (error) {
    throw new Error(error.message);
  }
}

export async function updateClient() {
  // implement later
}

export async function deleteClient(clientId) {
  const { data, error } = await supabase.from("clients").delete().eq("id", clientId);
  console.log('* delete-client data *', data);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
