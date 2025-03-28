import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  `https://tsowqagbqemtsovdwwxd.supabase.co`,
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzb3dxYWdicWVtdHNvdmR3d3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxMDEwMTgsImV4cCI6MjA1ODY3NzAxOH0.aH9cAi8lNCOyflfSksaCWLyn0eKKrIYbSGQ_WGXmaKs`
);

export const insertToSupabase = async (table: string, data: any) => {
  const { error } = await supabase.from(table).insert([data]);

  if (error) console.error(`Error inserting data:`, error);
  else console.info(`Data inserted successfully:`, data);
};

export const retrieveAllFromSupabase = async (table: string) => {
  const { data, error } = await supabase.from(table).select(`*`);

  if (error) console.error(`Error retrieving data:`, error);
  else console.info(`Data retrieved successfully:`, data);
};
