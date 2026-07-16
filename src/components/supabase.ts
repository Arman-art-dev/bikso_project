import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fdjftvmnjrfnaeiqlcog.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkamZ0dm1uanJmbmFlaXFsY29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5MjQxOTUsImV4cCI6MjA5OTUwMDE5NX0.aJ2uF_F7oclr9gRyj4vWmmRtgYDD7lf6AUsxvmtPe8s";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);