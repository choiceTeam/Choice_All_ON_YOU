
export const handler = async (event , context) => {
    console.log(" the handler event",{event})
    console.log(" the handler context",{context})
    const eventData = JSON.parse(event.body)
   const PANDA_API = `https://api.pandascore.co/${eventData.game}/matches/upcoming`
   const options = { 
    method : "GET",
    // mode : "no-cors",
    cache: "no-cache",
    credential: "same-origin",
    params:{
        sort: 'begin_at',
        page: '1',
        per_page: '5'
      },
    headers:{
        "Content-Type" : "application/json",
        authorization: 'Bearer suTTSNfx9lW5kzna_gxsecTPxQoIfk2_rsWM6AUa7VV80bBlUV4',
        
    },

   
   }
   const response = await fetch(PANDA_API , options)
   const data = await response.json()
//    console.log(data)
    return{
        statusCode : 200, 
        body: JSON.stringify({
         //  pokemon: data
            // region: 'hoenn',
        //    teams01: data[0].videogame.name,
            // teams02: data01 = JSON.parse(data[0]),
             upcoming: data,
            // teams04: data[0].opponents[0].opponent,
            // teams05: data[0].opponents[0].opponent.image_url,
        
        //    all: data
        })
    }
}
