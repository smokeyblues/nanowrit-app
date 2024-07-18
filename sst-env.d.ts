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
    Premises: {
      name: string
      type: "sst.aws.Dynamo"
    }
  }
}
export {}