// import React, { Component, Fragment } from 'react';
// import server from '../../resources/axios';
// import * as G from '../../resources/globalStyle';
// import * as S from './style';
// import { SchedualCard, Loader } from '../../components';
// import AppContext from '../../context/AppContext';

// class ScheduleEvent extends Component {
//   componentDidMount = () => {
//     server()
//       .get(`/patient/appointment/${this.props.match.params.id}`)
//       .then(res => {
//         this.context.updateState({ slots: res.data.slots });
//       })
//       .catch(err => console.log(err));
//   };
//   render() {
//     return (
//       <Fragment>
//         {this.context.state.slots.length ? (
//           <G.Wrapper>
//             <G.Frame>
//               <p>ScheduleEvent</p>
//               <S.Times>
//                 {this.context.state.slots.map((event, index) => {
//                   return (
//                     <SchedualCard
//                       key={event.id}
//                       id={event.id}
//                       router={this.props}
//                       start={new Date(event.start).toLocaleString('en-US', {
//                         timeZone: 'America/Sao_Paulo'
//                       })}
//                       end={new Date(event.end).toLocaleString('en-US', {
//                         timeZone: 'America/Sao_Paulo'
//                       })}
//                     />
//                   );
//                 })}
//               </S.Times>
//             </G.Frame>
//           </G.Wrapper>
//         ) : (
//           <Loader />
//         )}
//       </Fragment>
//     );
//   }
// }

// ScheduleEvent.contextType = AppContext;
// export default ScheduleEvent;

import React, { Component, Fragment } from 'react';
import server from '../../resources/axios';
import * as G from '../../resources/globalStyle';
import * as S from './style';
import { SchedualCard, Loader } from '../../components';
import AppContext from '../../context/AppContext';

class ScheduleEvent extends Component {
  componentDidMount = () => {
    server()
      .get(`/patient/appointment/${this.props.match.params.id}`)
      .then(res => {
        this.context.updateState({ slots: res.data.slots });
      })
      .catch(err => console.log(err));
  };

  // renderTimes = () => {
  //   this.context.state.slots.map((event, index, elements) => {

  //   }
  // }

  render() {
    let date = null;
    return (
      <Fragment>
        {this.context.state.slots.length ? (
          <G.Wrapper>
            <G.Frame>
              <G.PgTitle>Agendar Horário</G.PgTitle>
              <S.Times>
                {this.context.state.slots.map((event, index, elements) => {
                  return (
                    <Fragment>
                      {(index === 0 ||
                        (index > 0 &&
                          new Date(elements[index].start).getDate() !==
                            new Date(elements[index - 1].start).getDate())) && (
                        <S.Title>
                          {new Date(event.start)
                            .getDate()
                            .toLocaleString('en-US', {
                              timeZone: 'America/Sao_Paulo'
                            })}
                          /
                          {Number(
                            new Date(event.start)
                              .getMonth()
                              .toLocaleString('en-US', {
                                timeZone: 'America/Sao_Paulo'
                              })
                          ) + 1}
                          /{new Date(event.start).getFullYear()}
                        </S.Title>
                      )}

                      <SchedualCard
                        key={event.id}
                        id={event.id}
                        router={this.props}
                        // day={new Date(event.start)
                        //   .getDate()
                        //   .toLocaleString('pt-BR', {
                        //     timeZone: 'America/Sao_Paulo'
                        //   })}
                        // month={new Date(event.start)
                        //   .getMonth()
                        //   .toLocaleString('pt-BR', {
                        //     timeZone: 'America/Sao_Paulo'
                        //   })}
                        // year={new Date(event.start)
                        //   .getFullYear()
                        //   .toLocaleString('pt-BR', {
                        //     timeZone: 'America/Sao_Paulo'
                        //   })}
                        startH={new Date(event.start)
                          .getHours()
                          .toLocaleString('pt-BR', {
                            timeZone: 'America/Sao_Paulo'
                          })}
                        startM={new Date(event.start)
                          .getMinutes()
                          .toLocaleString('pt-BR', {
                            timeZone: 'America/Sao_Paulo'
                          })}
                        endH={new Date(event.end)
                          .getHours()
                          .toLocaleString('pt-BR', {
                            timeZone: 'America/Sao_Paulo'
                          })}
                        endM={new Date(event.end)
                          .getMinutes()
                          .toLocaleString('pt-BR', {
                            timeZone: 'America/Sao_Paulo'
                          })}
                      />
                    </Fragment>
                  );
                })}
              </S.Times>
            </G.Frame>
          </G.Wrapper>
        ) : (
          <Loader />
        )}
      </Fragment>
    );
  }
}

ScheduleEvent.contextType = AppContext;
export default ScheduleEvent;
