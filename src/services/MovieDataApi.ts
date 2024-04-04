let url = "http://localhost:5173/movieData.json";
export async function getData(){
    const response = await fetch(url);
    const data = response.json();
    return data;
}
