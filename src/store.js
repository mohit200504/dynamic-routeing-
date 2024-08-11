
import {configureStore,  createSlice} from '@reduxjs/toolkit'


let data=[
    {
        title:"raymond shirt",
        price:1500,
        id:1,
        image:"https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25365332/2023/10/31/3f46a9f4-d610-4c29-b020-5c13c1e0104f1698734663589-Raymond-Men-Shirts-7381698734663190-1.jpg"
    },
    {
        title:"raymond pant",
        price:1000,
        id:2,
        image:"https://th.bing.com/th/id/OPAC.UMmztEj9KpDCAw474C474?w=165&h=220&rs=1&o=5&pid=21.1"
    },

    {
        title:"raymond tshirt",
        price:500,
        id:3,
        image:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2d%2F26%2F2d2609565fb8a4394d1da21f24e55c52ba1e5184.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"

    },
    {
        title:"rare rabbit",
        price:500,
        id:4,
        image:" https://thehouseofrare.com/cdn/shop/products/IMG_0012_fec54788-91e7-4c0c-8da0-3980f615f2d5.jpg?v=1698323505"

    },
    {
        title:"rarerabbit pant",
        price:5000,
        id:5,
        image:" https://5.imimg.com/data5/ECOM/Default/2023/5/311950260/BO/GA/FN/8135616/ri38004-3-500x500.webp"

    },

    {
        title:"lenin",
        price:600,
        id:6,
        image:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThkgSNgG0vNeNWnt97PtKrkIxl2YORU1QnFQ&s"

    },



    


    
]

let cartdata=[
   
]

let itemsSlice =createSlice(
    {
        name:"user",
        initialState:data,
        
        reducers:{

           getdata:(state)=>{

                return state;

            },

            



        }
    }
)

let cartSlice=createSlice({
    name:"cart",
    initialState:cartdata,
    reducers:{
        getcart:(state)=>{
            return state;
        },

        addcart:(state,action)=>{

            console.log(action)

            let cartdata=[...state,{title:action.payload.title,id:action.payload.id,image:action.payload.image,price:action.payload.price}]
        
           return cartdata;

        },
        deletecart:(state,action)=>{
            let newcart=state.filter((ll)=>{
                return ll.id!==action.payload;
            })

            return newcart;

        }

    }
})


let store=configureStore({

    reducer:{
        items:itemsSlice.reducer,
        cart:cartSlice.reducer
    }
});

export const {getdata,getcard} = itemsSlice.actions;
export const {getcart,addcart, deletecart} = cartSlice.actions;

export default store;
