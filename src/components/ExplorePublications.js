import React, {useEffect, useState} from 'react'
import { explorePublications } from '../lensQueries/explorePublications'

export default function ExplorePublications(props){

    const init = async () => {
        try{
            const request = {
                sortCriteria: "LATEST",
                noRandomize:true,
                sources:["5bba5781-78b5-4927-8d2f-122742817583"],
                publicationTypes: ["POST"],
                cursor:"{\"timestamp\":1,\"offset\":0}", 
                limit:24
              }
            const response = await explorePublications(request) // To get next result replace the cursor with the value of response.pageInfo.next 
            console.log(response)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        init()
    },[])

    return(
        <div>
        </div>
    )
}