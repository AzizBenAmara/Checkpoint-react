import react from "react";
import { Form, Button } from 'react-bootstrap';
import "./form.css"

const form =()=> {
    return (<div className="formulaire">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>Tapez votre adresse mail</b></Form.Label>
          <Form.Control type="email" placeholder="Adresse mail" />
          <Form.Text className="text-muted">
            Vous allez recevoir un mail de confirmation
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><b>Tapez votre mot de passe</b></Form.Label>
          <Form.Control type="password" placeholder="Mot de passe" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Se souvenir de moi" />
        </Form.Group>
        <Button className="Button1" variant="primary" type="submit">
          <b>Je valide</b>
        </Button>
      </Form>
      </div>
      )}

      export default form