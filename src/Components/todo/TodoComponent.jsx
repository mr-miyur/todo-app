import React, { Component } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";

class TodoComponent extends Component{
        constructor(props) {
            super(props);
            this.state = {
                id : 1,
                description : 'learn form noe',
                targetDate : moment(new Date()).format('YYYY-MM-DD')
            }
            this.onSubmit=this.onSubmit.bind(this)
            this.validate=this.validate.bind(this)
        }

        validate(values){
            let errors={}
            if(!values.description){
                errors.description="Enter Description"
            } else if (values.description.length<5){
                errors.description="Enter atleast 5 character in description"
            }


            if(!moment(values.targetDate).isValid()){
                errors.targetDate="Please select valid Date"
            }
            return errors;
        }

        onSubmit(values){
            console.log(values)
        }

        render(){
        let {description,targetDate}=this.state
        //let targetDate =this.state.targetDate

        return(
            <div>
            <h1>Todo</h1>
            <div className="container">
                <Formik initialValues ={{description,targetDate}}
                onSubmit={this.onSubmit}
                validateOnBlur={false}
                validateOnChange={false}
                validate={this.validate}
                > 
                    {
                        (props) =>(
                            <Form>

                                <ErrorMessage className="alert alert-warning" name="description" Component="div"  
                                 />
                                 <ErrorMessage className="alert alert-warning" name="targetDate" Component="div"  
                                 />

                                <fieldset className='form-group'>
                                    <label>Description</label>
                                    <Field className='form-control' type="text" name="description" />
                                </fieldset>

                                <fieldset className='form-group'>
                                    <label>TargetDate</label>
                                    <Field className='form-control' type="date" name="targetDate"/>
                                </fieldset>
                                <button type="submit" className="btn btn-success">Save</button>
                            </Form>
                        )
                    }

                </Formik>
            </div>
          
            </div>
        )
    }


}
export default TodoComponent