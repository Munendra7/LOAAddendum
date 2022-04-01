import * as React from 'react';
import styles from './Addendum.module.scss';
import { AddendumFields } from '../Models/AddendumFields';
import { IAddendumProps, IAddendumStates } from '../Models/IAddendum';

import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { Dropdown } from 'office-ui-fabric-react';
import { RichText } from "@pnp/spfx-controls-react/lib/RichText";

import Constants from '../Models/Constants';

export default class Addendum extends React.Component<IAddendumProps, IAddendumStates> {

  public constructor(props)
  {
    super(props);

    this.state={
      addendumFields: new AddendumFields(this.props.context)
    };
  }

  public render(): React.ReactElement<IAddendumProps> {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.header}>
              <h1>Add Addendum</h1>
              <div></div>
          </div>
          <br></br>
          <div className='row'>
            <div className='col-md-6'>
              <PeoplePicker
                  context={this.props.context as any}
                  titleText="Issuing CUO"
                  personSelectionLimit={1}
                  required={true}
                  showHiddenInUI={false}
                  principalTypes={[PrincipalType.User]}
                  defaultSelectedUsers={this.state.addendumFields.issuingCUO}
                  onChange={(item)=>{
                    this.setState({
                      addendumFields:{
                        ...this.state.addendumFields,
                        issuingCUO:item.map((i)=>{return i.id.substring(i.id.lastIndexOf('|')+1)})
                      }
                  });}
                  }
                  resolveDelay={1000} />
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <Dropdown
                className={styles.inputControl}
                placeholder="Select Region"
                multiSelect={true}
                label="Region"
                options={[]}
                onChange={
                  (e,item)=>{
                    this.setState({
                      addendumFields:{
                        ...this.state.addendumFields,
                        region:item.selected?this.state.addendumFields.region.concat(Number(item.key)):this.state.addendumFields.region.filter((val)=>{return val!=item.key})
                      }
                    });
                  }
                }
                styles={Constants.dropdownStyles}
              />
            </div>
          </div>
          
          <div className='row'>
            <div className='col-md-6'>
              <Dropdown
                className={styles.inputControl}
                placeholder="Select ProductLine"
                multiSelect={true}
                label="Product Line"
                options={[]}
                onChange={
                  (e,item)=>{
                    this.setState({
                      addendumFields:{
                        ...this.state.addendumFields,
                        productLine:item.selected?this.state.addendumFields.productLine.concat(Number(item.key)):this.state.addendumFields.productLine.filter((val)=>{return val!=item.key})
                      }
                    });
                  }
                }
                styles={Constants.dropdownStyles}
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <Dropdown
                className={styles.inputControl}
                placeholder="Select Underwriters"
                multiSelect={true}
                label="Underwriters"
                options={[]}
                onChange={
                  (e,item)=>{
                    this.setState({
                      addendumFields:{
                        ...this.state.addendumFields,
                        underwriters:item.selected?this.state.addendumFields.underwriters.concat(Number(item.key)):this.state.addendumFields.underwriters.filter((val)=>{return val!=item.key})
                      }
                    });
                  }
                }
                styles={Constants.dropdownStyles}
              />
            </div>
          </div>
          
          <div className='row'>
            <div className='col-md-6'>
              <RichText
                isEditMode={true} 
                value={this.state.addendumFields.addendumContent}
                onChange={(content)=>{
                  this.setState({
                    addendumFields:{
                      ...this.state.addendumFields,
                      addendumContent:content
                    }
                  },()=>{
                    console.log(this.state);
                  });
                  return content;
                }}
              />
            </div>
          </div>


        </div>
      </>
    );
  }
}
