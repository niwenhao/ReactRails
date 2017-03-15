class DomainTypeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
  }

  save() {
    console.log("typeName = " + this.state.name);
    console.log("typeDescription = " + this.state.description);
    this.props.oncommited();
  }

  render () {
    return (
      <form>
        <div>Name : <input type="text" onChange={(e) => { this.setState( { name: e.target.value });}} value={this.props.type == null ? "": this.props.type.name}/></div>
        <div>Description : <input type="text" onChange={(e) => { this.setState( { description: e.target.value });}} value={this.props.type==null ? "": this.props.type.description}/></div>
        <a onClick={ (e) => {this.save()} }>Save</a>
      </form>
    );
  }
}

DomainTypeEdit.propTypes = {
  type: React.PropTypes.object,
  oncommited: React.PropTypes.func
};
