import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FindVideo = props => (
  <Container
    fluid
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}
  >
    <Row style={{ marginTop: '3rem' }}>
      <Form
        onSubmit={event => {
          props.submitHandler(event);
        }}
        style={{ margin: '0 auto', marginTop: '3rem', width: '70%' }}
      >
        <label htmlFor="tag_search">type in a tag to search</label>
        <InputGroup className="mb-3" style={{ padding: '2rem' }} hasValidation>
          <FormControl
            placeholder="tag to search"
            onChange={event => props.inputChangedHandler(event)}
          />
          <Button
            variant="outline-secondary"
            type="submit"
            value="Submit"
            style={{ marginLeft: '1rem' }}
          >
            Submit
          </Button>
        </InputGroup>
      </Form>
    </Row>
  </Container>
);

export default FindVideo;
