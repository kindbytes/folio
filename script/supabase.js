// js/supabase.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://bbylreevrywubnexodyr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJieWxyZWV2cnl3dWJuZXhvZHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxOTA1NzQsImV4cCI6MjA4NDc2NjU3NH0.XwKWs9jNQdiYuJRLRmSXZIaWxI7r2-2AirerEMQAXik";

export const supabase = createClient(supabaseUrl, supabaseKey);

