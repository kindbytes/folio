// js/like.js
import { supabase } from "./supabase.js";

const postId = "UUID_DO_POST"; // Substitua pelo ID real do post
const btn = document.getElementById("btn-count");
const countSpan = document.getElementById("like-count");

let liked = false;

// Função para buscar o total de likes
async function getLikes() {
  const { data } = await supabase
    .from("posts")
    .select("likes")
    .eq("id", postId)
    .single();

  countSpan.textContent = data.likes;
}

// Função para alternar like
async function toggleLike() {
  const value = liked ? -1 : 1;

  await supabase.rpc("increment_likes", {
    post_id: postId,
    value
  });

  liked = !liked;
  btn.classList.toggle("active", liked);
  getLikes();
}

// Inicializa
getLikes();
btn.addEventListener("click", toggleLike);
