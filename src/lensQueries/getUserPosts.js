import { apolloClient } from './apollo-client';
// this is showing you how you use it with react for example
// if your using node or something else you can import using
// @apollo/client/core!
import { gql } from '@apollo/client/core'

const GET_PUBLICATIONS = `
  query($request: PublicationsQueryRequest!) {
    publications(request: $request) {
          items {
            __typename 
            ... on Post {
              ...PostFields
            }
          }
          pageInfo {
            prev
            next
            totalCount
          }
        }
      }
      
      fragment MediaFields on Media {
        url
        mimeType
      }
      
      
      fragment PublicationStatsFields on PublicationStats { 
        totalAmountOfMirrors
        totalAmountOfCollects
        totalAmountOfComments
      }
      
      fragment MetadataOutputFields on MetadataOutput {
        name
        description
        content
        media {
          original {
            ...MediaFields
          }
        }
        attributes {
          displayType
          traitType
          value
        }
      }
      
      fragment Erc20Fields on Erc20 {
        name
        symbol
        decimals
        address
      }
      
      fragment PostFields on Post {
        id
      
        stats {
          ...PublicationStatsFields
        }
        metadata {
          ...MetadataOutputFields
        }
        createdAt
        collectModule {
          ...CollectModuleFields
        }
        referenceModule {
          ...ReferenceModuleFields
        }
        appId
        hidden
        reaction(request: null)
        mirrors(by: null)
        hasCollectedByMe
      }
      
      
      
      
      fragment CollectModuleFields on CollectModule {
        __typename
        ... on FreeCollectModuleSettings {
          type
          followerOnly
          contractAddress
        }
        ... on FeeCollectModuleSettings {
          type
          amount {
            asset {
              ...Erc20Fields
            }
            value
          }
          recipient
          referralFee
        }
        ... on LimitedFeeCollectModuleSettings {
          type
          collectLimit
          amount {
            asset {
              ...Erc20Fields
            }
            value
          }
          recipient
          referralFee
        }
        ... on LimitedTimedFeeCollectModuleSettings {
          type
          collectLimit
          amount {
            asset {
              ...Erc20Fields
            }
            value
          }
          recipient
          referralFee
          endTimestamp
        }
        ... on RevertCollectModuleSettings {
          type
        }
        ... on TimedFeeCollectModuleSettings {
          type
          amount {
            asset {
              ...Erc20Fields
            }
            value
          }
          recipient
          referralFee
          endTimestamp
        }
        ... on UnknownCollectModuleSettings {
          type
          contractAddress
          collectModuleReturnData
        }
      }
      
      fragment ReferenceModuleFields on ReferenceModule {
        ... on FollowOnlyReferenceModuleSettings {
          type
          contractAddress
        }
        ... on UnknownReferenceModuleSettings {
          type
          contractAddress
          referenceModuleReturnData
        }
        ... on DegreesOfSeparationReferenceModuleSettings {
          type
          contractAddress
          commentsRestricted
          mirrorsRestricted
          degreesOfSeparation
        }
      }
      
      
`;

export const getUserPosts = (profileId, cursor=null) => {
  return new Promise(async (resolve, reject) => {
    try{
      const response = await apolloClient.query({
        query: gql(GET_PUBLICATIONS),
        variables: {
          request: {
            profileId:profileId, //The profileID of the account
            publicationTypes: ["POST"],
            limit: 24,
            sources:["5bba5781-78b5-4927-8d2f-122742817583"],
            cursor:cursor
          }
        },
      })
      resolve(response)
    }catch(err){
      console.trace(err)
      reject(err)
    }

  })
}
