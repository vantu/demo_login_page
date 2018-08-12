import  React ,  { Component } from 'react';
import AuthForm from "./AuthForm";
import { graphql } from 'react-apollo';
import  mutation from '../mutations/Signup';

class SignupForm extends  Component {
    omSubmit({email, password}){
        this.props.mutate({
            variables:{email, password}
        })
    }

render(){
    return (
        <div>
            <h3>Sign up</h3>
            <AuthForm
                errors={[]}
                onSubmit={this.omSubmit.bind(this)}/>
        </div>
    );
}

}

export  default graphql(mutation)(SignupForm);