import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://oclprkxaerkjqodqqxub.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jbHBya3hhZXJranFvZHFxeHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg3MzMzMDAsImV4cCI6MTk4NDMwOTMwMH0._xNOZlmJIBu_RWg0ZgD7mQKyV2yUWK9hDLqrAle5BBo";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}