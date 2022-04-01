import { WebPartContext } from "@microsoft/sp-webpart-base";
import { spfi, SPFx } from "@pnp/sp/presets/all";

export default class DataOperations
{
    public sp;

    constructor(context:WebPartContext)
    {
        this.sp = spfi().using(SPFx(context));
    }
}