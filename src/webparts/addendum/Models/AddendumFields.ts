import { WebPartContext } from "@microsoft/sp-webpart-base";

export class AddendumFields
{
    public issuingCUO:string[];
    public region:number[];
    public productLine:number[];
    public underwriters:number[];
    public effectiveDate:Date;
    public letterType:number;
    public addendumContent:string;

    public constructor(context:WebPartContext)
    {
        this.issuingCUO = [context.pageContext.user.email];
        this.region = [];
        this.productLine = [];
        this.underwriters = [];
        this.effectiveDate = null;
        this.letterType = -1;
        this.addendumContent = "";
    }
}