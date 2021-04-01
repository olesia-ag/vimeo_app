import React, { useState } from 'react';
import FindVideo from './components/FindVideo/FindVideo';
import ShowVideo from './components/ShowVideo/ShowVideo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.scss';
import axios from 'axios';

const App = () => {
  const [tagToFind, setTagToFind] = useState('');
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);
  const [loadin, setLoadin] = useState(false);

  const findRandomVideo = () => {
    setLoading(true);
    axios
      .post(
        'http://localhost:8080/api/vimeo',
        { value: tagToFind },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(res => {
        setLoading(false);
        console.log('response:', res);
        setVideo(res.data);
      });
  };

  const submitHandler = event => {
    event.preventDefault();
    findRandomVideo();
  };

  const inputChangedHandler = event => {
    setTagToFind(event.target.value);
  };
  let embedVideo = null;
  if (loading) {
    embedVideo = <p>Loading...</p>;
  } else if (video) {
    embedVideo = <ShowVideo video={video} />;
  }

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <FindVideo
            inputChangedHandler={inputChangedHandler}
            submitHandler={submitHandler}
            findRandomVideo={findRandomVideo}
          />
        </Row>
        <Row>
          <Col
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'flex-start',
              marginTop: '0'
            }}
          >
            {embedVideo}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
