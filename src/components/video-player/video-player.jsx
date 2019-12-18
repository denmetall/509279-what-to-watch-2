import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this._sourceRef = React.createRef();

    this.state = {
      isPlaying: props.isPlaying
    };
  }

  render() {
    const {poster, src} = this.props;
    return <video
      muted
      width="280"
      height="175"
      poster={poster}
      ref={this._videoRef}
    >
      <source src={src} ref={this._sourceRef}/>
    </video>;
  }

  componentDidMount() {
    const {poster, src} = this.props;

    const video = this._videoRef.current;
    const source = this._sourceRef.current;
    video.poster = poster;
    source.src = src;
    const type = src.substr(src.lastIndexOf(`.`) + 1);
    source.type = `video/${type}`;
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    const source = this._sourceRef.current;

    source.src = ``;
    video.poster = ``;
  }
}

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default VideoPlayer;
