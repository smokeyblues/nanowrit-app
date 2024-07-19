/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    MyWeb: {
      type: "sst.aws.Nextjs"
      url: string
    }
    Premise: {
      name: string
      type: "sst.aws.Bucket"
    }
    PremiseApi: {
      type: "sst.aws.ApiGatewayV1"
      url: string
    }
    Premises: {
      name: string
      type: "sst.aws.Dynamo"
    }
  }
}
export {}