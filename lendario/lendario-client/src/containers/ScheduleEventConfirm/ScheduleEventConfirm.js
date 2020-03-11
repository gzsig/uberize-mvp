import React, { Component } from 'react';
import * as G from '../../resources/globalStyle';
import { SchedualConfirm } from '../../components';

class ScheduleEventConfirm extends Component {
  render() {
    return (
      <G.Wrapper>
        {/* <G.Frame> */}
          <SchedualConfirm router={this.props} />
        {/* </G.Frame> */}
      </G.Wrapper>
    );
  }
}

export default ScheduleEventConfirm;
