class DomainTypeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    switch(ev.target.name) {
      case "name":
        this.setState( { name: ev.target.value } );
        break;
      case "description":
        this.setState( { description: ev.target.value } );
        break;
    }

  }

  componentWillReceiveProps(nextProps) {
    this.updateProps(nextProps);
  }

  updateProps(p) {
    if (p.type == null) {
      this.setState({
        name: "",
        description: ""
      });
    } else {
      this.setState({
        name: p.type.name,
        description: p.type.description
      });
    }
  }

  save() {
    console.log("typeName = " + this.state.name);
    console.log("typeDescription = " + this.state.description);

    let xhr = null;

    if (this.props.type == null) {
      xhr = $.ajax({
        url:"domain_types.json",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({ domain_type: { name: this.state.name, description: this.state.description } }),
        dataType:"json"
      });
    } else {
      xhr = $.ajax({
        url: "domain_types/" + this.props.type.id + ".json",
        contentType: "application/json",
        data: JSON.stringify({ domain_type: { name: this.state.name, description: this.state.description } }),
        method: "PUT",
        dataType: "json"
      });
    }

    xhr.done((data, status, x) => {
        this.props.oncommited(); 
      }).fail((x, status, err) => { 
        console.log("status : " + status);
        console.log(x.status + ":" + x.responseText);
        switch(x.status) {
          case 422:
            alert("ERROR : " + x.responseText);
            break;
        }
      });
  }

  render () {
    return (
      <form>
        <div>Name : <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/></div>
        <div>Description : <input type="text" name="description" onChange={this.handleChange} value={this.state.description}/></div>
        <a onClick={ (e) => {this.save()} }>Save</a>
      </form>
    );
  }
}

DomainTypeEdit.propTypes = {
  type: React.PropTypes.object,
  oncommited: React.PropTypes.func
};
