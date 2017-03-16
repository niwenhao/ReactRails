class DomainTypeListPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeList: new Array(),
      type: null
    };

    this.fetch();
  }

  fetch() {
    $.getJSON("domain_types.json", data => {
        this.setState({typeList: data, type: null });
    }).fail((xhr, status, error) => {
      console.error(error);
    });
  }

  select_type(type) {
    this.setState({ type: type });
    this.props.onselected(type);
  }

  render () {
    const typeCont = this.state.typeList.map((value) => 
        <DomainTypeItem key={value.id} type={value} onselected={(type) => { this.select_type(type) }} />
        );
    return (
      <div>
      <table><tbody><tr>
      <td>
        <table>
        <thead>
        <tr>
        <th style={{width: 100 }}>name</th>
        <th style={{width: 300 }}>description(left 50 character..)</th>
        </tr>
        </thead>
        <tbody style={{ height:100, overflow: "scroll" }}>
        {typeCont}
        </tbody>
        </table>
      </td>
      <td>
        <DomainTypeEdit type={this.state.type} oncommited={() => { this.fetch() }}/>
      </td>
      </tr></tbody></table>
      <div><a onClick={ (e) => { this.setState( { type: null } ); } }>追加</a></div>
      </div>
    );
  }
}

DomainTypeListPane.propTypes = {
  onselected: React.PropTypes.func
};
