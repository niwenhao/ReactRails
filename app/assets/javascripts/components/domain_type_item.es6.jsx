class DomainTypeItem extends React.Component {

  clicked() {
    this.props.onselected(this.props.type);
  }

  delete_item() {
    this.props.ondelete(this.props.type);
  }

  render () {
    return (
      <tr>
        <td style={{width: 100 }}><a onClick={ (e) => {this.clicked() } }>{this.props.type.name}</a></td>
        <td style={{width: 300 }}>{this.props.type.description.substring(0, 50)}</td>
        <td style={{width: 50 }}><a onClick={(e) => { this.delete_item() }}>DEL</a></td>
      </tr>
    );
  }
}

DomainTypeItem.propTypes = {
  type: React.PropTypes.object,
  onselected: React.PropTypes.func,
  ondelete: React.PropTypes.func
};
