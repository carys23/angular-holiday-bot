import {myjson} from './data.mjs' 



// let keys = Object.keys(myjson).forEach(function(key, values){
//     let both = myjson[key, values];
//     let keys = myjson[key]
    
//     for(let allKeys in keys){
//         let values = keys[allKeys];
    

//         if(values === 'Europe'){
//             console.log(values)
//         }
//     }

// });

let asia = {}

let usa = {}
let africa = {}
let australia = {}
let nAmerica = {}
let antarctica = {}




let antarcticaCountries = function(){

    Object.keys(myjson).forEach(function(key, values){
        let keys = myjson[key]
    
        
        for(let allKeys in keys){
            let values = keys[allKeys];
        
            if(allKeys === 'HolidayReference'){
                let index = keys[allKeys];
                if(index == 20){
                    antarctica = myjson[key];
                    console.log('antarctica countries' , antarctica['Country']);
                    return antarctica
                }
                
                
    
            }
        }
    
    });

}

let asiaCountries = function(){

    Object.keys(myjson).forEach(function(key, values){
        let keys = myjson[key]
    
        
        for(let allKeys in keys){
            let values = keys[allKeys];
        
            if(allKeys === 'HolidayReference'){
                let index = keys[allKeys];
                if(index == 1 || index == 9 || index == 15 || index == 16 || index == 19 || index == 29){
                    asia = myjson[key];
                    // console.log('asia countries' , asia['Country']);

                    return asia
                }
            }
        }
    
    });

}



let europeCountries = function(){
    var europe = {}
    Object.keys(myjson).forEach(function(key, values){
        let keys = myjson[key]
    
        
        for(let allKeys in keys){
            let values = keys[allKeys];
        
            if(allKeys === 'HolidayReference'){
                let index = keys[allKeys];
                if(index == 3 || index == 7 || index == 12 || index == 13 || index == 14 || index == 22 || index == 23 || index == 24 || index == 25 || index == 26 || index == 27 || index == 28){
                    // europe = keys[allKeys];
                    
                    europe = keys;
                
                }

        
            }
            
            // return europe;
        }
    
    });
    // console.log(europe)
    return europe;
    
};



/// list the keys in each array
// let eur = europeCountries();
// for(let i in europe){
    
// let ob = Object.entries(europe);
// console.log(i)

// }



// console.log(eur)
// for(let i in eur){
//     console.log(i)
// }






let usaCountries = function(){
    let usa = {}

    Object.keys(myjson).forEach(function(key, values){
        let keys = myjson[key]
    
        
        for(let allKeys in keys){
            let values = keys[allKeys];
        
            if(allKeys === 'HolidayReference'){
                let index = keys[allKeys];
                if(index == 2 || index == 11 ){
                    usa = myjson[key];
                
                }
                
            
    
            }
        
        }
    
    
    });
    console.log('USA countries' , usa['Country']);
    return usa

}


let africaCountries = function(){
    let africa = {}

    Object.keys(myjson).forEach(function(key, values){
        let keys = myjson[key]
    
        
        for(let allKeys in keys){
            let values = keys[allKeys];
        
            if(allKeys === 'HolidayReference'){
                let index = keys[allKeys];
                console.log(allKeys);
                if(index == 4 || index == 6 || index == 8){
                    continue;
                }
            }
        }
    });
    console.log('africa countries' , africa['Country']);
    return africa;
}

let australiaCountries = function(){

    Object.keys(myjson).forEach(function(key, values){
        let keys = myjson[key]
    
        
        for(let allKeys in keys){
            let values = keys[allKeys];
        
            if(allKeys === 'HolidayReference'){
                let index = keys[allKeys];
                if(index == 5 || index == 10 || index == 17 || index == 30 ){
                    australia = myjson[key];
                    console.log('aus countries' , australia['Country']);
                    
                }
            }
        }
    
    });
    return australia;
}


let nAmericaCountries = function(){
    let data = function(){
        Object.keys(myjson).forEach(function(key, values){
            var nAmerica ={}
            let keys = myjson[key]

            for(let allKeys in keys){
                let values = keys[allKeys];
            
                if(allKeys === 'HolidayReference' ){
                    let index = keys[allKeys];
                    if(index == 2 || index == 11  || index == 18 || index == 21)
                    {
                    
                        nAmerica = myjson[key];
                       
                    }
                    
                } 
              
        }
         
        });
       

        // let index = nAmerica['Country'].length
        // console.log(index)
        // let index2 = myjson.length;
        // while (index > index2 );
        // {   
        //     nAmerica;
        //     // continue;
        // }
       
    }
    nAmerica = data()
    }



    




// usaCountries();
// africaCountries();
// // australiaCountries()
// nAmericaCountries();
let n = nAmericaCountries();
console.log(n)
// asiaCountries()
// europeCountries()
// antarcticaCountries()
africaCountries();

// export {africaCountries};
// export {nAmericaCountries};
