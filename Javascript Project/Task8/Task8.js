let foodContainer = document.querySelector('.food-container');

const fooditem=[
    {
        FoodName: "Cheese paratha",
        foodimg: 'https://i.pinimg.com/736x/5b/33/96/5b33961f6d7661a4e6320c1c7132340d.jpg',
        price: "RS 250",
        type: "breakFast",
        des: "These cheese flatbreads make for a wholesome breakfast or brunch. There are many many varieties of paratha made and this is one such tasty paratha which the kids are going to love."
    },
    {
        FoodName: "Aloo Paratha",
        foodimg: 'https://i.pinimg.com/736x/eb/61/c8/eb61c818c33a1c5ee295c21705f92281.jpg',
        price: "RS 200",
        type: "breakFast",
        des: "Aloo Paratha is a bread dish originating from the Indian subcontinent. It is a breakfast dish originated from the Punjab region."
    },
    {
        FoodName: "Egg Paratha",
        foodimg: 'https://i.pinimg.com/736x/74/90/44/749044ba6287c895f8121df9266a99c6.jpg',
        price: "RS 150",
        type: "breakFast",
        des: "Egg paratha recipe — easy breakfast, brunch or dinner recipe that is protein rich, healthy and tasty. Egg paratha is a kids' favorite, so i make it often for their after school snack. To make egg paratha, you can use ready paratha, roti or frozen paratha as well."
    },
    {
        FoodName: "Daal Chawal",
        foodimg: 'https://i.pinimg.com/736x/86/b6/60/86b660dd99f1d051249069383ea0d3e0.jpg',
        price: "RS 400",
        type: "Lunch",
        des: "The most fascinating, fabulously fantastic and simple lightweight Pakistan’s most favorite dish, Daal Chawal Recipe (Daal Rice) is here at Sooperchef.pk. It’s simple, fast and delicious Pakistani Recipe."
    },
    {
        FoodName: "Palak Paneer",
        foodimg: 'https://i.pinimg.com/736x/ce/d8/16/ced816ee5697d05cf23c9deb44c9f7b0.jpg',
        price: "RS 400",
        type: "Lunch",
        des: "Palak Paneer is a popular Indian dish of Indian cottage cheese cubes in a mild, spiced smooth spinach sauce. This delicious creamy dish is made with fresh spinach leaves, paneer (firm cottage cheese), onions, tomatoes, herbs and spices."
    },
    {
        FoodName: "Aloo Ghobi",
        foodimg: 'https://i.pinimg.com/736x/96/bb/ba/96bbba77545709b6fc1cc034e1d6fdb8.jpg',
        price: "RS 200",
        type: "Lunch",
        des: "Aloo Gobi ki Sabzi is a classic Pakistani dish of Potatoes and Cauliflower cooked in savory spices and garnished with chillies and cilantro."
    },
    {
        FoodName: "sahi paneer",
        foodimg: 'https://i.pinimg.com/736x/81/44/11/814411b5168371b764c738d8b64fd782.jpg',
        price: "RS 200",
        type: "Lunch",
        des: "This Shahi Paneer is deliciously rich and creamy, making it one of the most popular recipes in Mughlai cuisine. Fresh, unmelting cheese is married with a creamy gravy, perfect for serving with naan or roti."
    },

    {
        FoodName: "Banana Shakes",
        foodimg: 'https://i.pinimg.com/736x/bf/a6/f7/bfa6f78d7ab689051d2094410eec242c.jpg',
        price: "RS 150",
        type: "Shakes",
        des: "You need less than five minutes to make this easy banana smoothie. Use our simple recipe on it’s own or use it as a base for other smoothies."
    },
    {
        FoodName: "Mango Shakes",
        foodimg: 'https://i.pinimg.com/736x/01/d6/b3/01d6b305d2c9aa654a6df62331605371.jpg',
        price: "RS 150",
        type: "Shakes",
        des: "Mango shake is a cool and tempting fruit drink prepared by simply blending ripe mango pieces, milk and sugar. To keep things simple and easy, this recipe primarily explains how to make mango shake with milk."
    },

    {
        FoodName: "Biryani",
        foodimg: 'https://i.pinimg.com/736x/2b/64/e1/2b64e15ac11687bb3074b9f7abc87edd.jpg',
        price: "RS 600",
        type: "Dinner",
        des: "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat, and sometimes, in addition, eggs and/or vegetables such as potatoes in certain regional varieties."
    },
    {
        FoodName: "Korma",
        foodimg: 'https://i.pinimg.com/736x/79/6d/9b/796d9b6fc6ba421504d2c60023897b14.jpg',
        price: "RS 250",
        type: "Dinner",
        des: "Korma is a gravy dish that is usually made with yogurt, lots of nuts and spices. A Mughal era original, Chicken Korma is the perfect dinner party dish that is easy, quick and a no fuss recipe."
    }
]


const food = fooditem.map(item => {
    const listitem = ` <div class="col-md-6 foodbox ${item.type}">
    <!-- content div -->
    <div class="content b my-2">
        <!-- image -->
        <div class="c-image">
            <img src="${item.foodimg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <!-- title -->
                <span class="title">${item.FoodName}</span>
                <!-- price -->
                <span class="price">${item.price}</span>
            </div>
            <!-- Description -->
            <div class="des my-3 ">
                <p>${item.des}</p>
            </div>
        </div>   
    </div>
</div>`;
foodContainer.innerHTML += listitem;
})
const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('ul');

menu.forEach(m => {
    m.addEventListener('click', e=>{
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if(e.target.innerHTML === 'All')
            {
                box.classList.remove('d-none')
            }
            else if(e.target.innerHTML==='Breakfast'){
                if(box.classList.contains('breakFast'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Lunch'){
                if(box.classList.contains('Lunch'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Shakes'){
                if(box.classList.contains('Shakes'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Dinner'){
                if(box.classList.contains('Dinner'))
                {
                    box.classList.remove('d-none')
                }
                
            }
        })
        
    })
})