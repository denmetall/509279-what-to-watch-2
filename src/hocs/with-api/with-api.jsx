import React, {PureComponent} from 'react';
import {api} from '../../store';

const withApi = (Component) => {
  class WithApi extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: false,
        error: null,
      };

      this._onPostHandler = this._onPostHandler.bind(this);
    }

    _onPostHandler(url, params, onResponse) {
      this.setState({isLoading: true});

      api.post(url, params)
        .then((response) => {
          if (typeof onResponse === `function`) {
            onResponse(response.data);
          }

          this.setState({isLoading: false});
        })
        .catch((error) => this.setState({
          error,
          isLoading: false
        }));
    }

    render() {
      return <Component
        {...this.props}
        isLoading={this.state.data}
        error={this.state.error}
        onPost={this._onPostHandler}
      />;
    }
  }

  WithApi.propTypes = {};

  return WithApi;
};

export default withApi;
