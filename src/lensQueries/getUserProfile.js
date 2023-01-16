import { apolloClient } from './apollo-client';
import { gql } from '@apollo/client/core'

const ProfileDocument = `
query($request:SingleProfileQueryRequest!){
    profile(request:$request) {
      id
      name
      bio
      attributes {
        displayType
        traitType
        key
        value
      }
      followNftAddress
      metadata
      isDefault
      picture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      handle
      coverPicture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      ownedBy
      dispatcher {
        address
        canUseRelay
      }
      stats {
        totalFollowers
        totalFollowing
          publicationsTotal(forSources: ["5bba5781-78b5-4927-8d2f-122742817583"])
          postsTotal(forSources: ["5bba5781-78b5-4927-8d2f-122742817583"])
          mirrorsTotal(forSources: ["5bba5781-78b5-4927-8d2f-122742817583"])
          commentsTotal(forSources: ["5bba5781-78b5-4927-8d2f-122742817583"])
          totalPublications
          totalPosts
          totalMirrors
          totalComments
      }
      followModule {
        ... on FeeFollowModuleSettings {
          type
          amount {
            asset {
              symbol
              name
              decimals
              address
            }
            value
          }
          recipient
        }
        ... on ProfileFollowModuleSettings {
          type
        }
        ... on RevertFollowModuleSettings {
          type
        }
      }
    }
  }
`


export const getUserProfile = async (handle) => {
    return new Promise(async (resolve, reject) => {
        try{
            const result = await apolloClient.query({
                query: gql(ProfileDocument),
                variables: {
                    request:{handle}, //The handle, @w0xter.lens. REMEMBER TO INCLUDE ".lens" 
                },
              });
            
              resolve(result.data.profile)
        }catch(err){
            console.trace(err)
            reject(err)
        }

    })
};


