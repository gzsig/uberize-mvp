// import React, { Component } from 'react';
// import ATag from '../ATag';
// import * as S from './style';

// class SchedualCard extends Component {
//   render() {
//     return (
//       <S.TimeCard onClick={()=>{console.log('here')}}>
//         <p> {this.props.start}</p>
//         <p> {this.props.end}</p>
//         <ATag path={`${this.props.router.match.url}/confirmacao/${this.props.id}`} text='confirmar' />
//       </S.TimeCard>
//     );
//   }
// }

// export default SchedualCard;


import React, { Component } from 'react';
import ATag from '../ATag';
import * as S from './style';

class SchedualCard extends Component {
  render() {
    return (
      <S.TimeCard>
      {/* <div>
        {this.props.day}/
        {Number(this.props.month) + 1}/
        {this.props.year} 
      </div> */}
        <div>
          <span>
            {this.props.startH}h{this.props.startM}
          </span>
          -
          <span>
            {this.props.endH}h{this.props.endM}
          </span>
        </div>
        <ATag
          path={`${this.props.router.match.url}/confirmacao/${this.props.id}`}
          text='confirmar'
        />
      </S.TimeCard>
    );
  }
}

export default SchedualCard;
