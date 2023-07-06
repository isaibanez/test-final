let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

let apple = document.getElementById("apple");
let lemon = document.getElementById("lemon");
let carrot = document.getElementById("carrot");
let pepper = document.getElementById("pepper");

let priceApple = document.getElementById("priceApple");
let priceLemon = document.getElementById("priceLemon");
let priceCarrot = document.getElementById("priceCarrot");
let pricePepper = document.getElementById("pricePepper");

let total = document.getElementById("total");

for(list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        rightBox.addEventListener("drop", function(e){
            rightBox.append(selected);
            if(selected === apple){
                total.textContent = parseInt(total.textContent || 0) + parseInt(priceApple.textContent || 0)
                selected = '';
            }else if(selected === lemon){
                total.textContent = parseInt(total.textContent || 0) + parseInt(priceLemon.textContent || 0)
                selected = '';
            }else if(selected === carrot){
                total.textContent = parseInt(total.textContent || 0) + parseInt(priceCarrot.textContent || 0)
                selected = '';
            }else if(selected === pepper){
                total.textContent = parseInt(total.textContent || 0) + parseInt(pricePepper.textContent || 0);
                selected = '';
            }
            //selected = null;
        });

        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        leftBox.addEventListener("drop", function(e){
            leftBox.append(selected);
            if(selected === apple){
                total.textContent = parseInt(total.textContent || 0) - parseInt(priceApple.textContent || 0)
                selected = '';
            }else if(selected === lemon){
                total.textContent = parseInt(total.textContent || 0) - parseInt(priceLemon.textContent || 0)
                selected = '';
            }else if(selected === carrot){
                total.textContent = parseInt(total.textContent || 0) - parseInt(priceCarrot.textContent || 0)
                selected = '';
            }else if(selected === pepper){
                total.textContent = parseInt(total.textContent || 0) - parseInt(pricePepper.textContent || 0);
                selected = '';
            }
            //selected = null;
        });
    })
}