import { render ,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Welcome from "./Welcome";


describe('Welcome',()=>{
    test('renders hello world',()=>{
        render(<Welcome />);                
        const hello_world = screen.getByText('Hello',{exact: false});   
        expect(hello_world).toBeInTheDocument();       
    
    });
  
    test('renders good morning',()=>{
        render(<Welcome />);                //setting up env
        const hello_world = screen.getByText('Good Morning')   //action
        expect(hello_world).toBeInTheDocument();       //expectation
    
    });

    //when button is clicked

    test('renders if button is not clicked',()=>{
        render(<Welcome />)
        const not_clicked = screen.getByText('morning',{exact:false})
        expect(not_clicked).toBeInTheDocument();
    })

    test('renders if button is clicked',()=>{
        render(<Welcome />)
        const buttonElement = screen.getByRole('button')
       userEvent.click(buttonElement);
       const clicked = screen.getByText('night',{exact:false})
       expect(clicked).toBeInTheDocument();

    });

    test('removes good morning button is clicked',()=>{
        render(<Welcome />)
        const buttonElement = screen.getByRole('button')
       userEvent.click(buttonElement);
       const changed_text = screen.queryByText('morning',{exact:false})
       expect(changed_text).toBeNull();

    })

});

