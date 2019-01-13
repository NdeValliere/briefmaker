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
        <FloatingLabel
          // id='email'
          // name='email'
          placeholder={this.props.placeholder}
          // type='email'
          onChange={this.handleChange}
          value={this.state.value}
        />
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
        <select onChange={this.handleChange}>
          {this.generateOptions()}
        </select>
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
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border--3">–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––</td>
                  </tr>
                </tbody>
              </table>

              <table className="table addtable">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                <tr className="hidden">
                  <td className="form--label">Assessment Evidence</td>
                  <td className="form--label">Date and Time</td>
                  <td className="form--label">Where to Submit</td>
                </tr>
                <tr>
                    <td><TextField defaultValue="" placeholder="Assessment Evidence"/></td>
                    <td><TextField defaultValue="" placeholder="Date and Time"/></td>
                    <td><TextField defaultValue="" placeholder="Where to Submit"/></td>
                  </tr>
                  <tr className="vspace"></tr>
                  <tr>
                    <td></td>
                    <td><TextField defaultValue="" placeholder="Feedback Published"/></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              </span>
            )
          })}

          <table className="table" id="table8">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <tr className="vspace"></tr>
                <td className="hspan3 addRow addRowUp">
                  <button className="remove" onClick={this.generateBlock.bind(this)}>Add another type of assessment evidence<span className="addRowUpButton">+</span></button>
                </td>
                <td className="border">–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––</td>
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
                <table className="table addtable2">
                  <thead>
                    <tr className="vspace">
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="vspace"></tr>
                    <tr className="hidden">
                      <td className="form--label">Event</td>
                      <td className="form--label">Date and Time</td>
                    </tr>
                    <tr>
                      <td><TextField defaultValue="" placeholder="Event"/></td>
                      <td><TextField defaultValue="" placeholder="Date and Time"/></td>
                      <td></td>
                    </tr>
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
              <tr>
              <tr className="vspace"></tr>
                <td className="hspan3 addRow addRowUp">
                  <button className="remove" onClick={this.generateBlock.bind(this)}>Add another type of event<span className="addRowUpButton">+</span></button>
                </td>
                <td className="border">–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––</td>
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
                      <td className="form--label hspan2">Learning outcomes (LO)</td>
                      <td className="form--label hspan1">Marking criteria</td>
                    </tr>
                    <tr>
                      <td className="hspan2" ><TextField defaultValue="" placeholder="Learning Outcomes (LO)"/></td>
                      <td className="hspan1"><TextField defaultValue="" placeholder="Marking criteria"/></td>
                    </tr>
                    <tr className="vspace"></tr>
                  </tbody>
                </table>
              </span>
            )
          })}

          <table className="table" id="table13">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="hspan3 addRow addRowUp">
                  <button className="remove" onClick={this.generateBlock.bind(this)}>Add another type of learning outcome and marking criteria <span className="addRowUpButton">+</span></button>
                </td>
                <td className="border">–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––</td>
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
                    <td className="form--label hspan2">Evidence of achievement</td>
                    <td className="form--label hspan1">Marking Weight</td>
                  </tr>
                    <tr>
                      <td className="hspan2" ><TextField defaultValue="" placeholder="Evidence of achievement"/></td>
                      <td className="hspan1"><TextField defaultValue="" placeholder="Marking weight"/></td>
                    </tr>
                    <tr className="vspace"></tr>
                  </tbody>
                </table>
              </span>
            )
          })}

          <table className="table" id="table16">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="hspan3 addRow addRowUp">
                  <button className="remove" onClick={this.generateBlock.bind(this)}>Add another type of evidence<span className="addRowUpButton">+</span></button>
                </td>
                <td className="border">–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––</td>
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

            <table className="table" id="table1">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="hspan3"><TextField defaultValue="" placeholder="Programme Title"/></td>
                </tr>
                <tr className="vspace"></tr>
                <tr className="vspace"></tr>
                <tr>
                  <td></td>
                  <td className="form--title">1 &nbsp; Unit information</td>
                  <td></td>
                </tr>
                <tr className="vspace"></tr>
                <tr className="vspace"></tr>
                <tr className="hidden">
                  <td className="form--label">College</td>
                  <td className="form--label">Course</td>
                  <td className="form--label">NO. of submissions</td>
                </tr>
                <tr>
                  <td><TextField defaultValue="" placeholder="College"/></td>
                  <td><TextField defaultValue="" placeholder="Course"/></td>
                  <td><TextField defaultValue="" placeholder="No. of submissions"/></td>
                </tr>
                <tr className="vspace"></tr>
              </tbody>
            </table>

            <table className="table" id="table2">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="hidden">
                  <td className="form--label hspan2">Unit title and number</td>
                  <td className="form--label hspan1">Credit rating</td>
                </tr>
                <tr>
                  <td className="hspan2" ><TextField defaultValue="" placeholder="Unit title and number"/></td>
                  <td className="hspan1"><TextField defaultValue="" placeholder="Credit rating"/></td>
                </tr>
                <tr className="vspace"></tr>
              </tbody>
            </table>

            <table className="table" id="table3">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              <tr className="hidden">
                <td className="form--label">Course / Unit Leader</td>
                <td className="form--label">Admin Staff</td>
                <td></td>
              </tr>
                <tr>
                  <td><TextField defaultValue="" placeholder="Course / Unit Leader"/></td>
                  <td><TextField defaultValue="" placeholder="Admin Staff"/></td>
                  <td>
                    <label className="dropdown">
                      <span>Assessment</span>
                    </label>
                    <SelectField options={["Holistic", "Elemental"]}/>
                  </td>
                </tr>
                <tr className="vspace"></tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td><TextField defaultValue="" placeholder="Duration"/></td>
                </tr>
                <tr className="vspace"></tr>
                <tr>
                  <td></td>
                  <td className="form--title">2 &nbsp; Dates</td>
                  <td></td>
                </tr>
                <tr className="vspace"></tr>
                <tr className="vspace"></tr>
                <tr className="vspace"></tr>
                <tr className="hidden">
                  <td className="form--label">Unit Briefing Location</td>
                  <td className="form--label">Date and Time</td>
                </tr>
                <tr>
                  <td><TextField defaultValue="" placeholder="Unit Briefing Location"/></td>
                  <td><TextField defaultValue="" placeholder="Date and Time"/></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <table className="table" id="table5">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="vspace"></tr>
                <tr className="hidden">
                  <td className="form--label">Assessment Evidence</td>
                  <td className="form--label">Date and Time</td>
                  <td className="form--label">Where to Submit</td>
                </tr>
                <tr>
                  <td><TextField defaultValue="" placeholder="Assessment Evidence"/></td>
                  <td><TextField defaultValue="" placeholder="Date and Time"/></td>
                  <td><TextField defaultValue="" placeholder="Where to Submit"/></td>
                </tr>
                <tr className="vspace"></tr>
                <tr>
                  <td></td>
                  <td><TextField defaultValue="" placeholder="Feedback Published"/></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <AddField />

            <table className="table" id="table9">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="vspace"></tr>
                <tr className="vspace"></tr>
                <tr className="hidden">
                  <td className="form--label">Feedback Tutorial Location</td>
                  <td className="form--label">Date and Time</td>
                </tr>
                <tr>
                  <td><TextField defaultValue="" placeholder="Feedback Tutorial Location"/></td>
                  <td><TextField defaultValue="" placeholder="Date and Time"/></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <AddEvents />

            <table className="table" id="table11">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="vspace"></tr>
                <tr>
                  <td></td>
                  <td className="form--title">3 &nbsp; Unit overview</td>
                  <td></td>
                </tr>
                <tr className="vspace"></tr>
                <tr className="vspace"></tr>
                <tr>
                  <td className="hspan1"></td>
                  <td className="hspan2 hspan2-right"><TextField defaultValue="" placeholder="Definition from student handbook"/></td>
                  <td className="hspan0"></td>
                </tr>
                <tr className="vspace"></tr>
                <tr className="vspace"></tr>
                <tr className="vspace"></tr>
                <tr>
                  <td></td>
                  <td className="form--title">4 &nbsp; Learning outcomes and marking criteria</td>
                  <td></td>
                </tr>
                <tr className="vspace"></tr>
              </tbody>
            </table>

            <table className="table" id="table12">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="hidden">
                  <td className="form--label hspan2">Learning outcomes (LO)</td>
                  <td className="form--label hspan1">Marking criteria</td>
                </tr>
                <tr>
                  <td className="hspan2" ><TextField defaultValue="" placeholder="Learning Outcomes (LO)"/></td>
                  <td className="hspan1"><TextField defaultValue="" placeholder="Marking criteria"/></td>
                </tr>
                <tr className="vspace"></tr>
              </tbody>
            </table>

            <AddLo />

            <table className="table" id="table14">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td className="form--title">5 &nbsp; Assessment evidence</td>
                  <td></td>
                </tr>
                <tr className="vspace"></tr>
              </tbody>
            </table>

            <table className="table" id="table15">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="hidden">
                  <td className="form--label hspan2">Evidence of achievement</td>
                  <td className="form--label hspan1">Marking Weight</td>
                </tr>
                <tr>
                  <td className="hspan2" ><TextField defaultValue="" placeholder="Evidence of achievement"/></td>
                  <td className="hspan1"><TextField defaultValue="" placeholder="Marking weight"/></td>
                </tr>
                <tr className="vspace"></tr>
              </tbody>
            </table>

            <AddEvidence />

            <table className="table" id="table17">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td className="form--title">6 &nbsp; Resources and reading lists</td>
                  <td></td>
                </tr>
                <tr className="vspace"></tr>
                <tr>
                  <td></td>
                  <td className="hspan2 hspan2-right"><TextField defaultValue="" placeholder="Information from student handbook"/></td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
    );
  }
}

export default PDFContainer;
