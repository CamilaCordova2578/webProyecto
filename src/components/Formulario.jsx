import {Form, Row, Col, FormGroup, Label, Input, Button, FormText} from 'reactstrap';
import "../css/formulario.css"
function Formulario() {
    return (
       <>
       <div className="form-contenedor">
            <Form className="formulario">
            <h2 className='h2'>Envianos un mensaje</h2>
                <FormGroup row>
                    <Label for="nombre" sm={12}>
                        Nombre *
                    </Label>
                    <Col sm={12}>
                        <Input
                            id="nombre"
                            name="nombre"
                            type="text"
                            required
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleEmail" sm={12}>
                        Correo electrónico *
                    </Label>
                    <Col sm={12}>
                        <Input
                            id="exampleEmail"
                            name="email"
                            type="email"
                            required
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="asunto" sm={12}>
                        Asunto
                    </Label>
                    <Col sm={12}>
                        <Input
                            id="asunto"
                            name="asunto"
                            type="text"
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="referencia" sm={12}>
                        Referencia
                    </Label>
                    <Col sm={12}>
                        <Input
                            id="referencia"
                            name="referencia"
                            type="text"
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleText" sm={12}>
                        Mensaje *
                    </Label>
                    <Col sm={12}>
                        <Input
                            id="exampleText"
                            name="text"
                            type="textarea"
                            required
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={12} style={{ textAlign: 'center' }}>
                        <Button>
                            Enviar Mensaje
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
       
       
       </>
    );
}

export default Formulario;