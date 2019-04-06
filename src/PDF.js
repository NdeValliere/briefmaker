import React from 'react';
import FloatingLabel from 'floating-label-react'

require('./restart.css');
require('./styles.css');

class TextField extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: this.props.defaultValue }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    // console.log(this.state.value)
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div>
        <p className="hidden">
          {this.state.value}
        </p>
        <span className="hiddenPrint">
          <FloatingLabel
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
            value={this.state.value}
          />
        </span>
      </div>
    )
  }
}

class SelectField extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: this.props.options[0] }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  generateOptions() {
    let options = []
    for (let optionIndex in this.props.options) {
      options.push(<option value={this.props.options[optionIndex]} type="text">{this.props.options[optionIndex]}</option>)
    }
    return options
  }

  render() {
    return (
      <div>
        <p className="hidden">
          {this.state.value}
        </p>
        <span className="hiddenPrint">
          <select onChange={this.handleChange}>
            {this.generateOptions()}
          </select>
        </span>
      </div>
    )
  }
}


class AddField extends React.Component {
 constructor() {
  super()
  this.state = { blocks: []}
  }

  generateBlock() {
    const item = this.state.blocks;
    const content = '';
    item.push({ content })
    this.setState({blocks: item})
  }

  render () {
    return (
      <span className="blocks--generate">
          {this.state.blocks.map(() => {
            return (
              <span>

              <table className="table addtableline">
                <thead>
                  <tr>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="vspace"></tr>
                  <tr>
                    <td className="border border--3">–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––</td>
                  </tr>
                  <tr className="vspace"></tr>
                </tbody>
              </table>

              <table className="table addtable">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                <tr className="hidden ">
                  <td className="form--label ">Type of assessment evidence and number</td>
                  <td className="form--label ">Where to submit</td>
                </tr>
                <tr>
                    <td className="hspan2"><TextField defaultValue="" placeholder="Type of assessment evidence and number"/></td>
                    <td className="hspan2-right"><TextField defaultValue="" placeholder="Where to submit"/></td>
                  </tr>
                  <tr className="vspace"></tr>
                  <tr className="hidden ">
                    <td className="form--label ">Deadline for submission (GMT)</td>
                    <td className="form--label ">Feedback published (GMT)</td>
                  </tr>
                  <tr>
                    <td className="hspan2"><TextField defaultValue="" placeholder="Deadline for submission (GMT)"/></td>
                    <td className="hspan2-right"><TextField defaultValue="" placeholder="Feedback published (GMT)"/></td>
                  </tr>
                </tbody>
              </table>
              </span>
            )
          })}

          <table className="table" id="table5">
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="vspace"></tr>

              <tr className="hiddenPrint">
                <td className="hspan3 addRow addRowUp">
                  <button className="remove" onClick={this.generateBlock.bind(this)}>Add assessment evidence type </button>
                </td>
              </tr>

              <tr>
                <td className="hspan3 addRow">For accommodated hand-in please contact course leader, unit leader or admin staff. See section 1.</td>
              </tr>
            </tbody>
          </table>
      </span>
    )
  }
}

class AddEvents extends React.Component {
 constructor() {
  super()
  this.state = { blocks: []}
  }

  generateBlock() {
    const item = this.state.blocks;
    const content = '';
    item.push({ content })
    this.setState({blocks: item})
  }

  render () {
    return (
      <span className="blocks--generate">
          {this.state.blocks.map(() => {
            return (
              <span>

                <table className="table addtableline2">
                  <thead>
                    <tr>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="vspace"></tr>
                    <tr>
                      <td className="border border--3">–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––</td>
                    </tr>
                  </tbody>
                </table>

                <table className="table addtable2">
                  <thead>
                    <tr className="vspace">
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hidden">
                      <td className="form--label ">Event</td>
                      <td className="form--label ">Date and Time</td>
                    </tr>
                    <tr>
                      <td className="hspan2"><TextField defaultValue="" placeholder="Event"/></td>
                      <td className="hspan2-right"><TextField defaultValue="" placeholder="Date and Time"/></td>
                    </tr>
                  </tbody>
                </table>
              </span>
            )
          })}

          <table className="table" id="table6">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="vspace"></tr>

              <tr className="hiddenPrint">
                <td className="hspan3 addRow addRowUp">
                  <button className="remove" onClick={this.generateBlock.bind(this)}>Add event type</button>
                </td>
              </tr>

              <tr>
                <td className="hspan3 addRow">For more information on assessment refer to section 5.</td>
              </tr>
            </tbody>
          </table>
      </span>
    )
  }
}

class AddLo extends React.Component {
 constructor() {
  super()
  this.state = { blocks: []}
  }

  generateBlock() {
    const item = this.state.blocks;
    const content = '';
    item.push({ content })
    this.setState({blocks: item})
  }

  render () {
    return (
      <span className="blocks--generate">
          {this.state.blocks.map(() => {
            return (
              <span>
                <table className="table addtable3">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hidden">
                      <td className="form--label  hspanX">Learning outcomes (LO)</td>
                      <td className="form--label  hspan1">Assessment criteria</td>
                    </tr>
                    <tr>
                      <td className="hspanX" ><TextField defaultValue="" placeholder="Learning Outcomes (LO)"/></td>
                      <td className="hspan1"><TextField defaultValue="" placeholder="Assessment criteria"/></td>
                    </tr>
                    <tr className="vspace"></tr>
                  </tbody>
                </table>
              </span>
            )
          })}

          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="hspan3 addRow addRowUp">
                  <button className="remove" onClick={this.generateBlock.bind(this)}>Add learning outcome type and marking criteria </button>
                </td>
              </tr>
            </tbody>
          </table>
      </span>
    )
  }
}

class AddEvidence extends React.Component {
 constructor() {
  super()
  this.state = { blocks: []}
  }

  generateBlock() {
    const item = this.state.blocks;
    const content = '';
    item.push({ content })
    this.setState({blocks: item})
  }

  render () {
    return (
      <span className="blocks--generate">
          {this.state.blocks.map(() => {
            return (
              <span>
                <table className="table addtable4">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr className="hidden">
                    <td className="form--label  hspanX">Evidence of achievement</td>
                    <td className="form--label  hspan1">Marking Weight</td>
                  </tr>
                    <tr>
                      <td className="hspanX" ><TextField defaultValue="" placeholder="Assessment evidence requirence"/></td>
                      <td className="hspan1"><TextField defaultValue="" placeholder="Marking weight"/></td>
                    </tr>
                    <tr className="vspace"></tr>
                  </tbody>
                </table>
              </span>
            )
          })}

          <table className="table" id="table10">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="hiddenPrint"></tr>
              <tr className="hiddenPrint">
                <td className="hspan3 addRow addRowUp">
                  <button className="remove" onClick={this.generateBlock.bind(this)}>Add assessment evidence requrience type and marking weight</button>
                </td>
              </tr>

              <tr>
                <td className="hspan3 addRow">The work for this unit will be assessed elementally.</td>
              </tr>
            </tbody>
          </table>
      </span>
    )
  }
}


class PDFContainer extends React.Component {
  state = {
    value: '',
  };

  handleTextChange = (newText) => this.setState({ value: newText });

  render() {
    return (
        <div className="container__edit">
          <div className="container__page" id="html-2-pdfwrapper">

            <table className="table" id="table0">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="hidden ">
                  <td className="form--label">Programme Title</td>
                </tr>
                <tr>
                  <td className="hspan3" id="nameFile"><TextField defaultValue="" placeholder="Programme Title"/></td>
                </tr>
              </tbody>
            </table>

            <table className="table divider" id="divider1">
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="vspace hiddenPrint"></tr>
                <tr className="vspace hiddenPrint"></tr>
                <tr>
                  <td className="border">–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––</td>
                </tr>
              </tbody>
            </table>

            <table className="table" id="table1">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="form--title">1. Unit information</td>
                  <td></td>
                </tr>
                <tr className="vspace"></tr>
                <tr className="hidden ">
                  <td className="form--label ">College</td>
                  <td className="form--label ">Course</td>
                </tr>
                <tr>
                  <td className="hspan2"><TextField defaultValue="" placeholder="College"/></td>
                  <td className="hspan2-right"><TextField defaultValue="" placeholder="Course"/></td>
                </tr>
                <tr className="vspace"></tr>
              </tbody>
            </table>

            <table className="table" id="table2">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="hidden">
                  <td className="form--label hspan1">Unit title and number</td>
                  <td className="form--label hspan1">Duration of Unit</td>
                  <td className="form--label hspan1">Credit rating</td>
                </tr>
                <tr>
                  <td className="hspan1" ><TextField defaultValue="" placeholder="Unit title and number"/></td>
                  <td className="hspan1" ><TextField defaultValue="" placeholder="Duration of Unit"/></td>
                  <td className="hspan1"><TextField defaultValue="" placeholder="Credit rating"/></td>
                </tr>
                <tr className="vspace hiddenPrint"></tr>
                <tr className ="hiddenPrint"></tr>
                <tr className="hidden ">
                  <td className="form--label ">Course / Unit Leader</td>
                  <td className="form--label ">Admin Staff</td>
                  <td className="form--label ">Assessment</td>
                  <td></td>
                </tr>
                <tr>
                  <td><TextField defaultValue="" placeholder="Course / Unit Leader"/></td>
                  <td><TextField defaultValue="" placeholder="Admin Staff"/></td>
                  <td>
                    <label className="dropdown">
                      <span className="hiddenPrint">Assessment</span>
                    </label>
                    <SelectField options={["Holistic", "Elemental"]}/>
                  </td>
                </tr>
              </tbody>
            </table>


            <table className="table divider" id="divider2">
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="vspace"></tr>
                <tr className="vspace"></tr>
                <tr>
                  <td className="border">–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––</td>
                </tr>
              </tbody>
            </table>

            <table className="table" id="table3">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="form--title">2. Dates</td>
                </tr>
                <tr className="vspace"></tr>
                <tr className="hidden ">
                  <td className="form--label ">Unit Briefing Location</td>
                  <td className="form--label ">Date and Time</td>
                </tr>
                <tr>
                  <td className="hspan2"><TextField defaultValue="" placeholder="Unit Briefing Location"/></td>
                  <td className="hspan2-right"><TextField defaultValue="" placeholder="Date and Time"/></td>
                </tr>
              </tbody>
            </table>

            <table className="table" id="divider3">
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="vspace"></tr>
                <tr>
                  <td className="border border--3">–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––</td>
                </tr>
              </tbody>
            </table>

            <table className="table" id="table4">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="vspace"></tr>
                <tr className="hidden">
                  <td className="form--label ">Type of assessment evidence and number</td>
                  <td className="form--label ">Where to submit</td>
                </tr>
                <tr>
                  <td className="hspan2"><TextField defaultValue="" placeholder="Type of assessment evidence and number"/></td>
                  <td className="hspan2-right"><TextField defaultValue="" placeholder="Where to submit"/></td>
                </tr>
                <tr className="vspace"></tr>
                <tr className="hidden">
                  <td className="form--label ">Deadline for submission (GMT)</td>
                  <td className="form--label ">Feedback published (GMT)</td>
                </tr>
                <tr>
                  <td className="hspan2"><TextField defaultValue="" placeholder="Deadline for submission (GMT)"/></td>
                  <td className="hspan2-right"><TextField defaultValue="" placeholder="Feedback published (GMT)"/></td>
                </tr>
              </tbody>
            </table>

            <AddField />

            <AddEvents />

            <table className="table divider" id="divider4">
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="vspace"></tr>
                <tr className="vspace"></tr>
                <tr>
                  <td className="border">–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––</td>
                </tr>
              </tbody>
            </table>

            <table className="table" id="table7">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="vspace"></tr>
                <tr>
                  <td className="form--title">3. Unit overview</td>
                  <td></td>
                </tr>
                <tr className="vspace"></tr>
                <tr>
                  <td className="hspanX"><TextField defaultValue="" placeholder="Definition from student handbook"/></td>
                  <td className="hspan1"></td>
                </tr>
                <tr className="vspace"></tr>
              </tbody>
            </table>

            <table className="table divider" id="divider5">
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="vspace"></tr>
                <tr>
                  <td className="border">–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––</td>
                </tr>
              </tbody>
            </table>

            <table className="table" id="table8">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="vspace"></tr>
                <tr>
                  <td className="form--title">4. Learning outcomes and marking criteria</td>
                  <td></td>
                </tr>
                <tr className="vspace"></tr>
                <tr className="hidden">
                  <td className="form--label  hspanX">Learning outcomes (LO)</td>
                  <td className="form--label  hspan1">Assessment criteria</td>
                </tr>
                <tr>
                  <td className="hspanX" ><TextField defaultValue="" placeholder="Learning Outcomes (LO)"/></td>
                  <td className="hspan1"><TextField defaultValue="" placeholder="Assessment criteria"/></td>
                </tr>
                <tr className="vspace"></tr>
              </tbody>
            </table>

            <AddLo />


            <table className="table divider" id="divider6">
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="vspace"></tr>
                <tr className="vspace"></tr>
                <tr>
                  <td className="border">–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––</td>
                </tr>
              </tbody>
            </table>

            <table className="table" id="table9">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="form--title">5. Assessment evidence</td>
                  <td></td>
                </tr>
                <tr className="vspace"></tr>
                <tr className="hidden ">
                  <td className="form--label  hspanX">Evidence of achievement</td>
                  <td className="form--label  hspan1">Marking Weight</td>
                </tr>
                <tr>
                  <td className="hspanX" ><TextField defaultValue="" placeholder="Assessment evidence requirence"/></td>
                  <td className="hspan1"><TextField defaultValue="" placeholder="Marking weight"/></td>
                </tr>
                <tr className="vspace"></tr>
              </tbody>
            </table>

            <AddEvidence />

            <table className="table divider" id="divider7">
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="vspace"></tr>
                <tr className="vspace"></tr>
                <tr>
                  <td className="border">–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––</td>
                </tr>
              </tbody>
            </table>

            <table className="table" id="table11">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="form--title">6. Resources and reading lists</td>
                  <td></td>
                </tr>
                <tr className="vspace"></tr>
                <tr>
                  <td className="hspanX"><TextField defaultValue="" placeholder="Information from student handbook"/></td>
                  <td></td>
                </tr>
                <tr className="vspace"></tr>
              </tbody>
            </table>

          </div>
        </div>
    );
  }
}

export default PDFContainer;
