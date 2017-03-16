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
    this.props.oncommited();
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
