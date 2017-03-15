class DomainTypeItem extends React.Component {

  clicked() {
    this.props.onselected(this.props.type);
  }

  render () {
    return (
      <tr>
        <td style={{width: 100 }}><a onClick={ (e) => {this.clicked() } }>{this.props.type.name}</a></td>
        <td style={{width: 300 }}>{this.props.type.description.substring(0, 50)}</td>
      </tr>
    );
  }
}

DomainTypeItem.propTypes = {
  type: React.PropTypes.object,
  onselected: React.PropTypes.func
};
