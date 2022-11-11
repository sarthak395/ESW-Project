
export default function soil(props){
    return(
        <>
        soil
        </>
    )
}

export async function getServerSideProps(context){
    let data = await fetch("https://api.thingspeak.com/channels/1878896/fields/2.json?api_key=A8DXRU05EAL1X2NZ&results=10")
    let datajson= await data.json()
    console.log(datajson.feeds[0].field2)
    return {
        props: {  }, // will be passed to the page component as props
      }
}

