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
    console.log("try to fetch /domain_types");
    const pro = new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "domain_types.json");
        xhr.onload = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            resolve(xhr.response);
          } else {
            reject(new Error(xhr.statusText));
          }
        };

        xhr.send();
      }
    );
    pro.then(
      (value) => {
        console.log(value);
        this.setState({
          typeList: JSON.parse(value),
          type: null
        });
      }, (err) => {
        console.log(err);
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
