// javascript
d3.select();
d3.selectAll();

d3.select("h1").style("color", "red")
.attr("class", "Heading")
.text("Updated h1 tag");

d3.select("body").append("p").text("First Paragraph");