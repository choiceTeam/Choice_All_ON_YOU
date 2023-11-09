
export const handler = async (event , context) => {
    
    const eventData = JSON.parse(event.body)

   const PANDA_API = `https://api.pandascore.co/matches/${eventData.match_slug}`
   const options = { 
    method : "GET",
    // mode : "no-cors",
    cache: "no-cache",
    credential: "same-origin",
    params: {
        sort: 'begin_at',
        page: '1',
        per_page: '5',
      },
    headers:{
        // 'Access-Control-Allow-Origin': '*',
        "Content-Type" : "application/json",
        authorization: 'Bearer suTTSNfx9lW5kzna_gxsecTPxQoIfk2_rsWM6AUa7VV80bBlUV4'
    },
   }
   const response = await fetch(PANDA_API , options)
   const data = await response.json()

    return{
        statusCode : 200, 
        body: JSON.stringify({
            upcoming:  data,
        
        })
    }
}