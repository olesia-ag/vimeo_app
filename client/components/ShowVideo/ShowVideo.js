import React from 'react';

const ShowVideo = ({ video }) => {
  if (!video || video === undefined) {
    return null;
  } else {
    const getAttrs = iframeTag => {
      var doc = document.createElement('div');
      doc.innerHTML = iframeTag;
      const iframe = doc.getElementsByTagName('iframe')[0];
      return [].slice.call(iframe.attributes).reduce((attrs, element) => {
        if (element.name === 'width' || element.name === 'height') {
          attrs[element.name] = element.value / 3;
        } else if (element.name === 'allowfullscreen') {
          attrs.allowFullScreen = true;
        } else if (element.name === 'frameborder') {
          attrs.frameBorder = element.value;
        } else {
          attrs[element.name] = element.value;
        }
        console.log('attrs', attrs);
        return attrs;
      }, {});
    };

    return (
      <div>
        <iframe
          {...getAttrs(video.embed.html)}
          allowFullScreen={false}
          style={{ width: '40rem', margin: '3rem auto' }}
        />
      </div>
    );
  }
};

export default ShowVideo;
