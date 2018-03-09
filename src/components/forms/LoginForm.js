import React from 'react';
import {Form , Button} from 'semantic-ui-react';

class LoginForm extends React.Component {
    state={
        data: {
            email: '',
            password: ''
        },
        loadin : false,
        errors : {}   
    };
    onchange(e){
        this.setState({data: {...this.state.data, [e.target.name]:e.target.value}});
    }
    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});
    }
    validate =(data) =>{
        const errors ={};
        if(!data.password) errors.password="Can't be blank"
        return errors;
    }
  render() {
    const { data } = this.state;
     return (
    <Form onSubmit={this.onSubmit}>
     <Form.Field>
     <label htmlFor="email">Email</label>
     <input type="email"
             id="email" 
             name="email" 
             placeholder="example@example.com"
             value={data.password}
             onChange={e => this.onchange(e)}
              />
     </Form.Field>
     <Form.Field>
     <label htmlFor="password">Password</label>
     <input type="password"
             id="password" 
             name="password" 
             placeholder="make it secure"
             value={data.email}
             onChange={e => this.onchange(e)}
              />
     </Form.Field>
    <Button primary> Login </Button>
    </Form>
     );
  }
}

export default LoginForm;
