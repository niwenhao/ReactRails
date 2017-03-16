class DomainTypeListPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeList: new Array(),
      type: null,
      color: "white"
    };

    this.fetch();
  }

  fetch() {
    this.setState({color: "blue" });
    $.getJSON("domain_types.json", data => {
        this.setState({typeList: data, type: null, color: "white"});
    }).fail((xhr, status, error) => {
      console.error(error);
    });
  }

  select_type(type) {
    this.setState({ type: type });
    this.props.onselected(type);
  }

  delete_item(type) {
    const request = $.ajax({
      url: "domain_types/" + type.id + ".json",
      method: "DELETE",
      dataType: "json"
    });

    request.done((data, status, req) => {
      this.fetch();
    }).fail((req, status, err) => {
      console.log("status : " + status);
      console.error(err);
    })
  }

  render () {
    const typeCont = this.state.typeList.map((value) => 
        <DomainTypeItem key={value.id} 
                        type={value} 
                        onselected={(type) => { this.select_type(type) }} 
                        ondelete={(type) => { this.delete_item(type) } }
                        />
        );
    return (
      <div>
      <div style={{width: "100%", textAlign: "right"}}>
        <a onClick={(e) => { this.fetch() }}>Refresh</a>
      </div>
      <table><tbody><tr>
      <td style={{backgroundColor: this.state.color}}>
        <table>
        <thead>
        <tr>
        <th style={{width: 100 }}>name</th>
        <th style={{width: 300 }}>description(left 50 character..)</th>
        <th style={{width: 50 }}></th>
        </tr>
        </thead>
        <tbody style={{ height:100, overflow: "scroll" }}>
        {typeCont}
        </tbody>
        </table>
      </td>
      <td style={{verticalAlign: "top"}}>
        <DomainTypeEdit type={this.state.type} 
                        oncommited={() => { this.fetch() }} />
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
