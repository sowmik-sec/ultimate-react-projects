import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://demnzxpgoyhajzflwosm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlbW56eHBnb3loYWp6Zmx3b3NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MjkwMjQsImV4cCI6MjAyNTMwNTAyNH0.iFSu-0a--YYrXiICV97z_CAfuihISNNRCHVSAnMflqg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
