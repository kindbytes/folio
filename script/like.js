import { supabase } from "./supabase.js";

const postId = "11111111-1111-1111-1111-111111111111"; // Substitua pelo ID real do post
const btn = document.getElementById("btn-count");
const countSpan = document.getElementById("like-count");

let liked = false;

// Função para buscar o total de likes
async function getLikes() {
  const { data, error } = await supabase
    .from("posts")
    .select("likes")
    .eq("id", postId)
    .maybeSingle(); // melhor que single()

  console.log("[getLikes] retorno:", { data, error });

  if (error) {
    console.error("Erro ao buscar likes:", error);
    countSpan.textContent = "0";
    return;
  }

  countSpan.textContent = data?.likes ?? 0;
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

console.log("postId usado:", postId);


