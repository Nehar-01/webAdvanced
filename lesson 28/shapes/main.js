var btn_cirlce = document.getElementById("btnCircle")
var btn_rect = document.getElementById("btnRect")
var btn_triangle = document.getElementById("btnTriangle")

var cirlce = document.getElementById("circle")
var rect = document.getElementById("rect")
var triangle = document.getElementById("triangle")


btn_cirlce.onclick = function()
{
    circle.setAttribute("class", "shape_circle")
}

btn_rect.onclick = function()
{
    rect.setAttribute("class", "shape_rect")
}

btn_triangle.onclick = function()
{
    triangle.setAttribute("class", "shape_triangle")
}





cirlce.onclick = function()
{
    circle.setAttribute("class", "hide")
}

rect.onclick = function()
{
    rect.setAttribute("class", "hide")
}

triangle.onclick = function()
{
    triangle.setAttribute("class", "hide")
}