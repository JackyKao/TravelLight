function DifFood()
{
  document.getElementById('wordcloud').innerHTML='';
d3.csv("https://jackykao.github.io/TravelLight/DifFood.csv", 
  function(data)
  {
    d3.wordcloud()
      .size([500, 300])
      .fill(d3.scale.ordinal().range(["#884400", "#448800", "#888800", "#444400"]))
      .words(data)
      .start();
  });
}
function JapanFood()
{
d3.csv("https://jackykao.github.io/TravelLight/JapanFood.csv", 
  function(data)
  {
    d3.wordcloud()
      .size([500, 300])
      .fill(d3.scale.ordinal().range(["#884400", "#448800", "#888800", "#444400"]))
      .words(data)
      .start();
  });
}
function otherFood()
{
d3.csv("https://jackykao.github.io/TravelLight/otherFood.csv", 
  function(data)
  {
    d3.wordcloud()
      .size([500, 300])
      .fill(d3.scale.ordinal().range(["#884400", "#448800", "#888800", "#444400"]))
      .words(data)
      .start();
  });
}
function VegFood()
{
d3.csv("https://jackykao.github.io/TravelLight/VegFood.csv", 
  function(data)
  {
    d3.wordcloud()
      .size([500, 300])
      .fill(d3.scale.ordinal().range(["#884400", "#448800", "#888800", "#444400"]))
      .words(data)
      .start();
  });
}
