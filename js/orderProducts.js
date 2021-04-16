var increament = 0;
var numberOfProducts = 0;
        
        function left(){

            //access 
            var leftButton = document.getElementById("left");
            var number = document.getElementById("number");
            var images  = document.getElementById("images");
            var imageName =  document.getElementById("imageName");
            var numberOfProductsTxt = document.getElementById("numberOfProducts");
            var totalPrice = document.getElementById("totalPrice");

            //initialize
            var imageList = new Array("images/02.jpg","images/04.jpg","images/07.jpg","images/012.jpg","images/013.jpg","images/016.jpg");
            var productNamesList = new Array("8D02","8D04","8D07","8D12","8D13","8D16");


            number.innerHTML = " Product : " + (increament + 1);
            imageName.innerHTML = " Product Name : " + productNamesList[increament] + " mink lashes ";
            images.src = imageList[increament];

            leftButton.addEventListener("click",function(){

                var numberOfProductsTxt = document.getElementById("numberOfProducts");
                var totalPrice = document.getElementById("totalPrice");
                numberOfProductsTxt.innerHTML = "";
                totalPrice.innerHTML = "";
                numberOfProducts = 0;

                if(increament>0){
                    increament--;
                    number.innerHTML = " Product : " + (increament + 1);
                    imageName.innerHTML = " Product Name : " + productNamesList[increament] + " mink lashes ";
                    images.src = imageList[increament];
                }
            },false);

        }

        function right(){
            
            //access
            var rightButton = document.getElementById("right");
            var number =  document.getElementById("number");
            var images  = document.getElementById("images");
            var productName =  document.getElementById("imageName");
            var numberOfProductsTxt = document.getElementById("numberOfProducts");
            var totalPrice = document.getElementById("totalPrice");

            //initizlize

            //imageName.innerHTML = imageNamesList[increament];
            
            var imageList = new Array("images/02.jpg","images/04.jpg","images/07.jpg","images/012.jpg","images/013.jpg","images/016.jpg");
            var productNamesList = new Array("8D02","8D04","8D07","8D12","8D13","8D16");

            rightButton.addEventListener("click",function(){

                var numberOfProductsTxt = document.getElementById("numberOfProducts");
                var totalPrice = document.getElementById("totalPrice");
                numberOfProductsTxt.innerHTML = "";
                totalPrice.innerHTML = "";
                numberOfProducts = 0;

                
                if(increament>=0 && increament<5){
                    increament++;
                    number.innerHTML = " Product : " + ( increament + 1 );
                    productName.innerHTML = " Product name " + productNamesList[increament] + " mink lashes ";
                    images.src = imageList[increament];
                }
            },false);
    
        }

        function addProduct(){
            const productPrice = 180;
            //access 
            var addProductButton = document.getElementById("addProductsBtn");
            var numberOfProductsTxt = document.getElementById("numberOfProducts");
            var totalPrice = document.getElementById("totalPrice");

            //initialize
            var productNamesList = new Array("8D02","8D04","8D07","8D12","8D13","8D16");
            //display number of products

            addProductButton.addEventListener("click",function(){ 
                if(numberOfProducts>=0){
                    numberOfProducts++;
                    numberOfProductsTxt.innerHTML =  numberOfProducts + " " + productNamesList[increament] + " mink lashes added for ordering" ;
                    totalPrice.innerHTML = "R" + numberOfProducts * 180 ;
                }
            },false);

        }
        
        function reduceProducts(){

            const productPrice = 180;
            //access 
            var reduceProductButton = document.getElementById("reduceProductsBtn");
            var numberOfProductsTxt = document.getElementById("numberOfProducts");
            var totalPrice = document.getElementById("totalPrice");

            //initialize
            var productNamesList = new Array("8D02","8D04","8D07","8D12","8D13","8D16");
            //display number of products

            reduceProductButton.addEventListener("click",function(){
                if(numberOfProducts>0 ){
                    numberOfProducts--;
                    numberOfProductsTxt.innerHTML =  numberOfProducts + " " + productNamesList[increament] + " mink lashes added for ordering" ;
                    totalPrice.innerHTML = "R" + numberOfProducts * 180 ;
                }

            },false);
            

        }


        left();
        right();
        addProduct();
        reduceProducts();