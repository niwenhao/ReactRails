class DomainTypeEdit extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.type == null) {
      this.state = { 
        update: false,
        name: "",
        description: ""
      };
    } else {
      this.state = { 
        update: true,
        name: this.props.type.name,
        description: this.props.type.description
      };
    }
  }

  save() {
    console.log("typeName = " + this.typeName);
    console.log("typeDescription = " + this.typeDescription);
    this.props.oncommited();
  }

  render () {
    return (
      <form>
        <div>Description : <input type="text" onChange={(e) => { this.state.description = e.target.value; }}/></div>
        <a onClick={ this.save() }>Save</a>
      </form>
    );
  }
}

DomainTypeEdit.propTypes = {
  type: React.PropTypes.object,
  oncommited: React.PropTypes.func
};
